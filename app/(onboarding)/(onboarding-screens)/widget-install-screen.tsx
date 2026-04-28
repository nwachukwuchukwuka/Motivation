import { useAppContext } from "@/context/context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WidgetInstallScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { setIsAuthenticated } = useAppContext();

  const handleInstall = () => {
    setIsAuthenticated(true);
    router.replace("/");
  };

  const handleRemindLater = () => {
    setIsAuthenticated(true);
    router.replace("/");
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 220 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Add a free widget to your Home Scree
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Keep your focus sharp with daily inspiration anchored directly to your screen.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* High-Fidelity Home Screen Preview */}
        <View className="w-full h-[380px] bg-[#111111] rounded-[40px] border border-white/10 p-6 overflow-hidden relative">
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
          <View className="w-full bg-emerald-500 rounded-[28px] p-6 shadow-2xl shadow-emerald-500/40 mb-6">
            <View className="flex-row items-center mb-4">
              <View className="w-6 h-6 rounded-full bg-black items-center justify-center">
                <Ionicons name="flash" size={14} color="#10b981" />
              </View>
              <Text className="text-black font-bold text-[10px] ml-2 uppercase tracking-widest">Motivation</Text>
            </View>
            <Text className="text-black text-xl font-bold leading-tight tracking-tight">
              The future depends on what you do today.
            </Text>
          </View>

          {/* App Icons Mockup (Blurred/Subtle) */}
          <View className="flex-row flex-wrap justify-between opacity-20">
            {Array.from({ length: 8 }).map((_, index) => (
              <View key={index} className="w-[22%] aspect-square bg-white/40 rounded-xl mb-4" />
            ))}
          </View>

          {/* Glow Overlay */}
          <View className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        </View>

        {/* Installation Instructions Pod */}
        <View className="bg-[#111111] rounded-[24px] p-6 mt-8 border border-white/5 flex-row items-start">
          <View className="w-8 h-8 rounded-full bg-white/5 items-center justify-center mt-1">
            <Feather name="info" size={16} color="#94A3B8" />
          </View>
          <View className="flex-1 ml-4">
            <Text className="text-white font-bold text-base tracking-tight">How to install</Text>
            <Text className="text-[#94A3B8] text-sm mt-1 leading-relaxed">
              Touch and hold an empty area on your Home Screen, tap the plus (+) icon, and search for "Motivation".
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/95">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleInstall}
          className="w-full py-5 rounded-[24px] bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/30 mb-4"
        >
          <Text className="text-black text-lg font-bold tracking-tight">
            Install widget
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleRemindLater}
          className="w-full items-center justify-center py-2"
        >
          <Text className="text-[#52525b] font-medium">Remind me later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WidgetInstallScreen;
