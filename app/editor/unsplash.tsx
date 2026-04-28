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
    author: "Wietse Jongbloed",
    image:
      "https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=800",
  },
  {
    author: "Marek Piwnicki",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800",
  },
  {
    author: "Philipp Pilz",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800",
  },
  {
    author: "Ingmar Meiler",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760c0341?q=80&w=800",
  },
  {
    author: "Dextar Vision",
    image:
      "https://images.unsplash.com/photo-1554050857-c85985862535?q=80&w=800",
  },
  {
    author: "Karsten Winegeart",
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
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5 shadow-lg"
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center mr-10">
          <Text className="text-white text-xl font-bold tracking-tight">Unsplash</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View className="px-6 mb-6">
        <View className="bg-[#111111] rounded-2xl flex-row items-center px-4 py-3.5 border border-white/5 shadow-sm">
          <Feather name="search" size={20} color="#10b981" />
          <TextInput
            placeholder="Search thousands of photos"
            placeholderTextColor="#52525b"
            className="text-white ml-3 flex-1 font-medium"
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6">
          {UNSPLASH_IMAGES.map((item, index) => (
            <View key={index} className="w-full mb-6">
              <Pressable
                onPress={() => handleImageSelect(item.image)}
                className="active:opacity-90 transition-opacity"
              >
                <ImageBackground
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  className="h-[650px] w-full rounded-[32px] justify-end overflow-hidden border border-white/5 shadow-2xl"
                >
                  <View className="absolute inset-0 bg-black/20" />
                  <View className="p-6 bg-black/40 backdrop-blur-xl">
                    <Text
                      className="text-white text-sm font-bold tracking-tight"
                      numberOfLines={1}
                    >
                      {item.author}
                    </Text>
                  </View>
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
