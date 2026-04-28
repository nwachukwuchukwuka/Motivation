import TextControls from "@/components/TextControls";
import { COLORS } from "@/constants/constants";
import { ThemeSource, useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const QuoteEditorScreen = () => {
  const router = useRouter();
  const {
    themeSource,
    setThemeSource,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    textColor,
    setTextColor,
    textAlign,
    setTextAlign,
    letterCaseStyle,
    setLetterCaseStyle,
  } = useAppContext();

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  type BackgroundSource = { uri?: string; color?: string };
  const [background, setBackground] = useState<ThemeSource>(themeSource);

  const [activeTab, setActiveTab] = useState("Background");
  const [isCustomImage, setIsCustomImage] = useState(false);
  const { quoteText, quoteAuthor } = useLocalSearchParams<{
    quoteText: string;
    quoteAuthor: string;
  }>();

  const textShadowStyle = useMemo(() => {
    switch (letterCaseStyle) {
      case "thin":
        return {
          textShadowColor: "rgba(0,0,0,0.4)",
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 3,
        };
      case "thick":
        return {
          textShadowColor: "rgba(0,0,0,0.8)",
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 8,
        };
      case "filled":
      default:
        return {};
    }
  }, [letterCaseStyle]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      setBackground({ uri: result.assets[0].uri });
      setIsCustomImage(true);
    }
  };

  useEffect(() => {
    setBackground(themeSource);

    if (typeof themeSource === "object" && themeSource.uri) {
      setIsCustomImage(true);
    }
  }, [themeSource]);

  const handleDone = () => {
    setThemeSource(background);
    router.back();
  };

  const renderBottomControls = () => {
    return (
      <View className="mt-2">
        {isColorPickerVisible ? (
          <View className="flex-row items-center bg-[#0a0a0a] rounded-2xl p-3 border border-white/5">
            <TouchableOpacity
              onPress={() => setIsColorPickerVisible(false)}
              className="w-12 h-12 bg-[#111111] rounded-full items-center justify-center mr-3 border border-white/10"
            >
              <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
              <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center bg-[#111111] mx-1.5 border border-emerald-500/30">
                <Feather name="aperture" size={20} color="#10b981" />
              </TouchableOpacity>
              {COLORS.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setBackground({ color })}
                  className="w-10 h-10 rounded-full mx-1.5 border border-white/10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </ScrollView>
          </View>
        ) : (
          <View
            style={styles.shadow2xl}
            className="flex-row justify-between items-center bg-[#0a0a0a] rounded-[24px] p-2 border border-white/5"
          >
            <Pressable onPress={pickImage} className="flex-1 items-center py-5 bg-[#111111]/50 rounded-2xl mx-1 border border-white/5">
              <Feather name="camera" size={22} color="#10b981" />
              <Text className="text-zinc-500 text-[10px] mt-2 font-bold tracking-tight">Camera</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/editor/unsplash")}
              className="flex-1 items-center py-5 bg-[#111111]/50 rounded-2xl mx-1 border border-white/5"
            >
              <Feather name="image" size={22} color="#10b981" />
              <Text className="text-zinc-500 text-[10px] mt-2 font-bold tracking-tight">Unsplash</Text>
            </Pressable>
            <Pressable
              onPress={() => setIsColorPickerVisible(true)}
              className="flex-1 items-center py-5 bg-[#111111]/50 rounded-2xl mx-1 border border-white/5"
            >
              <Feather name="droplet" size={22} color="#10b981" />
              <Text className="text-zinc-500 text-[10px] mt-2 font-bold tracking-tight">Colors</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
  };

  const MainContent = () => (
    <View className="flex-1 justify-center items-center px-8 pb-32">
      <Text
        style={[
          {
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: textColor,
            textAlign: textAlign,
          },
          textShadowStyle,
        ]}
        className="leading-relaxed"
      >
        {quoteText}
      </Text>
      {quoteAuthor && (
        <Text
          style={[
            {
              fontFamily,
              fontSize: fontSize * 0.45,
              color: textColor,
              textAlign,
            },
            textShadowStyle,
          ]}
          className="mt-6 font-bold opacity-90 tracking-tight"
        >
          — {quoteAuthor}
        </Text>
      )}
    </View>
  );

  const isImageBackground = typeof themeSource === "object" && themeSource.uri;

  return (
    <View className="flex-1 bg-[#050505]">
      {/* Background & Content Layer */}
      <View className="absolute inset-0">
        {isImageBackground ? (
          <ImageBackground
            source={background}
            resizeMode="cover"
            className="flex-1"
          >
            <View className="absolute inset-0 bg-black/20" />
            <MainContent />
          </ImageBackground>
        ) : (
          <View
            style={{
              backgroundColor:
                typeof background === "object" && background.color ? background.color : "#050505",
            }}
            className="flex-1"
          >
            <MainContent />
          </View>
        )}
      </View>

      {/* Floating UI Layer */}
      <SafeAreaProvider>
        <SafeAreaView edges={["top"]} className="flex-1 justify-between">
          {/* Modern Top Header */}
          <View className="flex-row justify-between items-center px-6 pt-2">
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.shadow2xl}
              className="bg-[#111111]/80 w-11 h-11 rounded-full items-center justify-center border border-white/10"
            >
              <Feather name="x" size={22} color="white" />
            </TouchableOpacity>

            {(isCustomImage || background || activeTab === "Text") && (
              <TouchableOpacity
                onPress={handleDone}
                style={styles.shadowEmerald}
                className="bg-emerald-500 rounded-full px-8 py-2.5"
              >
                <Text className="text-white font-bold text-sm">Done</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Premium Editing Dock */}
          <View
            style={styles.shadow2xl}
            className="bg-[#111111] rounded-t-[40px] px-6 pb-12 pt-8 border-t border-white/5"
          >
            {/* Segmented Tab Control */}
            <View className="flex-row items-center rounded-full p-1 bg-[#050505] mb-6 border border-white/5">
              <Pressable
                onPress={() => setActiveTab("Background")}
                style={activeTab === "Background" ? styles.shadowLg : {}}
                className={`flex-1 py-3 rounded-full ${activeTab === "Background" ? "bg-emerald-500" : ""
                  }`}
              >
                <Text className={`font-bold text-center text-sm ${activeTab === "Background" ? "text-white" : "text-zinc-500"}`}>
                  Background
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setActiveTab("Text")}
                style={activeTab === "Text" ? styles.shadowLg : {}}
                className={`flex-1 py-3 rounded-full ${activeTab === "Text" ? "bg-emerald-500" : ""
                  }`}
              >
                <Text className={`font-bold text-center text-sm ${activeTab === "Text" ? "text-white" : "text-zinc-500"}`}>
                  Text
                </Text>
              </Pressable>
            </View>

            {/* Active Tool Views */}
            <View>
              {activeTab === "Background" ? (
                renderBottomControls()
              ) : (
                <View className="bg-[#0a0a0a] rounded-[24px] p-6 border border-white/5">
                  <TextControls
                    onFontSizeChange={setFontSize}
                    initialFontSize={fontSize}
                    onFontChange={setFontFamily}
                    currentFont={fontFamily}
                    onColorChange={setTextColor}
                    currentColor={textColor}
                    onAlignmentChange={setTextAlign}
                    currentAlignment={textAlign}
                    onLetterCaseChange={setLetterCaseStyle}
                    currentLetterCase={letterCaseStyle}
                  />
                </View>
              )}
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>

    </View>
  );
};

const styles = StyleSheet.create({
  shadow2xl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 20,
  },
  shadowLg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  shadowEmerald: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 12,
  },
});

export default QuoteEditorScreen;
