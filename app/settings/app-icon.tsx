import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ICON_STYLES = [
  {
    id: "default",
    type: "color",
    value: "#3a4151",
    content: "icon-quote-double",
  },
  {
    id: "dark-solid",
    type: "color",
    value: "#1E1E2F",
    content: "icon-quote-double",
  },
  {
    id: "dark-outline",
    type: "color",
    value: "#1E1E2F",
    content: "icon-quote-circle",
  },
  {
    id: "white-solid",
    type: "color",
    value: "#FFFFFF",
    content: "icon-quote-double",
    textColor: "#000000",
  },
  {
    id: "purple-gradient",
    type: "gradient",
    value: ["#C97EFF", "#F5A1BE"],
    content: "icon-quote-single-low",
  },
  {
    id: "white-solid-black",
    type: "color",
    value: "#FFFFFF",
    content: "icon-quote-double-black",
  },
  {
    id: "galaxy",
    type: "image",
    value:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=400",
  },
  {
    id: "marble-outline",
    type: "image",
    value:
      "https://images.unsplash.com/photo-1588621412235-3359b418a29a?q=80&w=400",
    content: "icon-quote-circle-img",
  },
  {
    id: "holographic",
    type: "image",
    value:
      "https://images.unsplash.com/photo-1599232857413-a44283804828?q=80&w=400",
    content: "icon-quote-single-black",
  },
  {
    id: "white-black-2",
    type: "color",
    value: "#FFFFFF",
    content: "icon-quote-double-black",
  },
  {
    id: "black-circle",
    type: "color",
    value: "#1E1E2F",
    content: "icon-quote-circle-smiley",
  },
  {
    id: "black-solid",
    type: "color",
    value: "#1E1E2F",
    content: "icon-quote-double",
  },
  {
    id: "do-not-quit",
    type: "color",
    value: "#1E1E2F",
    content: "Do not quit",
  },
  {
    id: "chase-dreams",
    type: "color",
    value: "#FFFFFF",
    content: "Chase your dreams",
    textColor: "#000000",
  },
  {
    id: "be-you",
    type: "image",
    value:
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=400",
    content: "Be you.\nDo you.\nFor you.",
  },
  {
    id: "trust-process",
    type: "color",
    value: "#FFFFFF",
    content: "Trust the process",
    textColor: "#000000",
  },
];

const IconDisplay = ({
  styleInfo,
  isSelected,
}: {
  styleInfo: any;
  isSelected: boolean;
}) => {
  const renderContent = () => {
    switch (styleInfo.content) {
      case "icon-quote-double":
        return (
          <Text
            style={{ color: styleInfo.textColor || "white" }}
            className="text-4xl font-bold"
          >
            ”
          </Text>
        );
      case "icon-quote-double-black":
        return (
          <Text style={{ color: "#000000" }} className="text-4xl font-bold">
            ”
          </Text>
        );
      case "icon-quote-single-low":
        return (
          <Text
            style={{ color: styleInfo.textColor || "white" }}
            className="text-4xl font-light opacity-70"
          >
            ”
          </Text>
        );
      case "icon-quote-single-black":
        return (
          <Text style={{ color: "#000000" }} className="text-4xl font-light">
            ”
          </Text>
        );
      case "icon-quote-circle":
        return (
          <View className="w-10 h-10 border-2 border-white rounded-full items-center justify-center">
            <Text className="text-white text-2xl font-bold">”</Text>
          </View>
        );
      case "icon-quote-circle-smiley":
        return (
          <View className="w-10 h-10 border-2 border-white rounded-full items-center justify-center">
            <Ionicons name="happy-outline" size={24} color="white" />
          </View>
        );
      case "icon-quote-circle-img":
        return (
          <View className="w-11 h-11 border-2 border-white rounded-full items-center justify-center">
            <Text className="text-white text-3xl font-bold">”</Text>
          </View>
        );
      default:
        return (
          <Text
            style={{ color: styleInfo.textColor || "white" }}
            className="font-bold text-center text-xs p-1"
          >
            {styleInfo.content}
          </Text>
        );
    }
  };

  return (
    <View
      className={`w-full aspect-square rounded-2xl items-center justify-center overflow-hidden relative ${
        isSelected ? "border-2 border-white" : ""
      }`}
    >
      {styleInfo.type === "image" && (
        <Image
          source={{ uri: styleInfo.value }}
          contentFit="cover"
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        />
      )}
      {styleInfo.type === "color" && (
        <View
          style={{
            backgroundColor: styleInfo.value,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )}
      <View className="absolute inset-0 bg-black/10" />
      {renderContent()}
    </View>
  );
};

const AppIconScreen = () => {
  const router = useRouter();
  const [selectedIconId, setSelectedIconId] = useState("default");

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      {/* Header */}
      <View className="flex-row items-center p-4 pl-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Motivation</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-white text-3xl font-bold">App icon</Text>

        {/* Icon Grid */}
        <View className="flex-row flex-wrap mt-4 justify-between gap-5">
          {ICON_STYLES.map((style) => (
            <View key={style.id} className="w-[70px] mb-5">
              <Pressable onPress={() => {
                router.push('/free-trial-details-screen')
                setSelectedIconId(style.id)
              }}>
                <IconDisplay
                  styleInfo={style}
                  isSelected={selectedIconId === style.id}
                />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppIconScreen;
