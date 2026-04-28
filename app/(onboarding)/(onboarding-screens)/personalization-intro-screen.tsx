import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PersonalizationIntroScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handlePress = () => {
    router.push("/inspiring-quotes-screen");
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between", paddingBottom: 40 }}
      >
        <View>
          <View className="mb-12">
            <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-none">
              Just for
            </Text>
            <View className="flex-row items-baseline">
              <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-none">
                You
              </Text>
              <View className="w-3 h-3 rounded-full bg-emerald-500 ml-2" />
            </View>

            <Text className="text-[#94A3B8] text-xl mt-8 font-medium leading-relaxed max-w-[280px]">
              Answer a few questions to get quotes tailored to your journey.
            </Text>
          </View>

          <View className="items-center justify-center py-16">
            <View className="w-48 h-48 rounded-full bg-emerald-500/10 items-center justify-center border border-emerald-500/20 shadow-2xl shadow-emerald-500/30">
              <Octicons name="sparkle" size={96} color="#10b981" />
              {/* <Octicons name="sparkle" size={24} color="black" /> */}
            </View>

            <View className="bg-[#111111] rounded-[40px] p-8 mt-12 w-full border border-white/5">
              <View className="flex-row items-center mb-4">
                <View className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
                <Text className="text-emerald-500 font-bold tracking-widest uppercase text-xs">
                  AI Personalization
                </Text>
              </View>
              <Text className="text-white text-lg font-medium leading-relaxed">
                Our algorithm creates a unique motivational feed based on your goals, mindset, and daily challenges.
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-8">
          <TouchableOpacity
            className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
            activeOpacity={0.9}
            onPress={handlePress}
          >
            <Text className="text-black text-lg font-bold tracking-tight">
              Let's do it
            </Text>
          </TouchableOpacity>
          <Text className="text-zinc-600 text-center text-xs mt-6 font-bold tracking-widest uppercase">
            30 second setup
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalizationIntroScreen;
