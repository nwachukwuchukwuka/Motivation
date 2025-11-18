import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SubscriptionScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d] justify-between">
      <View>
        <View className="flex-row items-center p-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Feather name="chevron-left" size={28} color="white" />
            <Text className="text-white text-xl ml-1">Back</Text>
          </TouchableOpacity>
        </View>

        <View className="p-4">
          <Text className="text-white text-3xl font-bold">
            Manage subscription
          </Text>
          <Text className="text-white text-xl mt-8">
            You are not subscribed
          </Text>
          <Text className="text-gray-200 text-base mt-2 leading-relaxed">
            You have a free Motivation account. You can purchase a Premium
            subscription to access our full library of content and features.
          </Text>
        </View>
      </View>

      <View className="p-4">
        <TouchableOpacity className="bg-white rounded-full w-full py-4 items-center justify-center">
          <Text className="text-black font-bold text-lg">Go Premium</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
