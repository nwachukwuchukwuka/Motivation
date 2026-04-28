import { PhoneIllustration } from "@/components/Illustrations";
import StreakSection from "@/components/StreakSection";
import UserItemsGrid from "@/components/UserItemsGrid";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const router = useRouter();

  const customizeItems = [
    {
      name: "Topics you follow",
      icon: "hash",
      IconLib: Feather,
      onPress: () => router.push("/settings/topics-screen"),
      color: "#10b981",
    },
    {
      name: "Reminders",
      icon: "bell",
      IconLib: Feather,
      onPress: () => router.push("/settings/reminders-screen"),
      color: "#10b981",
    },
    {
      name: "App icon",
      icon: "apps",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/app-icon"),
      color: "#10b981",
    },
    {
      name: "Widgets",
      icon: "extension-puzzle-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/widgets-screen"),
      color: "#10b981",
    },
    {
      name: "Watch",
      icon: "watch-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/watch-screen"),
      color: "#10b981",
    },
    {
      name: "Self-Growth bundle",
      icon: "leaf-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/bundle-screen"),
      color: "#10b981",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-11 h-11 bg-[#111111] rounded-full items-center justify-center border border-white/5 shadow-xl"
        >
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/settings/profile-settings")}
          className="bg-emerald-500/10 px-5 py-2.5 rounded-full border border-emerald-500/20"
        >
          <Text className="text-emerald-500 font-bold text-sm tracking-tight">Settings</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-2">
          <Text className="text-white text-4xl font-bold tracking-tighter">
            Motivation
          </Text>
        </View>

        {/* High-Fidelity Premium Card */}
        <View className="px-6 mt-8">
          <TouchableOpacity
            className="bg-[#111111] rounded-[32px] p-6 flex-row justify-between items-center overflow-hidden border border-white/5 shadow-2xl"
          >
            <View className="flex-1 z-10">
              <View className="bg-emerald-500 self-start px-2 py-0.5 rounded mb-3">
                <Text className="text-[10px] font-black text-black uppercase tracking-widest">Premium</Text>
              </View>
              <Text className="text-white text-2xl font-bold tracking-tight">
                Upgrade Now
              </Text>
              <Text className="text-zinc-500 text-sm mt-2 leading-snug">
                Unlock all categories, themes, and remove ads forever.
              </Text>
            </View>
            <View className="absolute -right-12 -bottom-16 opacity-40 rotate-12 scale-125">
              <PhoneIllustration />
            </View>
          </TouchableOpacity>
        </View>

        <View className="mt-8 px-2">
          <StreakSection />
        </View>

        {/* Architectural Customize Grid */}
        <View className="px-6 mt-10">
          <Text className="text-white text-xl font-bold mb-6 tracking-tight">
            Customize Experience
          </Text>
          <View className="flex-row flex-wrap -mx-2">
            {customizeItems.map((item, index) => {
              const IconComponent = item.IconLib;
              // Alternate heights for an architectural feel
              const isTall = index % 3 === 0;

              return (
                <View key={item.name} className={`${isTall ? 'w-full' : 'w-1/2'} p-2`}>
                  <TouchableOpacity
                    onPress={item.onPress}
                    style={{ height: isTall ? 140 : 160 }}
                    className="bg-[#111111] rounded-[24px] p-5 justify-between border border-white/5 shadow-sm active:opacity-90"
                  >
                    <View className="flex-row justify-between items-start">
                      <View className="w-10 h-10 bg-emerald-500/10 rounded-xl items-center justify-center border border-emerald-500/10">
                        <IconComponent
                          name={item.icon as any}
                          size={20}
                          color="#10b981"
                        />
                      </View>
                      <Feather name="arrow-up-right" size={16} color="#3f3f46" />
                    </View>

                    <Text className="text-white font-bold text-[15px] tracking-tight leading-tight">
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        <View className="mt-12">
          <View className="flex-row justify-between items-end px-6 mb-6">
            <Text className="text-white text-xl font-bold tracking-tight">
              My Content
            </Text>
            <TouchableOpacity>
              <Text className="text-emerald-500 font-bold text-xs">View All</Text>
            </TouchableOpacity>
          </View>

          <View className="px-4">
            <UserItemsGrid />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SettingsScreen;
