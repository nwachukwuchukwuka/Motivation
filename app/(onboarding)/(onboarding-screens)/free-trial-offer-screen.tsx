import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FreeTrialOfferScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handlePress = () => {
    router.push("/trial-detail-screen");
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            A Gift for Your Journey
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Experience the full power of Motivation with 3 free days of Premium access.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* Hero Visual */}
        <View className="items-center justify-center my-12 relative">
          <View className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          <Ionicons name="gift-outline" size={160} color="#10b981" />
        </View>

        {/* Offer Pod */}
        <View className="bg-[#111111] rounded-[32px] p-8 border border-white/5">
          <View className="flex-row items-center mb-4">
            <View className="bg-emerald-500/20 px-3 py-1 rounded-full">
              <Text className="text-emerald-500 font-bold text-xs uppercase tracking-widest">Limited Offer</Text>
            </View>
          </View>

          <Text className="text-white text-2xl font-bold tracking-tight mb-2">
            3 Days Free Trial
          </Text>
          <Text className="text-[#94A3B8] text-base leading-relaxed">
            Unlock all categories, themes, and exclusive widgets to accelerate your transformation.
          </Text>

          <View className="mt-6 pt-6 border-t border-white/5">
            <View className="flex-row items-center mb-3">
              <Ionicons name="checkmark-circle" size={20} color="#10b981" />
              <Text className="text-white ml-3 font-medium">Full Premium Access</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#10b981" />
              <Text className="text-white ml-3 font-medium">Cancel Anytime</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/90">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handlePress}
          className="w-full py-5 rounded-[24px] bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/30 mb-4"
        >
          <Text className="text-black text-lg font-bold tracking-tight">
            Try it for free
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/trial-detail-screen")}
          className="w-full items-center justify-center py-2"
        >
          <Text className="text-[#52525b] font-medium">No thanks, I'll stick to free</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FreeTrialOfferScreen;