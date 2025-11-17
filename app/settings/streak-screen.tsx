import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StreakScreen = () => {
  const router = useRouter();

  const [isTrackingEnabled, setIsTrackingEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row items-center p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-white text-3xl font-bold">Streak</Text>

        <Text className="text-gray-300 text-lg mt-4 leading-relaxed">
          Reading quotes daily can significantly improve your mindset
        </Text>

        <View className="bg-[#3a4151] rounded-2xl p-4 mt-8 flex-row justify-between items-center">
          <Text className="text-white text-lg">Track streak</Text>
          <Switch
            value={isTrackingEnabled}
            onValueChange={setIsTrackingEnabled}
            trackColor={{ false: "#767577", true: "#a88beb" }}
            thumbColor={isTrackingEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StreakScreen;
