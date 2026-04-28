import { BookIllustration } from "@/components/Illustrations";
import { Quote, useAppContext } from "@/context/context";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome
} from "@expo/vector-icons";
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

const CollectionDetailsScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const {
    collections,
    allQuotes,
    setQuoteToAdd,
    setFeedQuotes,
    isQuoteInAnyCollection,
    toggleFavorite,
    isFavorite,
  } = useAppContext();

  const collection = collections.find((c) => c.id === id);

  const quotesInCollection = useMemo(() => {
    if (!collection) return [];
    return allQuotes.filter((quote) => collection.quoteIds.includes(quote.id));
  }, [collection, allQuotes]);

  if (!collection) {
    return (
      <SafeAreaView className="flex-1 bg-[#050505] items-center justify-center">
        <Text className="text-zinc-500 font-bold">Collection not found</Text>
      </SafeAreaView>
    );
  }

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

  const handleShowInFeed = () => {
    setFeedQuotes(filteredQuotes);
    router.push("/explore-topics/show-all-in-feed");
  };

  const hasQuotes = collection.quoteIds.length > 0;

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="px-6 py-6">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]"
          >
            <Feather name="chevron-left" size={24} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-lg font-bold tracking-tight flex-1 text-center px-4">
            {collection.name}
          </Text>

          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={() => router.push("/free-trial-details-screen")}
              className="bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20"
            >
              <Text className="text-emerald-400 text-xs font-bold">Folow</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]">
              <Entypo name="dots-three-horizontal" size={20} color="#52525b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Modern Search Bar */}
        <View className="mt-8 mb-2 flex-row items-center">
          <View className="bg-[#111111] rounded-2xl flex-row items-center px-4 py-4 flex-1 border border-[#222222]">
            <Feather name="search" size={18} color="#52525b" />
            <TextInput
              placeholder="Search in collection"
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

        {!isSearching && hasQuotes && (
          <TouchableOpacity
            className="bg-emerald-500 rounded-[20px] py-4 items-center mb-2 mt-6 shadow-lg shadow-emerald-500/40"
            onPress={handleShowInFeed}
          >
            <Text className="text-white text-base font-bold">
              Show all in feed
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {hasQuotes ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
        >
          <View className="gap-5">
            {filteredQuotes.map((fav) => {
              const isBookmarked = isQuoteInAnyCollection(fav.id);
              const isQuoteFavorited = isFavorite(fav.id);

              return (
                <View
                  key={fav.id}
                  className="bg-[#111111] border border-[#222222] rounded-[32px] p-6 shadow-sm"
                >
                  <Text className="text-white text-xl font-bold leading-relaxed mb-6">
                    {fav.text}
                  </Text>

                  <View className="flex-row justify-between items-center border-t border-zinc-800/50 pt-5">
                    <Text className="text-zinc-500 text-xs font-bold">{fav.date}</Text>

                    <View className="flex-row items-center gap-6">
                      <TouchableOpacity onPress={() => toggleFavorite(fav.id)}>
                        {isQuoteFavorited ? (
                          <AntDesign name="heart" size={20} color="#10b981" />
                        ) : (
                          <Feather name="heart" size={20} color="#52525b" />
                        )}
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => handleAddToCollection(fav)}
                      >
                        {isBookmarked ? (
                          <FontAwesome
                            name="bookmark"
                            size={20}
                            color="#10b981"
                          />
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
      ) : (
        <View className="flex-1 justify-center items-center px-10">
          <View className="w-32 h-32 bg-emerald-500/10 rounded-full items-center justify-center border border-emerald-500/20 mb-8">
            <BookIllustration />
          </View>
          <Text className="text-white text-2xl font-bold text-center">
            Empty collection
          </Text>
          <Text className="text-zinc-500 text-center mt-4 text-lg font-medium leading-relaxed">
            You haven't added any quotes to this collection yet.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CollectionDetailsScreen;
