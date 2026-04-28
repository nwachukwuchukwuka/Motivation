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
      <SafeAreaView className="flex-1 bg-[#050505]">
        <View className="flex-row items-center p-6">
          <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]">
            <Feather name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center px-10">
          <View className="w-32 h-32 bg-emerald-500/10 rounded-full items-center justify-center border border-emerald-500/20 mb-8">
            <ShelfIllustration />
          </View>
          <Text className="text-white text-3xl font-bold text-center">
            No favorites yet
          </Text>
          <Text className="text-zinc-500 text-center mt-4 text-lg font-medium leading-relaxed">
            Double tap your favorite quotes to save them here for later.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {!isSearching && (
        <View className="flex-row justify-between items-center px-6 py-6">
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-zinc-500 text-base font-bold">Close</Text>
          </TouchableOpacity>
          
          <Text className="text-white text-lg font-bold tracking-tight">Favorites</Text>

          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]">
              <MaterialCommunityIcons
                name="swap-vertical"
                size={20}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity className="bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <Text className="text-emerald-400 text-xs font-bold">Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Modern Search Bar */}
      <View className="px-6 mb-6 flex-row items-center">
        <View className="bg-[#111111] rounded-2xl flex-row items-center px-4 py-4 flex-1 border border-[#222222]">
          <Feather name="search" size={18} color="#52525b" />
          <TextInput
            placeholder="Search favorites"
            placeholderTextColor="#3f3f46"
            className="text-white ml-3 flex-1 text-base font-medium"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsSearching(true)}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Feather name="x-circle" size={18} color="#52525b" />
            </TouchableOpacity>
          )}
        </View>
        {isSearching && (
          <TouchableOpacity onPress={handleCancelSearch} className="ml-4">
            <Text className="text-emerald-500 font-bold text-sm">DONE</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
      >
        {!isSearching && (
          <TouchableOpacity
            className="bg-emerald-500 rounded-[20px] py-4 items-center mb-8 shadow-lg shadow-emerald-500/40"
            onPress={handleShowInFeed}
          >
            <Text className="text-white text-base font-bold">
              Show all in feed
            </Text>
          </TouchableOpacity>
        )}

        <View className="gap-5">
          {filteredFavorites.map((fav) => {
            const isBookmarked = isQuoteInAnyCollection(fav.id);

            return (
              <View key={fav.id} className="bg-[#111111] border border-[#222222] rounded-[32px] p-6 shadow-sm">
                <Text className="text-white text-xl font-bold leading-relaxed mb-6">
                  {fav.text}
                </Text>
                
                <View className="flex-row justify-between items-center border-t border-zinc-800/50 pt-5">
                  <Text className="text-zinc-500 text-xs font-bold">{fav.date}</Text>
                  
                  <View className="flex-row items-center gap-6">
                    <TouchableOpacity
                      onPress={() => handleRemoveFavorite(fav.id)}
                    >
                      <AntDesign name="heart" size={20} color="#10b981" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      onPress={() => handleAddToCollection(fav)}
                    >
                      {isBookmarked ? (
                        <FontAwesome name="bookmark" size={20} color="#10b981" />
                      ) : (
                        <FontAwesome
                          name="bookmark-o"
                          size={20}
                          color="#52525b"
                        />
                      )}
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                      <Feather name="share" size={20} color="#52525b" />
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
