import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const TrialDetailsScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-[#050505]">
      {/* Header / Exit */}
      <View className="px-8 flex-row justify-between items-center mb-10">
        <View className="w-10 h-1" />
        <TouchableOpacity
          onPress={() => router.replace('/widget-install-screen')}
          className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
        >
          <Feather name="x" size={20} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 220 }}
      >
        <View className="mb-10">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            How your free trial works
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Experience the full journey without any immediate commitment.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* Timeline Architecture */}
        <View className="bg-[#111111] rounded-[32px] p-8 border border-white/5 flex-row">
          <View className="items-center mr-6">
            {/* Today */}
            <View className="w-10 h-10 rounded-xl bg-emerald-500/10 items-center justify-center border border-emerald-500/20">
              <Ionicons name="lock-open-outline" size={20} color="#10b981" />
            </View>
            <View className="w-[2px] h-20 bg-emerald-500/20 my-2" />

            {/* Day 2 */}
            <View className="w-10 h-10 rounded-xl bg-emerald-500/10 items-center justify-center border border-emerald-500/20">
              <Ionicons name="notifications-outline" size={20} color="#10b981" />
            </View>
            <View className="w-[2px] h-20 bg-emerald-500/20 my-2" />

            {/* After Day 3 */}
            <View className="w-10 h-10 rounded-xl bg-emerald-500/10 items-center justify-center border border-emerald-500/20">
              <Ionicons name="sparkles-outline" size={20} color="#10b981" />
            </View>
          </View>

          <View className="flex-1">
            {/* Step 1 */}
            <View className="h-32">
              <Text className="text-white font-bold text-lg tracking-tight">Today</Text>
              <Text className="text-[#94A3B8] text-sm mt-1 leading-relaxed">
                Unlock all premium features and begin your mental transformation.
              </Text>
            </View>

            {/* Step 2 */}
            <View className="h-32">
              <Text className="text-white font-bold text-lg tracking-tight">Day 2</Text>
              <Text className="text-[#94A3B8] text-sm mt-1 leading-relaxed">
                Receive a nudge before your free trial period expires.
              </Text>
            </View>

            {/* Step 3 */}
            <View className="">
              <Text className="text-white font-bold text-lg tracking-tight">After day 3</Text>
              <Text className="text-[#94A3B8] text-sm mt-1 leading-relaxed">
                Your subscription starts. You can cancel easily at any time before this.
              </Text>
            </View>
          </View>
        </View>

        {/* Reminder Toggle */}
        <View className="flex-row justify-between items-center bg-[#111111] rounded-[24px] px-6 py-5 mt-10 border border-white/5">
          <View className="flex-1 mr-4">
            <Text className="text-white font-medium text-base tracking-tight">
              Trial end reminder
            </Text>
            <Text className="text-[#52525b] text-xs mt-0.5">We'll notify you 24h before</Text>
          </View>
          <Switch
            trackColor={{ false: "#27272a", true: "#10b981" }}
            thumbColor={"#ffffff"}
            ios_backgroundColor="#27272a"
            onValueChange={() => setIsReminderEnabled((prev) => !prev)}
            value={isReminderEnabled}
          />
        </View>
      </ScrollView>

      {/* Pricing / CTA Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/95 border-t border-white/5">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push("/widget-install-screen")}
          className="w-full py-5 rounded-[24px] bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/30"
        >
          <Text className="text-black text-lg font-bold tracking-tight">
            Start 3-day free trial
          </Text>
        </TouchableOpacity>

        <View className="mt-6 items-center">
          <Text className="text-[#52525b] text-xs text-center leading-relaxed max-w-[280px]">
            Unlimited access for 3 days, then <Text className="text-[#94A3B8]">₦29,900.00/year</Text> (just ₦2,491.66/month)
          </Text>

          <View className="flex-row justify-center gap-6 mt-4">
            <TouchableOpacity><Text className="text-[#3f3f46] text-xs font-medium">Restore</Text></TouchableOpacity>
            <TouchableOpacity><Text className="text-[#3f3f46] text-xs font-medium">Terms</Text></TouchableOpacity>
            <TouchableOpacity><Text className="text-[#3f3f46] text-xs font-medium">Privacy</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrialDetailsScreen;
