// app/settings/reminders-screen.tsx
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RemindersScreen = () => {
  const router = useRouter();
  const [generalEnabled, setGeneralEnabled] = useState(true);
  const [streakEnabled, setStreakEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-base ml-1">Motivation</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-base">Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-white text-3xl font-bold mb-2">Reminders</Text>
        <Text className="text-[#969da8] text-base mb-6">
          Set up your daily routine to make Motivation fit your habits
        </Text>
        <View className="space-y-4">
          <View className="bg-[#3a4151] rounded-2xl p-4">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-white text-lg font-bold">General</Text>
                <Text className="text-[#969da8]">10x Every day</Text>
              </View>
              <View className="items-end">
                <Text className="text-[#969da8] text-sm">9:00AM-10:00PM</Text>
                <Switch
                  value={generalEnabled}
                  onValueChange={setGeneralEnabled}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={generalEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  className="mt-2 scale-110"
                />
              </View>
            </View>
          </View>

          <View className="bg-[#3a4151] rounded-2xl p-4">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-white text-lg font-bold">
                  Streak reminder
                </Text>
                <Text className="text-[#969da8]">1x Every day</Text>
              </View>
              <View className="items-end">
                <Text className="text-[#969da8] text-sm">10:27AM</Text>
                <Switch
                  value={streakEnabled}
                  onValueChange={setStreakEnabled}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={streakEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  className="mt-2 scale-110"
                />
              </View>
            </View>
          </View>

          <View className="bg-[#3a4151] rounded-2xl p-4 opacity-50">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-white text-lg font-bold">General</Text>
                <Text className="text-[#969da8]">3x Every weekday</Text>
              </View>
              <View className="items-end">
                <Text className="text-[#969da8] text-sm">9:00AM-5:00PM</Text>
                <Switch
                  value={false}
                  disabled={true}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  ios_backgroundColor="#3e3e3e"
                  className="mt-2 scale-110"
                />
              </View>
            </View>
          </View>

          <View className="bg-[#3a4151] rounded-2xl p-4 opacity-50">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-white text-lg font-bold">
                  Gratitude and Positive thinking
                </Text>
                <Text className="text-[#969da8]">1x Every day</Text>
              </View>
              <View className="items-end">
                <Text className="text-[#969da8] text-sm">9:00PM</Text>
                <Switch
                  value={false}
                  disabled={true}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  ios_backgroundColor="#3e3e3e"
                  className="mt-2 scale-110"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="p-4 border-t border-t-[#3a4151]">
        <TouchableOpacity className="bg-white rounded-full py-4 items-center">
          <Text className="text-black font-bold text-lg">
            Unlock more reminders
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RemindersScreen;
