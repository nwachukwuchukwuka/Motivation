import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UNSPLASH_IMAGES = [
  {
    author: "Wietse Jongs...",
    image:
      "https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=800",
  },
  {
    author: "Marek Piwnicki",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800",
  },
  {
    author: "Philipp",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800",
  },
  {
    author: "Ingmar",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760c0341?q=80&w=800",
  },
  {
    author: "Dextar Vision",
    image:
      "https://images.unsplash.com/photo-1554050857-c85985862535?q=80&w=800",
  },
  {
    author: "Karsten Wine...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
  },
];

const UnsplashScreen = () => {
  const router = useRouter();
  const { setThemeSource } = useAppContext();

  const handleImageSelect = (imageUrl: string) => {
    setThemeSource({ uri: imageUrl });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-2">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-white text-base">Cancel</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Unsplash</Text>
        <View className="w-14" />
      </View>
      <View className="px-4 mt-2 mb-4">
        <View className="bg-[#3a4151] rounded-lg flex-row items-center px-3 py-2.5">
          <Feather name="search" size={20} color="#969da8" />
          <TextInput
            placeholder="Search photos"
            placeholderTextColor="#969da8"
            className="text-white ml-2 flex-1"
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 12 }}>
        <View className="flex-row flex-wrap">
          {UNSPLASH_IMAGES.map((item, index) => (
            <View key={index} className="w-1/2 p-2">
              <Pressable onPress={() => handleImageSelect(item.image)}>
                <ImageBackground
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  className="h-48 w-full rounded-lg justify-end p-2 overflow-hidden"
                >
                  <View className="absolute inset-0 bg-black/30" />
                  <Text className="text-white font-bold">{item.author}</Text>
                </ImageBackground>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UnsplashScreen;
