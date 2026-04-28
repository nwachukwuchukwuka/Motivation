import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const Achievement = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between", paddingBottom: 40 }}
      >
        <View>
          <View className="mb-12">
            <Text className="text-[#E2E8F0] text-5xl font-bold tracking-tighter leading-[1.1]">
              Unlock your true potential.
            </Text>
            <View className="w-12 h-1 bg-emerald-500 mt-6" />
          </View>

          <View className="items-center justify-center py-12">
            <View className="w-48 h-48 rounded-[64px] bg-emerald-500/10 items-center justify-center border border-emerald-500/20">
              <View className="w-32 h-32 rounded-[48px] bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/50">
                <Feather name="zap" size={64} color="black" />
              </View>
            </View>
            
            <Text className="text-[#94A3B8] text-center mt-12 text-lg font-medium leading-relaxed px-4">
              Customize Motivation to align with your personal goals and achieve more every day.
            </Text>
          </View>
        </View>

        <View className="mt-8">
          <TouchableOpacity
            className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
            activeOpacity={0.9}
            onPress={() => router.push("/daily-habit")}
          >
            <Text className="text-black text-lg font-bold tracking-tight">
              Continue
            </Text>
          </TouchableOpacity>
          <Text className="text-zinc-600 text-center text-xs mt-6 font-bold tracking-widest uppercase">
            Personalizing your experience
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Achievement;
