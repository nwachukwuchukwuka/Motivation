import { useAppContext } from "@/context/context";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const WidgetInstallScreen = () => {
  const router = useRouter();
  const { setIsAuthenticated } = useAppContext();

  const handleInstall = () => {
    setIsAuthenticated(true);
    router.replace("/");
  };

  const handleRemindLater = () => {
    setIsAuthenticated(true);
    router.replace("/");
  };

  return (
    <View className="flex-1 justify-between items-center px-5 pt-20  bg-[#262e3d]">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-3xl font-semibold text-center">
          Add a free widget to your Home Screen
        </Text>
        <Text className="text-[#e6e8eb] text-lg text-center mt-4 max-w-lg">
          On your phone's Home Screen, touch and hold an empty area, then tap
          Edit
        </Text>

        <View className="w-[90%] h-[400px] bg-[#3a4151]/50 rounded-[40px] border-2 border-[#4a5162] mt-8 p-4">
          <View className="w-24 h-2 bg-black/20 rounded-full self-center mb-4" />
          <View className="bg-[#1E1E2F] rounded-2xl p-6 h-40 items-center justify-center border border-[#4a5162]">
            <Text className="text-white text-center text-2xl">
              You are stronger than you think
            </Text>
          </View>
          <View className="flex-row flex-wrap justify-between mt-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <View
                key={index}
                className="w-12 h-12 bg-[#3a4151] rounded-lg m-1"
              />
            ))}
          </View>
        </View>
      </View>

      <View className="w-full">
        <TouchableOpacity
          className="bg-white w-full py-4 rounded-full items-center justify-center"
          onPress={handleInstall}
        >
          <Text className="text-black text-lg font-bold">Install widget</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-4 items-center"
          onPress={handleRemindLater}
        >
          <Text className="text-[#969da8] text-lg">Remind me later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WidgetInstallScreen;
