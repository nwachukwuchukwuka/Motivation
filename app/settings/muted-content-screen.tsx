import { useAppContext } from "@/context/context"; // We'll need to add muted content to our context
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path } from "react-native-svg";

const MutedIllustration = () => (
  <Svg width="120" height="120" viewBox="0 0 100 100">
    <Circle cx="50" cy="50" r="40" fill="#3a4151" />
    <Path d="M20 80 L 80 20" stroke="#262e3d" strokeWidth="12" />
    <Path
      d="M40 60 C 40 40, 60 40, 60 60"
      stroke="#4a5162"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <Path
      d="M50 60 V 70"
      stroke="#4a5162"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </Svg>
);

const MutedContentScreen = () => {
  const router = useRouter();
  // Assuming you've added `mutedWords` and `removeMutedWord` to your context
  const { mutedWords = [], removeMutedWord = () => {} } = useAppContext();

  if (mutedWords.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#262e3d] justify-between">
        <View>
          <View className="flex-row justify-between items-center p-4">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex-row items-center"
            >
              <Feather name="chevron-left" size={28} color="white" />
              <Text className="text-white text-base ml-1">Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/settings/add-muted-content-screen")}
            >
              <Text className="text-white text-base">Add</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 items-center justify-center pt-16">
            <MutedIllustration />
            <Text className="text-white text-2xl font-bold text-center mt-8">
              You haven't muted anything yet
            </Text>
            <Text className="text-gray-400 text-base text-center mt-2 max-w-xs">
              When you mute content, you won't see it in your feed,
              notifications, or widgets
            </Text>
          </View>
        </View>
        <View className="p-4 border-t border-t-gray-700">
          <TouchableOpacity
            onPress={() => router.push("/settings/add-muted-content-screen")}
            className="bg-white rounded-full w-full py-4 items-center justify-center"
          >
            <Text className="text-black font-bold text-lg">
              Add muted content
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-base ml-1">Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/settings/add-muted-content-screen")}
        >
          <Text className="text-white text-base">Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-white text-3xl font-bold">Muted content</Text>
        <Text className="text-gray-400 text-base mt-2 mb-6">
          When you mute content, you won't see it in your feed, notifications,
          or widgets
        </Text>
        <View className="space-y-3">
          {mutedWords.map((word: string) => (
            <View
              key={word}
              className="bg-[#3a4151] rounded-lg p-4 flex-row justify-between items-center"
            >
              <Text className="text-white text-lg">{word}</Text>
              <TouchableOpacity onPress={() => removeMutedWord(word)}>
                <Feather name="more-vertical" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MutedContentScreen;
