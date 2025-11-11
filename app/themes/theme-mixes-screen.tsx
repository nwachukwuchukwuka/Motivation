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
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Themes</Text>
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Theme mixes</Text>
        <TouchableOpacity>
          <Text className="text-white text-xl">Create</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 8 }} showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between">
          {THEME_MIXES.map((mix, index) => (
            <View key={index} className="w-1/2 p-2">
              <TouchableOpacity>
                <ImageBackground
                  source={{ uri: mix.image }}
                  className="h-40 rounded-2xl items-center justify-center p-2 overflow-hidden"
                  resizeMode="cover"
                >
                  <View className="absolute inset-0 bg-black/30 rounded-2xl" />
                  <Text
                    className="text-white text-xl font-bold text-center"
                    style={{ fontFamily: "serif" }}
                  >
                    {mix.name}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThemeMixesScreen;
