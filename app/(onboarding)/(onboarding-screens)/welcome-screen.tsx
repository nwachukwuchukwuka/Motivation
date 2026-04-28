import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#0A0C14]" style={{ paddingBottom: insets.bottom + 20 }}>
      {/* Immersive Background Element */}
      <View className="absolute inset-0 items-center justify-center opacity-[0.2]">
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebqa3blY_5yqw0hOPhLaaWg-rLbAxRf6ccA&s" }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-black/70" />
      </View>

      <View className="flex-1 px-8 pt-24 justify-between">
        <View>
          <View className="flex-row items-center mb-6">
            <View className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
            <Text className="text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase">
              Curated Motivation
            </Text>
          </View>

          <Text className="text-[#E2E8F0] text-6xl font-bold tracking-tighter leading-[1.05]">
            Mindset{"\n"}Shift
          </Text>

          <View className="w-12 h-1 bg-emerald-500 mt-8 mb-8" />

          <Text className="text-[#ffffff] text-xl font-medium leading-relaxed">
            Inspiration to think positively, stay consistent, and focus on your personal growth throughout every day.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center"
            activeOpacity={0.9}
            onPress={() => router.push("/survey-screen")}
          >
            <Text className="text-white text-lg font-bold tracking-tight">Begin Journey</Text>
          </TouchableOpacity>

          <Text className="text-[#64748B] text-center text-xs mt-6 font-bold tracking-widest uppercase">
            Start your transformation
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
