import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TOPIC_SECTIONS = [
  {
    title: "Most popular",
    items: [
      "Mental toughness",
      "Feeling blessed",
      "Self-worth",
      "Bible verses",
      "Love",
      "Fitness",
      "Encouraging words",
      "Affirmations",
    ],
  },
  {
    title: "Personal growth",
    items: [
      "Self-esteem",
      "Self-development",
      "Start change",
      "Feeling blessed",
      "Be strong",
      "Accept yourself",
      "Positive thinking",
      "Happiness",
      "Growth",
      "Self-love",
      "New beginnings",
      "Love yourself",
      "Gratitude",
    ],
  },
  {
    title: "Relationships",
    items: [
      "Forgiveness",
      "Trust",
      "Being single",
      "Relationships",
      "Social anxiety",
      "Introvert",
      "Unconditional love",
      "Marriage",
      "Cheating",
      "Friendship",
      "Loyalty",
    ],
  },
];

const TopicsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-2">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-white text-base">Close</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Topics you follow</Text>
        <View className="w-12" />
      </View>

      <ScrollView stickyHeaderIndices={[1]}>
        <View className="px-4 mt-2 pb-4 bg-[#262e3d]">
          <View className="bg-[#3a4151] rounded-lg flex-row items-center px-3 py-2.5">
            <Feather name="search" size={20} color="#969da8" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#969da8"
              className="text-white ml-2 flex-1"
            />
          </View>
        </View>
        ={" "}
        <View className="px-4">
          <View className="mb-6">
            <TouchableOpacity className="flex-row justify-between items-center py-2">
              <Text className="text-white text-lg">General</Text>
              <TouchableOpacity className="border border-[#969da8] rounded-full px-4 py-1">
                <Text className="text-white">Follow</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center py-2">
              <Text className="text-white text-lg">Favorites</Text>
              <TouchableOpacity className="border border-[#969da8] rounded-full px-4 py-1">
                <Text className="text-white">Follow</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center py-2">
              <View className="flex-row items-center">
                <Text className="text-white text-lg">My own quotes</Text>
                <Feather
                  name="lock"
                  size={14}
                  color="#969da8"
                  className="ml-2"
                />
              </View>
              <TouchableOpacity className="border border-[#969da8] rounded-full px-4 py-1">
                <Text className="text-white">Follow</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          {TOPIC_SECTIONS.map((section) => (
            <View key={section.title} className="mb-6">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-white text-xl font-bold">
                  {section.title}
                </Text>
                <TouchableOpacity>
                  <Text className="text-[#969da8]">Follow all</Text>
                </TouchableOpacity>
              </View>
              {section.items.map((item) => (
                <TouchableOpacity
                  key={item}
                  className="flex-row justify-between items-center py-2"
                >
                  <View className="flex-row items-center">
                    <Text className="text-white text-lg">{item}</Text>
                    <Feather
                      name="lock"
                      size={14}
                      color="#969da8"
                      className="ml-2"
                    />
                  </View>
                  <TouchableOpacity className="border border-[#969da8] rounded-full px-4 py-1">
                    <Text className="text-white">Follow</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TopicsScreen;
