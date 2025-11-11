import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SOUND_OPTIONS = [
  { name: "Messenger", isMuted: false },
  { name: "Domino", isMuted: false },
  { name: "System default", isMuted: false },
  { name: "No sound", isMuted: true },
  { name: "Spaceship", isMuted: false },
  { name: "Gucci", isMuted: false },
  { name: "Sheba", isMuted: false },
  { name: "Piper", isMuted: false },
  { name: "Correct", isMuted: false },
  { name: "Coco", isMuted: false },
  { name: "Drums", isMuted: false },
  { name: "Louire", isMuted: false },
];

const SoundScreen = () => {
  const router = useRouter();
  // In a real app, you'd get the current sound via params and pass the new one back.
  // For this UI example, we'll manage state locally.
  const [selectedSound, setSelectedSound] = useState("System default");

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      {/* Header */}
      <View className="flex-row items-center p-4 pl-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Edit reminder</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        <Text className="text-white text-3xl font-bold mt-4">Sound</Text>
        <Text className="text-white text-xl mt-6 mb-6">
          Choose a sound for notifications
        </Text>
        <View className="bg-[#374051] rounded-2xl p-4">
          {SOUND_OPTIONS.map((sound) => {
            const isSelected = selectedSound === sound.name;
            return (
              <TouchableOpacity
                key={sound.name}
                onPress={() => setSelectedSound(sound.name)}
                className="flex-row justify-between items-center py-3 border-b border-[#3e485c] -mx-4 px-4"
              >
                <View className="flex-row items-center">
                  {sound.isMuted ? (
                    <Ionicons
                      name="volume-mute-outline"
                      size={24}
                      color="#969da8"
                    />
                  ) : (
                    <Ionicons
                      name="volume-medium-outline"
                      size={24}
                      color="#969da8"
                    />
                  )}
                  <Text className="text-white text-lg ml-4">{sound.name}</Text>
                </View>
                <View className="w-6 h-6 rounded-full border-2 border-gray-500 items-center justify-center">
                  {isSelected && (
                    <View className="w-3 h-3 rounded-full bg-white" />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SoundScreen;
