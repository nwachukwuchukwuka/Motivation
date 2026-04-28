import {
  PhoneIllustration
} from "@/components/Illustrations";
import UserItemsGrid from "@/components/UserItemsGrid";
import {
  ALL_EXPLORE_TOPICS,
  forYou,
  freeToday,
  mostPopular,
  personalGrowth,
  QUOTES,
} from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ExploreTopicsScreen = () => {
  const insets = useSafeAreaInsets();
  const { setFeedQuotes } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    return ALL_EXPLORE_TOPICS.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleFreeToday = (item: { name: string; isLocked: boolean }) => {
    setFeedQuotes(QUOTES);
    router.push({
      pathname: "/explore-topics/topic-details-screen",
      params: { topicName: item.name },
    });
  };

  const handleItemPress = (item: { name: string; isLocked: boolean }) => {
    if (item.isLocked) {
      router.push("/free-trial-details-screen");
      return;
    }
  };

  const handleCancelSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    Keyboard.dismiss();
  };

  const SectionHeader = ({ title }: { title: string }) => (
    <View className="px-6 mb-2 mt-8">
      <Text className="text-white/60 text-xs font-bold">{title}</Text>
    </View>
  );

  const TopicItem = ({ item, onPress }: { item: any, onPress: () => void }) => {
    const IconComponent = item.lib;
    return (
      <Pressable
        onPress={onPress}
        className="w-1/2 p-2"
      >
        <View className="bg-[#111111] border border-[#222222] rounded-[28px] p-5 h-40 justify-between">
          <View className="w-12 h-12 bg-emerald-500/10 rounded-2xl items-center justify-center border border-emerald-500/20">
            <IconComponent
              name={item.icon as any}
              size={24}
              color="#10b981"
            />
          </View>

          <View className="flex-row justify-between items-end">
            <Text className="text-gray-200 font-bold text-base flex-1 pr-2 leading-tight">
              {item.name}
            </Text>
            {item.isLocked ? (
              <View className="bg-zinc-900 p-1.5 rounded-lg">
                <Feather name="lock" size={12} color="#52525b" />
              </View>
            ) : (
              <Feather name="chevron-right" size={16} color="#3f3f46" />
            )}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="bg-[#050505] border-b border-[#111111]">
        <View className="flex-row justify-between items-center px-5 py-5">
          <TouchableOpacity onPress={() => router.back()} className="w-20">
            <Text className="text-zinc-500 text-base font-bold">Close</Text>
          </TouchableOpacity>

          <Text className="text-white text-lg font-bold">Explore</Text>

          <TouchableOpacity
            onPress={() => router.push("/explore-topics/topics-follow-screen")}
            className="w-20 items-end"
          >
            <View className="bg-emerald-500/20 px-4 py-2 rounded-full">
              <Text className="text-emerald-400 text-xs font-bold">Edit</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="px-5 pb-5">
          <View className="bg-[#111111] rounded-2xl flex-row items-center px-5 py-4 border border-[#222222]">
            <Feather name="search" size={20} color="#52525b" />
            <TextInput
              placeholder="Find your focus..."
              placeholderTextColor="#3f3f46"
              className="text-white ml-3 flex-1 text-base font-medium"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onFocus={() => setIsSearching(true)}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons name="close-circle" size={22} color="#3f3f46" />
              </TouchableOpacity>
            )}
            {isSearching && (
              <TouchableOpacity onPress={handleCancelSearch} className="ml-4 pl-4 border-l border-zinc-800">
                <Text className="text-emerald-500 font-bold text-sm">DONE</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner Section - Emerald Gradient */}
        <Animated.View entering={FadeIn.delay(200)} className="px-5 mt-6 mb-2">
          <LinearGradient
            colors={["#10b981", "#059669"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 30,
              padding: 28,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              elevation: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 20,
            }}
          >
            <View className="flex-1 z-10">
              <Text className="text-white text-2xl font-bold leading-tight">
                Unlock Everything
              </Text>
              <Text className="text-white/70 text-sm mt-1 font-bold">
                Get full access to all premium topics.
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/free-trial-details-screen")}
                className="bg-white self-start px-8 py-3 rounded-2xl mt-5 shadow-xl"
              >
                <Text className="text-emerald-700 text-sm font-bold">Upgrade</Text>
              </TouchableOpacity>
            </View>
            <View className="absolute -right-10 -bottom-8 opacity-30">
              <PhoneIllustration />
            </View>
          </LinearGradient>
        </Animated.View>

        {isSearching ? (
          <Animated.View entering={FadeInDown.duration(400)}>
            <SectionHeader title="Search Results" />
            <View className="flex-row flex-wrap px-3">
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <TopicItem
                    key={item.name}
                    item={item}
                    onPress={() => item.isLocked ? handleItemPress(item) : handleFreeToday(item)}
                  />
                ))
              ) : (
                <View className="w-full py-24 items-center">
                  <View className="w-24 h-24 bg-zinc-900 rounded-full items-center justify-center border border-zinc-800 mb-6">
                    <Feather name="search" size={40} color="#27272a" />
                  </View>
                  <Text className="text-zinc-500 text-center font-bold text-lg">No matches found</Text>
                </View>
              )}
            </View>
          </Animated.View>
        ) : (
          <View>
            <UserItemsGrid />

            <SectionHeader title="Most Popular" />
            <View className="flex-row flex-wrap px-3">
              {mostPopular.map((item) => (
                <TopicItem key={item.name} item={item} onPress={() => handleItemPress(item)} />
              ))}
            </View>

            <SectionHeader title="For You" />
            <View className="flex-row flex-wrap px-3">
              {forYou.map((item) => (
                <TopicItem key={item.name} item={item} onPress={() => handleItemPress(item)} />
              ))}
            </View>

            <SectionHeader title="Free Today" />
            <View className="flex-row flex-wrap px-3">
              {freeToday.map((item) => (
                <TopicItem key={item.name} item={item} onPress={() => handleFreeToday(item)} />
              ))}
            </View>

            <SectionHeader title="Personal Growth" />
            <View className="flex-row flex-wrap px-3">
              {personalGrowth.map((item) => (
                <TopicItem key={item.name} item={item} onPress={() => handleItemPress(item)} />
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {!isSearching && (
        <View
          style={{ paddingBottom: insets.bottom + 25 }}
          className="absolute -bottom-14 left-0 right-0 px-5"
        >
          <LinearGradient
            colors={["#0a0a0a", "#050505"]}
            style={{
              borderRadius: 35,
              padding: 28,
              borderWidth: 1,
              borderColor: "#222222",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 15 },
              shadowOpacity: 0.4,
              shadowRadius: 30,
            }}
          >

            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-white text-xl font-bold">Go Premium</Text>
                <Text className="text-zinc-600 text-sm font-bold mt-0.5">Full Access</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/free-trial-details-screen")}
                className="bg-emerald-500 px-8 py-4 rounded-2xl shadow-lg"
              >
                <Text className="text-white font-semibold text-base">Unlock</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

export default ExploreTopicsScreen;
