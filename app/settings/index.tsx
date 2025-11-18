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
    },
    {
      name: "Reminders",
      icon: "bell",
      IconLib: Feather,
      onPress: () => router.push("/settings/reminders-screen"),
    },
    {
      name: "App icon",
      icon: "apps",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/app-icon"),
    },
    {
      name: "Widgets",
      icon: "extension-puzzle-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/widgets-screen"),
    },
    {
      name: "Watch",
      icon: "watch-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/watch-screen"),
    },
    {
      name: "Self-Growth bundle",
      icon: "leaf-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/bundle-screen"),
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="x" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/settings/profile-settings")}
        >
          <Text className="text-white text-xl">Settings</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text className="text-white text-3xl font-bold px-4 mt-2">
          Motivation
        </Text>

        <View className="px-4 mt-6">
          <View className="bg-white rounded-2xl p-4 flex-row justify-between items-center overflow-hidden">
            <View className="flex-1">
              <Text className="text-black text-lg font-bold">
                Upgrade to Premium
              </Text>
              <Text className="text-gray-600 text-sm mt-1 max-w-[180px]">
                Access all categories, quotes, themes, and remove ads!
              </Text>
            </View>
            <View className="-mr-10 -my-4">
              <PhoneIllustration />
            </View>
          </View>
        </View>

        <StreakSection />

        <View className="px-4 mt-6">
          <Text className="text-white text-xl font-bold mb-2">
            Customize the app
          </Text>
          <View className="flex-row flex-wrap -mx-2">
            {customizeItems.map((item) => {
              const IconComponent = item.IconLib;
              return (
                <View key={item.name} className="w-1/2 p-2">
                  <TouchableOpacity
                    onPress={item.onPress}
                    className="bg-[#3a4151] rounded-2xl aspect-square p-4 justify-between"
                  >
                    <Text className="text-white font-semibold text-base">
                      {item.name}
                    </Text>
                    <View className="items-end">
                      <IconComponent
                        name={item.icon as any}
                        size={48}
                        color="#969da8"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        <View className=" mt-6">
          <Text className="px-4 text-white text-xl font-bold mb-2">
            My content
          </Text>

          <UserItemsGrid />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SettingsScreen;
