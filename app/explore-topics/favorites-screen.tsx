import { Quote, useAppContext } from "@/context/context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
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
import Svg, {
    Defs,
    Path,
    Rect,
    Stop,
    LinearGradient as SvgGradient,
} from "react-native-svg";

const INITIAL_FAVORITES = [
  {
    id: "1",
    text: "I live by 3 simple rules: Love needs action. Trust needs proof. Sorry needs change.",
    date: "Wed, Nov 12, 2025",
  },
  {
    id: "2",
    text: "The best way to predict the future is to create it.",
    date: "Tue, Oct 28, 2025",
  },
  {
    id: "3",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    date: "Mon, Sep 15, 2025",
  },
];

const ShelfIllustration = () => (
  <Svg width="200" height="200" viewBox="0 0 150 150">
    <Defs>
      <SvgGradient id="gradHeart" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0%" stopColor="#C97EFF" />
        <Stop offset="100%" stopColor="#F5A1BE" />
      </SvgGradient>
    </Defs>
    <Rect x="10" y="120" width="130" height="5" fill="#3a4151" />
    <Path d="M40 100 C 35 110, 55 110, 50 100 V 120 H 40 Z" fill="#4a5162" />
    <Path
      d="M45 100 C 35 90, 40 80, 45 70"
      stroke="#4a5162"
      strokeWidth="2"
      fill="none"
    />
    <Rect
      x="60"
      y="60"
      width="60"
      height="60"
      fill="#1E1E2F"
      stroke="#3a4151"
      strokeWidth="3"
    />
    <Path
      fill="url(#gradHeart)"
      d="M90 80 C 80 70, 100 70, 90 80 L 90 95 L 90 95 C 80 105, 100 105, 90 95 Z"
      transform="translate(0, -5)"
    />
    <Path d="M86 87 l4 4 l8 -8" stroke="white" strokeWidth="1.5" fill="none" />
  </Svg>
);

const FavoritesScreen = () => {
  const router = useRouter();

  //   const [favorites, setFavorites] = useState(INITIAL_FAVORITES);
  //   const { allQuotes } = useAppContext(); // Get quotes from the context
  const { allQuotes, favoriteQuoteIds, toggleFavorite, setQuoteToAdd } =
    useAppContext();

  const favoriteQuotes = useMemo(() => {
    // Filter the master list of all quotes to find only those whose IDs are in our favorites list
    return allQuotes.filter((quote) => favoriteQuoteIds.includes(quote.id));
  }, [allQuotes, favoriteQuoteIds]);

  // The 'handleRemoveFavorite' function now just calls the context function
  const handleRemoveFavorite = (idToRemove: string) => {
    toggleFavorite(idToRemove);
  };

  const [favorites, setFavorites] = useState(allQuotes);

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  //   const handleRemoveFavorite = (idToRemove: string) => {
  //     setFavorites((prev) => prev.filter((fav) => fav.id !== idToRemove));
  //   };

  const filteredFavorites = useMemo(() => {
    if (!searchQuery) return favorites;
    return favorites.filter((fav) =>
      fav.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, favorites]);

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

  if (favorites.length === 0) {
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
            onPress={() => router.push("/explore-topics/show-all-in-feed")}
          >
            <Text className="text-black text-base font-bold">
              Show all in feed
            </Text>
          </TouchableOpacity>
        )}

        <View className="gap-4">
          {filteredFavorites.map((fav) => (
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
                    <Feather
                      name="heart"
                      size={20}
                      color="white"
                      fill="white"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleAddToCollection(fav)}>
                    <Feather name="bookmark" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="share" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
