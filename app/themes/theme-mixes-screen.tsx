import { THEME_MIXES } from "@/constants/constants";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeMixesScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Top Navigation Bar */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-[#111111] border border-[#222222] items-center justify-center"
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/editor")}
          className="bg-emerald-500/10 px-5 py-2.5 rounded-full border border-emerald-500/20"
        >
          <Text className="text-emerald-400 text-sm font-bold">
            Create
          </Text>
        </TouchableOpacity>
      </View>

      {/* Header Section */}
      <View className="px-6 py-6 mb-2">
        <Text className="text-emerald-500 text-sm font-bold tracking-tight mb-2">
          Your library
        </Text>
        <Text className="text-white text-4xl font-bold tracking-tight">
          Theme mixes
        </Text>
      </View>

      {/* Main Content List */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col">
          {THEME_MIXES.map((mix, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8} className="mb-6">
              <View className="w-full h-48 rounded-[36px] overflow-hidden border border-[#222222] shadow-2xl">
                <ImageBackground
                  source={{ uri: mix.image }}
                  className="flex-1 justify-end"
                  resizeMode="cover"
                >
                  {/* Modern Overlay */}
                  <View className="absolute inset-0 bg-black/40" />

                  {/* Card Content */}
                  <View className="p-5 flex-row justify-between items-end">
                    <View className="flex-1 pr-">
                      <Text
                        className="text-white text-2xl font-bold tracking-tight"
                        numberOfLines={2}
                      >
                        {mix.name}
                      </Text>
                    </View>

                    {/* Action Icon */}
                    <View className="bg-emerald-500 w-12 h-12 rounded-full items-center justify-center shadow-lg shadow-emerald-500/40">
                      <Feather name="chevron-right" size={24} color="white" />
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThemeMixesScreen;