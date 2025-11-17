import { BoxIllustration } from "@/components/Illustrations";
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

const UserQuotesScreen = () => {
  const router = useRouter();
  const {
    userQuotes,
    toggleFavorite,
    isFavorite,
    setQuoteToAdd,
    isQuoteInAnyCollection,
    setFeedQuotes,
  } = useAppContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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

  const filteredUserQuotes = useMemo(() => {
    if (!searchQuery) return userQuotes;
    return userQuotes.filter((q) =>
      q.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, userQuotes]);

  const handleCancelSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    Keyboard.dismiss();
  };

  const handleShowInFeed = () => {
    setFeedQuotes(userQuotes);
    router.push("/explore-topics/show-all-in-feed");
  };
  if (userQuotes.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#262e3d]">
        <View className="flex-row justify-between items-center p-4 pl-2 py-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/explore-topics/add-quote")}
          >
            <Text className="text-white text-xl">Add </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-white text-2xl font-bold px-4 mt-4">
          Your own quotes
        </Text>

        <View className="flex-1 justify-center items-center p-6 -mt-16">
          <BoxIllustration />
          <Text className="text-white text-2xl font-bold text-center mt-8">
            You don't have any quotes yet
          </Text>
        </View>
        <View className="p-4 border-t border-t-gray-700">
          <TouchableOpacity
            onPress={() => router.push("/explore-topics/add-quote")}
            className="bg-white rounded-full w-full py-4 items-center justify-center"
          >
            <Text className="text-black font-bold text-lg">Add quote</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      {!isSearching && (
        <View className="flex-row justify-between items-center p-4 pl-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold">Your own quotes</Text>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="swap-vertical"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="more-vertical" size={24} color="white" />
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

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      >
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
          {filteredUserQuotes.map((quote) => {
            const isQuoteFavorited = isFavorite(quote.id);
            const isBookmarked = isQuoteInAnyCollection(quote.id);

            return (
              <View
                key={quote.id}
                className="bg-[#3a4151] rounded-2xl p-4 gap-4"
              >
                <Text className="text-white text-lg leading-relaxed">
                  {quote.text}
                </Text>
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-gray-400 font-semibold">
                      -{quote.author}
                    </Text>
                    <Text className="text-gray-500 text-xs mt-1">
                      {quote.date}
                    </Text>
                  </View>

                  <View className="flex-row items-center gap-4">
                    <TouchableOpacity onPress={() => toggleFavorite(quote.id)}>
                      {isQuoteFavorited ? (
                        <AntDesign name="heart" size={20} color="white" />
                      ) : (
                        <Feather name="heart" size={20} color="white" />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleAddToCollection(quote)}
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

      <View className="absolute bottom-0 left-0 right-0 p-4 bg-[#262e3d] border-t border-t-gray-700">
        <TouchableOpacity
          onPress={() => router.push("/explore-topics/add-quote")}
          className="bg-white rounded-full w-full py-4 items-center justify-center"
        >
          <Text className="text-black font-bold text-base">Add quote</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserQuotesScreen;
