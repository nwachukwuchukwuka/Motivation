import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WatchScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center p-4 pl-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Motivation</Text>
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold mr-20">Watch</Text>
        <TouchableOpacity>
          <Feather name="share" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <View className="items-center">
          <View className="w-60 h-64  bg-black rounded-[48px] border-4 border-gray-700 p-6 items-center justify-center mt-8">
            <View className="flex-row items-center justify-between w-full">
              <View className="items-center bg-[#374051] p-2 px-4 rounded-full">
                <Text className="text-gray-400 text-xs">FRI</Text>
                <Text className="text-white text-2xl font-bold">23</Text>
              </View>
              <Text className="text-white text-5xl">11:11</Text>
            </View>
            <Text className="text-white text-xl mt-4">
              Choose people who choose you
            </Text>
          </View>
        </View>

        <View className="w-full mt-12 space-y-4">
          <TouchableOpacity className="bg-[#374051] rounded-full p-3 flex-row justify-between items-center">
            <Text className="text-white text-lg">Type of quotes</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400 text-lg mr-1">General</Text>
              <Feather name="chevron-right" size={20} color="#969da8" />
            </View>
          </TouchableOpacity>
          <Text className="text-white text-lg  mt-6">
            The selected category applies to all content on your Watch: face,
            complications, widgets, and app.
          </Text>
        </View>

        <TouchableOpacity className="bg-white w-full py-4 rounded-full items-center justify-center mt-48">
          <Text className="text-black text-xl font-bold">
            Set as Watch face
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-4">
          <Text className="text-white text-center text-xl font-semibold">
            Get more instructions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WatchScreen;
