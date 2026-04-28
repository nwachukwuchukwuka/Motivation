import { TOPIC_SECTIONS } from "@/constants/constants";
import { Feather } from "@expo/vector-icons";
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

const TopicsFollowScreen = () => {
  const ALL_TOPICS = TOPIC_SECTIONS.flatMap((section) => section.items);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [followedTopics, setFollowedTopics] = useState(["General"]);

  const handleFollowToggle = (topicName: string) => {
    setFollowedTopics((prev) =>
      prev.includes(topicName)
        ? prev.filter((t) => t !== topicName)
        : [...prev, topicName]
    );
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery) return [];
    return ALL_TOPICS.filter((topic) =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const TopicRow = ({
    name,
    isLocked,
    isLastItem = false,
  }: {
    name: string;
    isLocked: boolean;
    isLastItem?: boolean;
  }) => {
    const isFollowing = followedTopics.includes(name);

    return (
      <View
        className={`flex-row justify-between items-center py-4 px-4 ${!isLastItem ? "border-b border-zinc-800/50" : ""
          }`}
      >
        <View className="flex-row items-center flex-1 pr-4">
          <Text className="text-zinc-100 text-lg font-bold">{name}</Text>
          {isLocked && (
            <View className="ml-3 bg-zinc-900 p-1 rounded-md">
              <Feather name="lock" size={10} color="#52525b" />
            </View>
          )}
        </View>

        <TouchableOpacity
          disabled={isLocked}
          onPress={() => handleFollowToggle(name)}
          className={`rounded-full px-5 py-2 flex-row items-center border ${isFollowing
              ? "bg-emerald-500 border-emerald-500"
              : "border-zinc-700 bg-transparent"
            } ${isLocked ? "opacity-30" : ""}`}
        >
          {isFollowing && (
            <Feather
              name="check"
              size={14}
              color="white"
              style={{ marginRight: 6 }}
            />
          )}
          <Text className={`${isFollowing ? "text-white" : "text-zinc-400"} font-bold text-xs`}>
            {isFollowing ? "Following" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleCancelSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="flex-row justify-between items-center px-6 py-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-zinc-500 text-base font-bold">Close</Text>
        </TouchableOpacity>
        {!isSearching && (
          <Text className="text-white text-lg font-bold tracking-tight">
            Manage Topics
          </Text>
        )}
        <View className="w-12" />
      </View>

      {/* Search Bar */}
      <View className="px-6 mb-6 flex-row items-center">
        <View className="bg-[#111111] rounded-2xl flex-row items-center px-4 py-4 flex-1 border border-[#222222]">
          <Feather name="search" size={18} color="#52525b" />
          <TextInput
            placeholder="Search all topics"
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 pb-20">
          {isSearching ? (
            <View className="bg-[#111111] rounded-[28px] border border-[#222222] overflow-hidden">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <TopicRow
                    key={item.name}
                    name={item.name}
                    isLocked={item.isLocked}
                    isLastItem={index === filteredResults.length - 1}
                  />
                ))
              ) : (
                <View className="py-20 items-center">
                  <Text className="text-zinc-500 font-bold">No topics found</Text>
                </View>
              )}
            </View>
          ) : (
            <>
              <View className="mb-8 bg-[#111111] rounded-[28px] border border-[#222222] overflow-hidden">
                <TopicRow name="General" isLocked={false} isLastItem={false} />
                <TopicRow
                  name="Favorites"
                  isLocked={false}
                  isLastItem={false}
                />
                <TopicRow
                  name="My own quotes"
                  isLocked={true}
                  isLastItem={true}
                />
              </View>

              {TOPIC_SECTIONS.map((section) => (
                <View key={section.title} className="mb-8 ">
                  <View className="flex-row justify-between items-center mb-4 px-2">
                    <Text className="text-white/60 text-xs font-bold">
                      {section.title}
                    </Text>
                    <TouchableOpacity className="bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <Text className="text-emerald-400 text-[11px] font-bold">Follow all</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="bg-[#111111] rounded-[28px] border border-[#222222] overflow-hidden">
                    {section.items.map((item, index) => (
                      <TopicRow
                        key={item.name}
                        name={item.name}
                        isLocked={item.isLocked}
                        isLastItem={index === section.items.length - 1}
                      />
                    ))}
                  </View>
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopicsFollowScreen;
