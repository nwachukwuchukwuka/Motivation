import { ShelfIllustration } from "@/components/Illustrations";
import { Quote, useAppContext } from "@/context/context";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoritesScreen = () => {
  const router = useRouter();

  const {
    allQuotes,
    favoriteQuoteIds,
    toggleFavorite,
    setQuoteToAdd,
    isQuoteInAnyCollection,
    setFeedQuotes,
  } = useAppContext();

  const handleRemoveFavorite = (idToRemove: string) => {
    toggleFavorite(idToRemove);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const favoriteQuotes = useMemo(() => {
    return allQuotes.filter((quote) => favoriteQuoteIds.includes(quote.id));
  }, [allQuotes, favoriteQuoteIds]);

  const filteredFavorites = useMemo(() => {
    if (!searchQuery) return favoriteQuotes;
    return favoriteQuotes.filter((fav) =>
      fav.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, favoriteQuotes]);

  const handleCancelSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    Keyboard.dismiss();
  };

  const handleAddToCollection = (quote: Quote) => {
    setQuoteToAdd(quote);
    router.push({
      pathname: "./collections-screen",
      params: {
        presentation: "modal",
        display: "favorites",
      },
    });
  };

  const handleShowInFeed = () => {
    setFeedQuotes(filteredFavorites);
    router.push("/explore-topics/show-all-in-feed");
  };

  if (favoriteQuotes.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#262e3d]">
        <View className="flex-row items-center p-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center">
          <ShelfIllustration />
          <Text className="text-white text-2xl font-bold text-center mt-8">
            You don't have any favorites yet
          </Text>
        </View>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      {!isSearching && (
        <View className="flex-row justify-between items-center px-4 py-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold">Favorites</Text>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="swap-vertical"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-500 rounded-full px-4 py-1.5">
              <Text className="text-white">Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View className="px-4 mt-2 mb-4 flex-row items-center">
        <View className="bg-[#3a4151] rounded-lg flex-row items-center px-3 py-2.5 flex-1">
          <Feather name="search" size={20} color="#969da8" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#969da8"
            className="text-white ml-2 flex-1"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsSearching(true)}
          />
          {searchQuery.length > 0 && isSearching && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Feather name="x-circle" size={18} color="#969da8" />
            </TouchableOpacity>
          )}
        </View>
        {isSearching && (
          <TouchableOpacity onPress={handleCancelSearch} className="pl-4">
            <Text className="text-white text-base">Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        {!isSearching && (
          <TouchableOpacity
            className="bg-white rounded-full py-3 items-center mb-4"
            onPress={handleShowInFeed}
          >
            <Text className="text-black text-base font-bold">
              Show all in feed
            </Text>
          </TouchableOpacity>
        )}

        <View className="gap-4">
          {filteredFavorites.map((fav) => {
            const isBookmarked = isQuoteInAnyCollection(fav.id);

            return (
              <View key={fav.id} className="bg-[#3a4151] rounded-2xl p-4 gap-4">
                <Text className="text-white text-lg leading-relaxed">
                  {fav.text}
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-gray-400">{fav.date}</Text>
                  <View className="flex-row items-center gap-4">
                    <TouchableOpacity
                      onPress={() => handleRemoveFavorite(fav.id)}
                    >
                      <AntDesign name="heart" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleAddToCollection(fav)}
                    >
                      {isBookmarked ? (
                        <FontAwesome name="bookmark" size={20} color="white" />
                      ) : (
                        <FontAwesome
                          name="bookmark-o"
                          size={20}
                          color="white"
                        />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Feather name="share" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
