import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path, Text as SvgText } from "react-native-svg";

const BookIllustration = () => (
  <Svg width="150" height="150" viewBox="0 0 100 100">
    <Path d="M15 80 L 85 80 L 90 70 L 20 70 Z" fill="#3a4151" />
    <Path d="M20 70 L 90 70 L 90 50 L 20 50 Z" fill="#4a5162" />
    <Path d="M25 55 L 45 55" stroke="#3a4151" strokeWidth="2" />
    <Path d="M25 60 L 65 60" stroke="#3a4151" strokeWidth="2" />
    <Path d="M25 65 L 55 65" stroke="#3a4151" strokeWidth="2" />

    {/* Top Book */}
    <Path d="M10 50 L 80 50 L 85 40 L 15 40 Z" fill="#3a4151" />
    <Path d="M15 40 L 85 40 L 85 20 L 15 20 Z" fill="#4a5162" />
    <Path d="M20 25 L 40 25" stroke="#3a4151" strokeWidth="2" />
    <Path d="M20 30 L 60 30" stroke="#3a4151" strokeWidth="2" />
    <Path d="M20 35 L 50 35" stroke="#3a4151" strokeWidth="2" />
    {/* Quote circle on top book */}
    <Circle cx="50" cy="30" r="10" fill="#262e3d" />
    <SvgText
      x="50"
      y="35"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      ”
    </SvgText>
  </Svg>
);

const CollectionsScreen = () => {
  const router = useRouter();
   const { collections, quoteToAdd, addQuoteToCollection, isQuoteInCollection } =
    useAppContext();
  const { display } = useLocalSearchParams();
  const currentDisplayMode = display || "collections";

  if (collections.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#262e3d]">
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold">My collections</Text>
          <TouchableOpacity
            onPress={() => router.push("/explore-topics/new-collections")}
          >
            <Text className="text-white text-base">Add new</Text>
          </TouchableOpacity>
        </View>
        {/* Main Content (Empty State) */}
        <View className="flex-1 justify-center items-center p-6 -mt-16">
          <BookIllustration />
          <Text className="text-white text-2xl font-bold text-center mt-8">
            You don't have any collections yet
          </Text>
          <Text className="text-[#969da8] text-base text-center mt-4 max-w-xs leading-relaxed">
            Create collections to group quotes you want to save together, like
            'Loving myself' or 'Reaching my goals'.
          </Text>
        </View>
        {/* Footer Button (Empty State) */}
        <View className="p-4 border-t border-t-gray-700">
          <TouchableOpacity
            onPress={() => router.push("/explore-topics/new-collections")}
            className="bg-white rounded-full w-full py-4 items-center justify-center"
          >
            <Text className="text-black font-bold text-lg">
              Create collection
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-2">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">My collections</Text>
        <TouchableOpacity
          onPress={() => router.push("/explore-topics/new-collections")}
        >
          <Text className="text-white text-base">Add new</Text>
        </TouchableOpacity>
      </View>

      {/* <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              if (display === "collections") {
                router.push(`/explore-topics/${item.id}`);
              } else if (display === "favorites") {
                setIsBookmarked(!isBookmarked);
              }
            }}
            className="bg-[#3a4151] rounded-2xl p-4 mb-3 flex-row justify-between items-center"
          >
            <View>
              <Text className="text-white text-lg font-semibold">
                {item.name}
              </Text>
              {display === "collections" && (
                <Text className="text-gray-400 mt-1">
                  {item.quoteIds.length} quote
                  {item.quoteIds.length !== 1 ? "s" : ""}
                </Text>
              )}
            </View>

            {display === "collections" ? (
              <Feather name="chevron-right" size={24} color="#969da8" />
            ) : (
              display === "favorites" && (
                <Feather
                  name="bookmark"
                  size={20}
                  color={isBookmarked ? "black" : "white"}
                />
              )
            )}
          </Pressable>
        )}
      /> */}

      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => {
          const isBookmarked = quoteToAdd
            ? isQuoteInCollection(item.id, quoteToAdd.id)
            : false;

          return (
            <Pressable
              onPress={() => {
                if (currentDisplayMode === "collections") {
                  router.push(`/explore-topics/${item.id}`);
                } else if (currentDisplayMode === "favorites" && quoteToAdd) {
                  addQuoteToCollection(item.id, quoteToAdd.id);
                }
              }}
              className="bg-[#3a4151] rounded-2xl p-4 mb-3 flex-row justify-between items-center"
            >
              <View>
                <Text className="text-white text-lg font-semibold">
                  {item.name}
                </Text>
                {currentDisplayMode === "collections" && (
                  <Text className="text-gray-400 mt-1">
                    {item.quoteIds.length} quote
                    {item.quoteIds.length !== 1 ? "s" : ""}
                  </Text>
                )}
              </View>

              {currentDisplayMode === "collections" ? (
                <Feather name="chevron-right" size={24} color="#969da8" />
              ) : (
                <Feather
                  name="bookmark"
                  size={24}
                  color={isBookmarked ? "white" : "#969da8"}
                  fill={isBookmarked ? "white" : "transparent"}
                />
              )}
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CollectionsScreen;
