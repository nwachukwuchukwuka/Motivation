import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StreakScreen = () => {
  const router = useRouter();
  const [isTrackingEnabled, setIsTrackingEnabled] = useState(true);

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
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Streak
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Building a daily habit of mindfulness can significantly transform your perspective.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* Streak Visual Asset Pod */}
        <View className="bg-[#111111] rounded-[40px] p-10 items-center justify-center border border-white/5 mb-12 relative overflow-hidden">
          <View className="w-24 h-24 rounded-full bg-emerald-500/10 items-center justify-center border border-emerald-500/20 shadow-2xl shadow-emerald-500/40">
            <Ionicons name="flame" size={48} color="#10b981" />
          </View>
          <Text className="text-white text-5xl font-bold mt-6 tracking-tighter">0</Text>
          <Text className="text-[#52525b] text-sm uppercase tracking-widest mt-1">Day Streak</Text>
          
          {/* Decorative Glow */}
          <View className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        </View>

        {/* Tracking Toggle Architecture */}
        <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5 flex-row justify-between items-center">
          <View className="flex-1 mr-4">
            <Text className="text-white font-medium text-lg tracking-tight">Track streak</Text>
            <Text className="text-[#52525b] text-xs mt-0.5">Visualize your mental growth daily</Text>
          </View>
          <Switch
            value={isTrackingEnabled}
            onValueChange={setIsTrackingEnabled}
            trackColor={{ false: "#27272a", true: "#10b981" }}
            thumbColor={"#ffffff"}
            ios_backgroundColor="#27272a"
          />
        </View>

        {/* Informational Pod */}
        <View className="mt-8 bg-[#111111] rounded-[24px] p-6 border border-white/5">
          <View className="flex-row items-start mb-2">
            <Ionicons name="information-circle-outline" size={18} color="#10b981" />
            <Text className="text-white font-medium ml-2 tracking-tight">Why streaks matter</Text>
          </View>
          <Text className="text-[#94A3B8] text-sm leading-relaxed">
            Consistently engaging with positive affirmations helps rewire your brain for optimism and resilience.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StreakScreen;
