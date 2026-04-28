import { ICON_STYLES } from "@/constants/constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      className={`w-full aspect-square rounded-[24px] items-center justify-center overflow-hidden relative transition-all ${
        isSelected ? "border-2 border-emerald-500 scale-95" : "border-2 border-transparent"
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
      
      {isSelected && (
        <View className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-500 items-center justify-center shadow-lg">
          <Feather name="check" size={12} color="black" />
        </View>
      )}
    </View>
  );
};

const AppIconScreen = () => {
  const router = useRouter();
  const [selectedIconId, setSelectedIconId] = useState("default");

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#050505]">
      {/* Header Area */}
      <View className="px-8 pt-6 flex-row justify-between items-center mb-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
        >
          <Feather name="chevron-left" size={24} color="#94A3B8" />
        </TouchableOpacity>
        <View className="w-10 h-1" />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            App icon
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Choose a visual identity that resonates with your personal aesthetic.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {ICON_STYLES.map((style) => (
            <View key={style.id} className="w-[30%] mb-6">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setSelectedIconId(style.id);
                }}
                className="bg-[#111111] rounded-[32px] p-1.5 border border-white/5 items-center justify-center"
              >
                <IconDisplay
                  styleInfo={style}
                  isSelected={selectedIconId === style.id}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppIconScreen;
