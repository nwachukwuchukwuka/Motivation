import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const CustomizeScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingBottom: insets.bottom + 20 }}>
      {/* Immersive Background Element */}
      <View className="absolute inset-0 items-center justify-center opacity-[0.2]">
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600" }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-black/70" />
      </View>

      <View className="flex-1 px-8 pt-24 justify-between">
        <View>
          <View className="w-20 h-20 bg-[#111111] rounded-[28px] items-center justify-center border border-white/5 mb-10">
            <Feather name="settings" size={32} color="#10b981" />
          </View>
          
          <Text className="text-[#E2E8F0] text-5xl font-bold tracking-tighter leading-[1.1]">
            Make it{"\n"}yours
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6 mb-8" />
          <Text className="text-[#94A3B8] text-xl font-medium leading-relaxed">
            Customize the app to improve your experience and align with your personal growth goals.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center"
            activeOpacity={0.9}
            onPress={() => router.push("/age-screen")}
          >
            <Text className="text-black text-lg font-bold tracking-tight">Continue</Text>
          </TouchableOpacity>
          <Text className="text-zinc-600 text-center text-xs mt-6 font-bold tracking-widest uppercase">
            Personalizing your path
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomizeScreen;
