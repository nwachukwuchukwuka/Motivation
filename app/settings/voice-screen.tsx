import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5"
          style={styles.cardShadow}
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center mr-10">
          <Text className="text-white text-xl font-bold tracking-tight">
            Settings
          </Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-8">
          <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
            Vocal Presence
          </Text>
          <Text className="text-zinc-500 text-base mt-4 font-medium leading-relaxed">
            Choose the voice that resonates most with your journey.
          </Text>
        </View>

        <View className="px-6 mt-12">
          <View
            className="bg-[#111111] rounded-[32px] border border-white/5 overflow-hidden"
            style={styles.cardShadow}
          >
            {VOICES.map((voice, index) => {
              const isSelected = selectedVoice === voice.name;
              const isLastItem = index === VOICES.length - 1;

              return (
                <TouchableOpacity
                  key={voice.name}
                  onPress={() => setSelectedVoice(voice.name)}
                  className={`flex-row justify-between items-center p-5 ${!isLastItem ? "border-b border-white/[0.03]" : ""
                    } ${isSelected ? "bg-white/[0.02]" : ""}`}
                >
                  <View className="flex-row items-center flex-1">
                    <View className={`w-10 h-10 rounded-xl items-center justify-center border ${isSelected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/5"
                      }`}>
                      <Feather name="mic" size={18} color={isSelected ? "#10b981" : "#3f3f46"} />
                    </View>
                    <View className="ml-4">
                      <Text className={`text-lg font-bold tracking-tight ${isSelected ? "text-white" : "text-zinc-300"}`}>
                        {voice.name}
                      </Text>
                      <Text className="text-zinc-500 text-xs font-medium tracking-wide uppercase mt-0.5">
                        {voice.region}
                      </Text>
                    </View>
                  </View>

                  <View
                    className={`w-5 h-5 rounded-full border-2 items-center justify-center ${isSelected ? "border-emerald-500" : "border-zinc-800"
                      }`}
                  >
                    {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-emerald-500" />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  }
});

export default VoiceScreen;
