import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FreeTrialDetailsScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);

  const PHASES = [
    {
      id: "01",
      title: "Immediate Access",
      label: "Today",
      desc: "Unlock the full potential of your mindset. Every theme, font, and premium quote becomes yours instantly.",
      icon: "unlock",
    },
    {
      id: "02",
      title: "Momentum Building",
      label: "Day 2",
      desc: "We'll send a notification 24 hours before your trial expires so you stay in total control.",
      icon: "bell",
    },
    {
      id: "03",
      title: "Full Curation",
      label: "After Day 3",
      desc: "Your subscription begins. Cancel anytime in your device settings before the trial ends.",
      icon: "zap",
    },
  ];

  return (
    <View className="flex-1 bg-[#050505]">
      {/* Top Right Close Button */}
      <View className="flex-row justify-end px-6 pt-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-12 h-12 bg-[#111111] rounded-full items-center justify-center border border-white/5"
        >
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-6"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="mt-8 mb-12">
          <Text className="text-white text-4xl font-semibold tracking-tighter leading-[1.1]">
            Trial Journey
          </Text>
          <Text className="text-emerald-500 text-lg font-bold tracking-tight mt-2">
            No commitment required today
          </Text>
        </View>

        {/* Phase Pods */}
        {PHASES.map((phase) => (
          <View
            key={phase.id}
            className="bg-[#111111] rounded-[32px] p-6 mb-4 border border-white/5"
          >
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-emerald-500/10 rounded-xl items-center justify-center border border-emerald-500/20 mr-3">
                  <Feather name={phase.icon as any} size={20} color="#10b981" />
                </View>
                <Text className="text-emerald-500 font-bold text-xs tracking-widest uppercase">
                  Phase {phase.id}
                </Text>
              </View>
              <Text className="text-zinc-500 font-bold text-xs tracking-tight">{phase.label}</Text>
            </View>
            <Text className="text-white text-xl font-bold tracking-tight mb-2">
              {phase.title}
            </Text>
            <Text className="text-zinc-500 text-sm font-medium leading-relaxed">
              {phase.desc}
            </Text>
          </View>
        ))}

        {/* Reminder Pod */}
        <View className="flex-row justify-between items-center bg-[#111111] rounded-2xl px-6 py-4 mt-6 border border-white/5">
          <View className="flex-row items-center">
            <Feather name="bell" size={18} color="#10b981" />
            <Text className="text-white text-sm font-bold ml-3 tracking-tight">
              Trial end reminder
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#18181b", true: "#10b981" }}
            thumbColor="#ffffff"
            onValueChange={() => setIsReminderEnabled((prev) => !prev)}
            value={isReminderEnabled}
          />
        </View>

        {/* Action Zone */}
        <View className="mt-12">
          <TouchableOpacity
            className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center"
            activeOpacity={0.9}
          >
            <Text className="text-black text-lg font-bold tracking-tight">
              Start 3-Day Free Trial
            </Text>
          </TouchableOpacity>

          <View className="mt-6 px-4">
            <Text className="text-center text-zinc-500 text-sm font-medium leading-relaxed">
              Unlimited access for 3 days, then <Text className="text-white">₦29,900.00/year</Text>
            </Text>
            <Text className="text-center text-zinc-600 text-xs mt-1 font-bold">
              Just ₦2,491.66 per month
            </Text>
          </View>

          {/* Footer Links */}
          <View className="flex-row justify-center gap-8 mt-10">
            <TouchableOpacity>
              <Text className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Restore</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Terms</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Privacy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FreeTrialDetailsScreen;
