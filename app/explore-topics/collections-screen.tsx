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
      <SafeAreaView className="flex-1 bg-[#050505]">
        <View className="flex-row justify-between items-center px-6 py-6">
          <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]">
            <Feather name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold tracking-tight">My Collections</Text>
          <TouchableOpacity
            onPress={() => router.push("/explore-topics/new-collections")}
          >
            <Text className="text-emerald-500 font-bold">Add new</Text>
          </TouchableOpacity>
        </View>
        
        <View className="flex-1 justify-center items-center px-10">
          <View className="w-32 h-32 bg-emerald-500/10 rounded-full items-center justify-center border border-emerald-500/20 mb-10">
            <BookIllustration />
          </View>
          <Text className="text-white text-3xl font-bold text-center">
            No collections yet
          </Text>
          <Text className="text-zinc-500 text-center mt-4 text-lg font-medium leading-relaxed">
            Create collections to group quotes you want to save together.
          </Text>
        </View>

        <View className="px-6 pb-10">
          <TouchableOpacity
            onPress={() => router.push("/explore-topics/new-collections")}
            className="bg-emerald-500 rounded-[24px] w-full py-5 items-center justify-center shadow-lg shadow-emerald-500/40"
          >
            <Text className="text-white font-bold text-lg">
              Create collection
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      <View className="flex-row justify-between items-center px-6 py-6">
        <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]">
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold tracking-tight">My Collections</Text>
        <TouchableOpacity
          onPress={() => router.push("/explore-topics/new-collections")}
        >
          <Text className="text-emerald-500 font-bold">Add new</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 10, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
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
              className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 mb-4 flex-row justify-between items-center shadow-sm"
            >
              <View className="flex-1 pr-4">
                <Text className="text-white text-lg font-bold">
                  {item.name}
                </Text>
                {currentDisplayMode === "collections" && (
                  <Text className="text-zinc-500 mt-1 font-bold text-xs">
                    {item.quoteIds.length} quote
                    {item.quoteIds.length !== 1 ? "s" : ""}
                  </Text>
                )}
              </View>

              {currentDisplayMode === "collections" ? (
                <View className="w-10 h-10 bg-zinc-900 rounded-full items-center justify-center border border-zinc-800">
                  <Feather name="chevron-right" size={20} color="#52525b" />
                </View>
              ) : isBookmarked ? (
                <View className="w-10 h-10 bg-emerald-500/10 rounded-full items-center justify-center border border-emerald-500/20">
                  <FontAwesome name="bookmark" size={20} color="#10b981" />
                </View>
              ) : (
                <View className="w-10 h-10 bg-[#0a0a0a] rounded-full items-center justify-center border border-[#222222]">
                  <FontAwesome name="bookmark-o" size={20} color="#3f3f46" />
                </View>
              )}
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CollectionsScreen;
