import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-between items-center px-6 py-8 bg-[#262e3d]">
      <View className="items-center mt-12">
        <Text className="text-white text-4xl font-semibold text-center">
          Get motivation throughout the day
        </Text>
        <Text className="text-[#969da8] text-lg text-center mt-10 px-5">
          Inspiration to think positively, stay consistent, and focus on your
          growth
        </Text>
      </View>

      <Image
        source={require("../../../assets/images/door.png")}
        className=" w-[70%] h-[50%] rounded-full "
        resizeMode="contain"
      />

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center"
        onPress={() => router.push("/survey-screen")}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
