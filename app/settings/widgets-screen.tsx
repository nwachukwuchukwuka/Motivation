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

const WidgetsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#050505]">
      {/* Header / Back Action */}
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
        contentContainerStyle={{ paddingBottom: 160 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Widgets
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Personalize your screen with daily affirmations and stay inspired at a glance.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* High-Fidelity Home Screen Preview */}
        <View className="w-full h-[400px] bg-[#111111] rounded-[40px] border border-white/10 p-6 overflow-hidden relative mb-12">
          {/* Status Bar Mockup */}
          <View className="flex-row justify-between items-center mb-6 opacity-30">
            <Text className="text-white text-xs font-bold">9:41</Text>
            <View className="flex-row gap-1">
              <Ionicons name="cellular" size={12} color="white" />
              <Ionicons name="wifi" size={12} color="white" />
              <Ionicons name="battery-full" size={12} color="white" />
            </View>
          </View>

          {/* Emerald Widget Asset */}
          <View className="w-full bg-emerald-500 rounded-[28px] p-6 shadow-2xl shadow-emerald-500/40 mb-8">
            <View className="flex-row items-center mb-4">
              <View className="w-6 h-6 rounded-full bg-black items-center justify-center">
                <Ionicons name="flash" size={14} color="#10b981" />
              </View>
              <Text className="text-black font-bold text-[10px] ml-2 uppercase tracking-widest">Motivation</Text>
            </View>
            <Text className="text-black text-2xl font-bold leading-tight tracking-tight">
              Focus on the journey, not the destination.
            </Text>
          </View>

          {/* App Icons Mockup (Architectural Grid) */}
          <View className="flex-row flex-wrap justify-between opacity-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <View key={index} className="w-[21%] aspect-square bg-white rounded-xl mb-4" />
            ))}
          </View>

          {/* Glow Overlay */}
          <View className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        </View>

        {/* Installation Instructions Architecture */}
        <View className="gap-6">
          <View className="bg-[#111111] rounded-[24px] p-6 border border-white/5 flex-row items-start">
            <View className="w-8 h-8 rounded-full bg-emerald-500/10 items-center justify-center mt-1 border border-emerald-500/20">
              <Text className="text-emerald-500 font-bold">1</Text>
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-white font-medium text-base tracking-tight">Jiggle Mode</Text>
              <Text className="text-[#94A3B8] text-sm mt-1 leading-relaxed">
                Touch and hold an empty area on your Home Screen until the apps jiggle.
              </Text>
            </View>
          </View>

          <View className="bg-[#111111] rounded-[24px] p-6 border border-white/5 flex-row items-start">
            <View className="w-8 h-8 rounded-full bg-emerald-500/10 items-center justify-center mt-1 border border-emerald-500/20">
              <Text className="text-emerald-500 font-bold">2</Text>
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-white font-medium text-base tracking-tight">Add Widget</Text>
              <Text className="text-[#94A3B8] text-sm mt-1 leading-relaxed">
                Tap the Plus (+) icon in the top corner and search for "Motivation".
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Primary Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/95">
        <TouchableOpacity
          activeOpacity={0.9}
          className="w-full py-5 rounded-[24px] bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/30"
          onPress={() => { }}
        >
          <Text className="text-black text-lg font-bold tracking-tight">
            Install widget
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WidgetsScreen;
