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

const TopicsScreen = () => {
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
        className={`flex-row justify-between items-center py-4 px-1  ${!isLastItem ? "border-b border-white/5" : ""
          }`}
      >
        <View className="flex-row items-center">
          <Text className="text-white text-lg font-bold tracking-tight">{name}</Text>
          {isLocked && (
            <Feather
              name="lock"
              size={12}
              color="#52525b"
              style={{ marginLeft: 8 }}
            />
          )}
        </View>
        <TouchableOpacity
          disabled={isLocked}
          onPress={() => handleFollowToggle(name)}
          className={`rounded-full px-5 py-1.5 flex-row items-center border ${isFollowing ? "bg-emerald-500 border-emerald-500" : "border-emerald-500/30"
            } ${isLocked ? "opacity-30" : ""}`}
        >
          {isFollowing && (
            <Feather
              name="check"
              size={14}
              color="black"
              style={{ marginRight: 4 }}
            />
          )}
          <Text className={`text-sm font-bold ${isFollowing ? "text-black" : "text-emerald-500"}`}>
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
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5 shadow-lg"
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        {!isSearching && (
          <View className="flex-1 items-center mr-10">
            <Text className="text-white text-xl font-bold tracking-tight">
              Topics you follow
            </Text>
          </View>
        )}
      </View>

      {/* Modern Search Bar */}
      <View className="px-6 mb-6 flex-row items-center">
        <View className="bg-[#111111] rounded-2xl flex-row items-center px-4 py-3.5 flex-1 border border-white/5 shadow-sm">
          <Feather name="search" size={20} color="#10b981" />
          <TextInput
            placeholder="Search topics"
            placeholderTextColor="#52525b"
            className="text-white ml-3 flex-1 font-medium"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsSearching(true)}
          />
          {searchQuery.length > 0 && isSearching && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Feather name="x-circle" size={18} color="#52525b" />
            </TouchableOpacity>
          )}
        </View>
        {isSearching && (
          <TouchableOpacity onPress={handleCancelSearch} className="pl-4">
            <Text className="text-emerald-500 font-bold text-sm">Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6">
          {isSearching ? (
            <View className="bg-[#111111] p-4 rounded-[24px] border border-white/5">
              {filteredResults.map((item, index) => (
                <TopicRow
                  key={item.name}
                  name={item.name}
                  isLocked={item.isLocked}
                  isLastItem={index === filteredResults.length - 1}
                />
              ))}
            </View>
          ) : (
            <>
              <View className="mb-8 bg-[#111111] p-4 rounded-[24px] border border-white/5 shadow-2xl">
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
                  <View className="flex-row justify-between items-end mb-4 px-2">
                    <Text className="text-white text-xl font-bold tracking-tight">
                      {section.title}
                    </Text>
                    <TouchableOpacity>
                      <Text className="text-emerald-500 font-bold text-xs">Follow all</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="bg-[#111111] px-5 py-2 rounded-[24px] border border-white/5">
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

export default TopicsScreen;
