import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

// Custom SVG Illustration for the Phone Mockup
const PhoneMockup = () => (
  <Svg width="280" height="480" viewBox="0 0 280 480">
    {/* Phone Body */}
    <Rect
      x="0"
      y="0"
      width="280"
      height="480"
      rx="40"
      fill="#3a4151"
      fillOpacity="0.5"
    />
    <Rect
      x="5"
      y="5"
      width="270"
      height="470"
      rx="35"
      stroke="#4a5162"
      strokeWidth="2"
      fill="none"
    />

    {/* Earpiece/Notch */}
    <Rect
      x="80"
      y="20"
      width="120"
      height="20"
      rx="10"
      fill="#262e3d"
      fillOpacity="0.5"
    />

    {/* Dashed Widget Area */}
    <Rect
      x="30"
      y="90"
      width="220"
      height="120"
      rx="20"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="8, 6"
      strokeOpacity="0.3"
      fill="#4a5162"
      fillOpacity="0.3"
    />

    {/* Text inside the widget */}
    <SvgText
      x="140"
      y="140"
      textAnchor="middle"
      fill="white"
      fillOpacity="0.8"
      fontSize="18"
    >
      You are stronger than
    </SvgText>
    <SvgText
      x="140"
      y="165"
      textAnchor="middle"
      fill="white"
      fillOpacity="0.8"
      fontSize="18"
    >
      you think.
    </SvgText>

    {/* App Icon Placeholders */}
    {Array.from({ length: 8 }).map((_, i) => (
      <Rect
        key={i}
        x={40 + (i % 4) * 55}
        y={250 + Math.floor(i / 4) * 55}
        width="45"
        height="45"
        rx="10"
        fill="#4a5162"
        fillOpacity="0.5"
      />
    ))}
  </Svg>
);

const WidgetsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      {/* Header */}
      <View className="flex-row items-center p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 120,
          alignItems: "center",
        }}
      >
        <Text className="text-white text-3xl font-bold text-center">
          Widgets
        </Text>

        <View className="my-8">
          <PhoneMockup />
        </View>

        <View className="w-full">
          <Text className="text-white text-2xl font-bold text-center mb-4">
            Add a free widget to your Home Screen
          </Text>
          <View className="space-y-3">
            <Text className="text-gray-300 text-base leading-relaxed">
              1. On your phone's Home Screen, touch and hold an empty area until
              the apps jiggle
            </Text>
            <Text className="text-gray-300 text-base leading-relaxed">
              2. Tap “Edit” in the upper left corner, then tap “Add Widget”
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Footer Button */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-[#262e3d] border-t border-t-gray-700">
        <TouchableOpacity className="bg-white w-full py-4 rounded-full items-center justify-center">
          <Text className="text-black text-lg font-bold">Install widget</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WidgetsScreen;
