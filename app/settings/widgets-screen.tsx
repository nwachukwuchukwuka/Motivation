import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Rect, Text as SvgText } from "react-native-svg";


const { width: screenWidth } = Dimensions.get("window");
const horizontalMargin = 30;

const PhoneMockup = () => (
  <Svg
    width={screenWidth - horizontalMargin * 2}
    height="480"
    viewBox={`0 0 ${screenWidth} 480`}
  >
    {/* Phone Body */}
    <Rect
      x="0"
      y="0"
      width={screenWidth}
      height="480"
      rx="40"
      fill="#262e3d"
      fillOpacity="0.5"
    />
    <Rect
      x="5"
      y="5"
      width={screenWidth - 10}
      height="470"
      rx="35"
      stroke="#4a5162"
      strokeWidth="2"
      fill="none"
    />

    {/* Earpiece/Notch */}
    <Rect
      x={screenWidth / 2 - 60}
      y="20"
      width="120"
      height="25"
      rx="10"
      fill="#374051"
      fillOpacity="0.5"
    />

    {/* Dashed Widget Area (Full Width) */}
    <Rect
      x="20"
      y="90"
      width={screenWidth - 40}
      height="140"
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
      x={screenWidth / 2}
      y="145"
      textAnchor="middle"
      fill="white"
      fillOpacity="0.8"
      fontSize="22"
    >
      You are stronger than
    </SvgText>
    <SvgText
      x={screenWidth / 2}
      y="170"
      textAnchor="middle"
      fill="white"
      fillOpacity="0.8"
      fontSize="22"
    >
      you think.
    </SvgText>

    {/* Small boxes below */}
    {Array.from({ length: 8 }).map((_, i) => (
      <Rect
        key={i}
        x={40 + (i % 4) * ((screenWidth - 100) / 4)} 
        y={250 + Math.floor(i / 4) * 55}
        width={(screenWidth - 180) / 4}
        height="45"
        rx="10"
        fill="#374051"
        fillOpacity="0.5"
      />
    ))}
  </Svg>
);



const WidgetsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row items-center p-4 pl-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Motivation</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 120,
        }}
      >
        <Text className="text-white text-3xl font-bold mt-4">Widgets</Text>

        <View className="my-4 items-center">
          <PhoneMockup />
        </View>

        <View className=" absolute top-[354px] left-0 right-0 p-4 bg-[#262e3d]">
          <Text className="text-white text-3xl font-bold text-center mb-4">
            Add a free widget to your Home Screen
          </Text>
          <View className="space-y-3">
            <Text className="text-gray-300 text-2xl leading-relaxed">
              1. On your phone's Home Screen, touch and hold an empty area until
              the apps jiggle
            </Text>
            <Text className="text-gray-300 text-2xl leading-relaxed">
              2. Tap “Edit” in the upper left corner, then tap “Add Widget”
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 p-6">
        <Pressable
          className="bg-white w-full py-4 rounded-full items-center justify-center"
          //   onPress={() => router.push("")}
        >
          <Text className="text-black text-lg font-bold">Install widget</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default WidgetsScreen;
