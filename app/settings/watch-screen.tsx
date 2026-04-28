import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WatchScreen = () => {
  const router = useRouter();

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
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
        >
          <Feather name="share" size={20} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Apple Watch
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Carry your daily inspiration on your wrist and stay focused throughout the day.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* High-Fidelity Apple Watch Ultra Mockup */}
        <View className="items-center mb-12">
          <View className="w-[260px] aspect-[0.85] bg-[#1a1a1a] rounded-[54px] border-[6px] border-[#2a2a2a] p-3 shadow-2xl relative">
            {/* Digital Crown & Button Mockups */}
            <View className="absolute -right-[10px] top-[20%] w-[10px] h-12 bg-[#2a2a2a] rounded-r-lg" />
            <View className="absolute -right-[8px] top-[40%] w-[8px] h-16 bg-orange-500 rounded-r-lg opacity-40" />

            {/* Watch Screen */}
            <View className="flex-1 bg-black rounded-[42px] p-6 border border-white/5 overflow-hidden justify-center">
              <View className="flex-row justify-between items-start mb-6">
                <View className="bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                  <Text className="text-emerald-500 text-[10px] font-bold">FRI 23</Text>
                </View>
                <Text className="text-white text-3xl font-light tracking-widest">11:11</Text>
              </View>

              <View className="flex-1 justify-center">
                <View className="w-8 h-[2px] bg-emerald-500 mb-4" />
                <Text className="text-white text-xl font-medium leading-tight tracking-tight">
                  Choose people who choose you.
                </Text>
              </View>

              {/* Complications Mockup */}
              <View className="flex-row justify-center gap-4 mt-6 opacity-20">
                <View className="w-8 h-8 rounded-full border border-white" />
                <View className="w-8 h-8 rounded-full border border-white" />
              </View>

              {/* Glow Overlay */}
              <View className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
            </View>
          </View>
        </View>

        {/* Configuration Pods */}
        <View className="gap-6">
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-[#111111] rounded-[32px] p-6 border border-white/5 flex-row justify-between items-center"
          >
            <View>
              <Text className="text-[#94A3B8] text-xs uppercase tracking-widest mb-1">Configuration</Text>
              <Text className="text-white text-lg font-medium tracking-tight">Type of quotes</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-emerald-500 text-base font-medium mr-1">General</Text>
              <Feather name="chevron-right" size={18} color="#52525b" />
            </View>
          </TouchableOpacity>

          <View className="bg-[#111111] rounded-[24px] p-6 border border-white/5">
            <View className="flex-row items-start mb-2">
              <Ionicons name="information-circle-outline" size={18} color="#10b981" />
              <Text className="text-white font-medium ml-2">How it works</Text>
            </View>
            <Text className="text-[#94A3B8] text-sm leading-relaxed">
              The selected category applies to all content on your Apple Watch: face, complications, widgets, and app.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Primary Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/95">
        <TouchableOpacity
          activeOpacity={0.9}
          className="w-full py-5 rounded-[24px] bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/30 mb-4"
        >
          <Text className="text-black text-lg font-bold tracking-tight">
            Set as Watch face
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full items-center justify-center py-2"
        >
          <Text className="text-[#52525b] font-medium">Get more instructions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WatchScreen;
