import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VOICES = [
  { name: "Gordon", region: "en-AU" },
  { name: "Karen", region: "en-AU" },
  { name: "Catherine", region: "en-AU" },
  { name: "Rocko", region: "en-GB" },
  { name: "Shelley", region: "en-GB" },
  { name: "Martha", region: "en-GB" },
  { name: "Daniel", region: "en-GB" },
  { name: "Grandma", region: "en-GB" },
  { name: "Grandpa", region: "en-GB" },
  { name: "Flo", region: "en-GB" },
  { name: "Eddy", region: "en-GB" },
  { name: "Reed", region: "en-GB" },
];

const VoiceScreen = () => {
  const router = useRouter();
  const [selectedVoice, setSelectedVoice] = useState("Gordon");

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

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-white text-3xl font-bold mb-4">Voice</Text>

        <View className="bg-[#374051] rounded-2xl">
          {VOICES.map((voice, index) => {
            const isSelected = selectedVoice === voice.name;
            const isLastItem = index === VOICES.length - 1;

            return (
              <TouchableOpacity
                key={voice.name}
                onPress={() => setSelectedVoice(voice.name)}
                className={`flex-row justify-between items-center p-3 ${
                  !isLastItem ? "border-b border-gray-600" : ""
                }`}
              >
                <View>
                  <Text className="text-white text-lg">{voice.name}</Text>
                  <Text className="text-gray-100 text-sm">{voice.region}</Text>
                </View>

                <View
                  className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                    isSelected ? "bg-white border-white" : "border-gray-500"
                  }`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VoiceScreen;
