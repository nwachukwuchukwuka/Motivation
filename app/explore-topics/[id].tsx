import { Quote, useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
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
import Svg, { Circle, Path, Text as SvgText } from "react-native-svg";

const BookIllustration = () => (
  <Svg width="150" height="150" viewBox="0 0 100 100">
    <Path d="M15 80 L 85 80 L 90 70 L 20 70 Z" fill="#3a4151" />
    <Path d="M20 70 L 90 70 L 90 50 L 20 50 Z" fill="#4a5162" />
    <Path d="M25 55 L 45 55" stroke="#3a4151" strokeWidth="2" />
    <Path d="M25 60 L 65 60" stroke="#3a4151" strokeWidth="2" />
    <Path d="M25 65 L 55 65" stroke="#3a4151" strokeWidth="2" />

    <Path d="M10 50 L 80 50 L 85 40 L 15 40 Z" fill="#3a4151" />
    <Path d="M15 40 L 85 40 L 85 20 L 15 20 Z" fill="#4a5162" />
    <Path d="M20 25 L 40 25" stroke="#3a4151" strokeWidth="2" />
    <Path d="M20 30 L 60 30" stroke="#3a4151" strokeWidth="2" />
    <Path d="M20 35 L 50 35" stroke="#3a4151" strokeWidth="2" />
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

const INITIAL_FAVORITES = [
  {
    id: "1",
    text: "I live by 3 simple rules: Love needs action. Trust needs proof. Sorry needs change.",
    date: "Wed, Nov 12, 2025",
  },
];

const CollectionDetailsScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES);
  const { collections, allQuotes, setQuoteToAdd } = useAppContext();

  const collection = collections.find((c) => c.id === id);

  const quotesInCollection = useMemo(() => {
    if (!collection) return [];
    return allQuotes.filter((quote) => collection.quoteIds.includes(quote.id));
  }, [collection, allQuotes]);

  if (!collection) {
    return (
      <SafeAreaView className="flex-1 bg-[#262e3d] items-center justify-center">
        <Text className="text-white">Collection not found.</Text>
      </SafeAreaView>
    );
  }

    const handleRemoveFavorite = (idToRemove: string) => {
      setFavorites((prev) => prev.filter((fav) => fav.id !== idToRemove));
    };

  const filteredQuotes = useMemo(() => {
    if (!searchQuery) return quotesInCollection;
    return quotesInCollection.filter((fav) =>
      fav.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, quotesInCollection]);

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

  const hasQuotes = collection.quoteIds.length > 0;

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="p-4">
        <View className="flex-row justify-between items-center ">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Feather name="chevron-left" size={28} color="white" />
            <Text className="text-white text-base ml-1">Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold">
            {collection.name}
          </Text>
          <View className="w-16" />
        </View>

        <View className="mt-4 mb-4 flex-row items-center">
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

        {!isSearching && hasQuotes && (
          <TouchableOpacity
            className="bg-white rounded-full py-3 items-center mb-4 mt-4"
            onPress={() => router.push("/explore-topics/show-all-in-feed")}
          >
            <Text className="text-black text-base font-bold">
              Show all in feed
            </Text>
          </TouchableOpacity>
        )}

        {/* <View className="gap-4">
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
        </View> */}
      </View>

      {hasQuotes ? (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
          <View className="gap-4">
            {filteredQuotes.map((fav) => (
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
                    <TouchableOpacity
                      onPress={() => handleAddToCollection(fav)}
                    >
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
      ) : (
        <View className="flex-1 items-center justify-center">
          <BookIllustration />
          <Text className="text-white text-2xl font-bold text-center mt-8">
            You haven't added anything to this collection yet
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CollectionDetailsScreen;
