import { Feather } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SoundScreen = () => {
  const router = useRouter();
  const [volume, setVolume] = useState(0.5);

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row items-center p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Settings</Text>
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-white text-3xl font-bold">Sound</Text>
        <Text className="text-gray-100 text-xl mt-2 mb-12">
          Set the volume you'd like
        </Text>
        <Text className="text-gray-100 text-xl font-bold tracking-widest">
          THEME SOUND
        </Text>
        <View className="bg-[#3a4151] rounded-2xl p-2 mt-4">
          <Slider
            style={{ width: "100%", height: 40, marginTop: 10 }}
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={setVolume}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#5a6172"
            thumbTintColor="#FFFFFF"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SoundScreen;
