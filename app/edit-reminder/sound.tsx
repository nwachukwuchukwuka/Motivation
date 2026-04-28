import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();
  const [selectedSound, setSelectedSound] = useState("System default");

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#050505]">
      <View className="px-8 pt-6 flex-row justify-between items-center mb-5">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
        >
          <Feather name="chevron-left" size={24} color="#94A3B8" />
        </TouchableOpacity>
        <View className="w-10 h-1" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Sound
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Choose a unique sound for your notification reminders.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* Sound Selection Pod */}
        <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5">
          {SOUND_OPTIONS.map((sound, index) => {
            const isSelected = selectedSound === sound.name;
            const isLast = index === SOUND_OPTIONS.length - 1;

            return (
              <View key={sound.name}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setSelectedSound(sound.name)}
                  className="flex-row justify-between items-center py-4"
                >
                  <View className="flex-row items-center">
                    <View className={`w-10 h-10 rounded-xl items-center justify-center border transition-all ${isSelected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/10"
                      }`}>
                      <Ionicons
                        name={sound.isMuted ? "volume-mute-outline" : "volume-medium-outline"}
                        size={20}
                        color={isSelected ? "#10b981" : "#52525b"}
                      />
                    </View>
                    <Text className="ml-4 text-lg font-medium tracking-tight text-white">
                      {sound.name}
                    </Text>
                  </View>

                  {isSelected ? (
                    <View className="w-5 h-5 rounded-full bg-emerald-500 items-center justify-center">
                      <Feather name="check" size={12} color="black" />
                    </View>
                  ) : (
                    <View className="w-5 h-5 rounded-full border-2 border-white/10" />
                  )}
                </TouchableOpacity>
                {!isLast && <View className="h-[1px] bg-white/5 w-full" />}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SoundScreen;
