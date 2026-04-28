import { Feather } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SoundScreen = () => {
  const router = useRouter();
  const [volume, setVolume] = useState(0.5);

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

      <View className="px-6 mt-8">
        <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
          Audio Immersion
        </Text>
        <Text className="text-zinc-500 text-base mt-4 font-medium leading-relaxed max-w-[85%]">
          Fine-tune the ambient intensity to create your perfect motivational environment.
        </Text>
      </View>

      <View className="px-6 mt-12">
        <View
          className="bg-[#111111] rounded-[32px] p-8 border border-white/5"
          style={styles.cardShadow}
        >
          <View className="flex-row items-center justify-between mb-8">
            <View className="flex-row items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
              <Text className="text-zinc-500 text-[10px] font-bold tracking-tight">Theme sound</Text>
            </View>
            <Text className="text-emerald-500 text-sm font-bold tracking-tight">{Math.round(volume * 100)}%</Text>
          </View>

          <View className="flex-row items-center gap-4">
            <Feather name="volume-x" size={20} color="#3f3f46" />
            <View className="flex-1">
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={1}
                value={volume}
                onValueChange={setVolume}
                minimumTrackTintColor="#10b981"
                maximumTrackTintColor="#1a1a1a"
                thumbTintColor="#ffffff"
              />
            </View>
            <Feather name="volume-2" size={20} color="#10b981" />
          </View>
        </View>
      </View>
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

export default SoundScreen;
