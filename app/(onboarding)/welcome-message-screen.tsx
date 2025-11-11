import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

const WelcomeMessageScreen = () => {
  const router = useRouter();

  const { userName } = useLocalSearchParams();
  const name = userName || "friend"; 

  const handleContinue = () => {
    router.replace('/personalization-intro-screen'); 
  };

  return (
    <View className="flex-1 justify-between items-center p-6 bg-black">
      <StatusBar barStyle="light-content" />

      <View />

      <Text className="text-white text-3xl font-bold text-center">
        You are exactly where you are meant to be, {name}.
      </Text>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeMessageScreen;
