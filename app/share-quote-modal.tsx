import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ViewShot from "react-native-view-shot";

const ShareQuoteModal = () => {
  const router = useRouter();
  const {
    themeSource,
    activeQuote,
    fontSize,
    fontFamily,
    textColor,
    textAlign,
    textShadowStyle,
  } = useAppContext();

  const viewShotRef = useRef<ViewShot>(null);

  const handleSaveImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "We need permission to save photos to your device."
        );
        return;
      }

      const uri = await viewShotRef.current?.capture?.();
      if (!uri) {
        throw new Error("Could not capture image.");
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("Saved!", "The quote image has been saved to your photos.");
    } catch (error: any) {
      console.error("Error saving image:", error);
      Alert.alert("Error", "Sorry, we could not save the image.");
    }
  };

  const QuoteCardContent = () => (
    <View className="flex-1 p-8 items-center justify-center">
      <Text
        style={[
          {
            fontFamily: fontFamily,
            fontSize: fontSize * 0.85,
            color: textColor,
            textAlign: textAlign,
          },
          textShadowStyle,
        ]}
        className="leading-relaxed"
      >
        {activeQuote.text}
      </Text>

      <View className="flex-row items-center bg-black/40 rounded-full px-4 py-1.5 mt-8 border border-white/10">
        <Text className="text-white font-bold text-lg mr-2">”</Text>
        <Text className="text-white/60 text-xs font-bold tracking-widest uppercase">motivation</Text>
      </View>
    </View>
  );

  const isImageBackground = typeof themeSource === "object" && themeSource.uri;

  const SHARE_CHANNELS = [
    { name: "Instagram", icon: "instagram" },
    { name: "Stories", icon: "plus" },
    { name: "Messages", icon: "message-circle" },
    { name: "Facebook", icon: "facebook" },
    { name: "TikTok", icon: "music" },
  ];

  return (
    <View className="flex-1 bg-[#050505]">
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-12 h-12 bg-white/5 rounded-full items-center justify-center border border-white/10"
        >
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold tracking-tighter">Share</Text>
        <View className="w-12" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-6">
        <View className="flex-row mt-8 mb-12">
          <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
            <View
              style={{ transform: [{ rotate: '-2deg' }] }}
              className="w-[240px] aspect-[9/16] rounded-[40px] overflow-hidden border border-white/10"
            >
              {isImageBackground ? (
                <ImageBackground source={themeSource} resizeMode="cover" className="flex-1">
                  <View className="absolute inset-0 bg-black/20" />
                  <QuoteCardContent />
                </ImageBackground>
              ) : (
                <View style={{ flex: 1, backgroundColor: typeof themeSource === "object" ? themeSource.color : "black" }}>
                  <QuoteCardContent />
                </View>
              )}
            </View>
          </ViewShot>

          <View className="flex-1 justify-center pl-8">
            <View className="space-y-6">
              <TouchableOpacity
                onPress={handleSaveImage}
                className="w-14 h-14 bg-emerald-500 rounded-3xl items-center justify-center shadow-lg shadow-emerald-500/30"
              >
                <Feather name="download" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/explore-topics/collections-screen")}
                className="w-14 h-14 bg-white/5 rounded-3xl items-center justify-center border border-white/10 mt-4"
              >
                <Feather name="bookmark" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                className="w-14 h-14 bg-white/5 rounded-3xl items-center justify-center border border-white/10 mt-4"
              >
                <Feather name="copy" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-6">Select Channel</Text>
        <View className="flex-row flex-wrap justify-between">
          {SHARE_CHANNELS.map((channel) => (
            <TouchableOpacity
              key={channel.name}
              className="w-[48%] bg-[#111111] border border-white/5 rounded-[28px] p-6 mb-4 items-center"
            >
              <View className="w-12 h-12 bg-white/5 rounded-2xl items-center justify-center mb-4">
                <Feather name={channel.icon as any} size={24} color="white" />
              </View>
              <Text className="text-white font-bold tracking-tight">{channel.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-full bg-[#111111] border border-emerald-500/20 rounded-[28px] p-6 mb-8 flex-row items-center justify-center"
          >
            <Feather name="edit-3" size={20} color="#10b981" />
            <Text className="text-emerald-500 font-bold ml-3 tracking-tight">Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShareQuoteModal;

