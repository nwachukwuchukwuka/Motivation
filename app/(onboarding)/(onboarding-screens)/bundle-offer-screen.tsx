import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const BundleOfferScreen = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/theme-selection-screen");
    // router.push("/welcome-message-screen");
  };

  return (
    <View className="flex-1 justify-between items-center px-5 pt-24 bg-[#262e3d]">
      <View className="flex-1  items-center w-full">
        <Text className="text-white text-3xl font-semibold text-center">
          Discover the Self-Growth Essentials bundle
        </Text>
        <Text className="text-[#969da8] text-xl text-center mt-4 max-w-lg">
          Invest in yourself with a huge discount by subscribing to our 6 apps
          at once
        </Text>
        <Image
          source={require("../../../assets/images/bitcoin.png")}
          className=" w-[40%] h-[40%] rounded-full "
          resizeMode="contain"
        />
        <TouchableOpacity className="flex-row items-center gap-2">
          <Feather name="download" size={24} color="white" />
          <Text className="text-white text-lg ">Get bundle</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BundleOfferScreen;
