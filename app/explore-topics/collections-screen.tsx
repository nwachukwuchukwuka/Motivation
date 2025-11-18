import { BookIllustration } from "@/components/Illustrations";
import { useAppContext } from "@/context/context";
import { Feather, FontAwesome } from "@expo/vector-icons";
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

const CollectionsScreen = () => {
  const router = useRouter();
  const { collections, quoteToAdd, addQuoteToCollection, isQuoteInCollection } =
    useAppContext();
  const { display } = useLocalSearchParams();
  const currentDisplayMode = display || "collections";

  if (collections.length === 0) {
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
            <Text className="text-white text-xl">Add new</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center p-6 mt-24">
          <BookIllustration />
          <Text className="text-white text-3xl font-bold text-center mt-20">
            You don't have any collections yet
          </Text>
          <Text className="text-white text-xl text-center mt-4 leading-relaxed">
            Create collections to group quotes you want to save together, like
            'Loving myself' or 'Reaching my goals'.
          </Text>
        </View>
        <View className="p-4 ">
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
          <Text className="text-white text-xl">Add new</Text>
        </TouchableOpacity>
      </View>

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
              ) : isBookmarked ? (
                <FontAwesome name="bookmark" size={24} color="black" />
              ) : (
                <FontAwesome name="bookmark-o" size={24} color="black" />
              )}
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CollectionsScreen;
