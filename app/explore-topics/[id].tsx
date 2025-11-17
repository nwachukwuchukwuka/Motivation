import { BookIllustration } from "@/components/Illustrations";
import { Quote, useAppContext } from "@/context/context";
import {
    AntDesign,
    Entypo,
    Feather,
    FontAwesome,
    MaterialCommunityIcons,
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
      <SafeAreaView className="flex-1 bg-[#262e3d] items-center justify-center">
        <Text className="text-white">Collection not found.</Text>
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
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="p-4">
        {/* <View className="flex-row justify-between items-center ">
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
          <View className="">

          </View>
        </View> */}

        <View className="flex-row justify-between items-center py-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold">
            {collection.name}
          </Text>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity
              className="border border-gray-500 rounded-full px-4 py-1.5"
              onPress={() => router.push("/free-trial-details-screen")}
            >
              <Text className="text-white">Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="swap-vertical"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </TouchableOpacity>
          </View>
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
            onPress={handleShowInFeed}
          >
            <Text className="text-black text-base font-bold">
              Show all in feed
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {hasQuotes ? (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
          <View className="gap-4">
            {filteredQuotes.map((fav) => {
              const isBookmarked = isQuoteInAnyCollection(fav.id);
              const isQuoteFavorited = isFavorite(fav.id);

              return (
                <View
                  key={fav.id}
                  className="bg-[#3a4151] rounded-2xl p-4 gap-4"
                >
                  <Text className="text-white text-lg leading-relaxed">
                    {fav.text}
                  </Text>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-gray-400">{fav.date}</Text>
                    <View className="flex-row items-center gap-4">
                      <TouchableOpacity onPress={() => toggleFavorite(fav.id)}>
                        {isQuoteFavorited ? (
                          <AntDesign name="heart" size={20} color="white" />
                        ) : (
                          <Feather name="heart" size={20} color="white" />
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleAddToCollection(fav)}
                      >
                        {isBookmarked ? (
                          <FontAwesome
                            name="bookmark"
                            size={20}
                            color="white"
                          />
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
