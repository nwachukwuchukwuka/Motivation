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
        className={`flex-row justify-between items-center py-3  ${
          !isLastItem ? "border-b border-b-[#262e3d]" : ""
        }`}
      >
        <View className="flex-row items-center">
          <Text className="text-white text-lg">{name}</Text>
          {isLocked && (
            <Feather
              name="lock"
              size={14}
              color="#969da8"
              style={{ marginLeft: 8 }}
            />
          )}
        </View>
        <TouchableOpacity
          disabled={isLocked}
          onPress={() => handleFollowToggle(name)}
          className={`rounded-full px-4 py-1.5 flex-row items-center border ${
            isFollowing ? "border-white" : "border-[#969da8]"
          } ${isLocked ? "opacity-50" : ""}`}
        >
          {isFollowing && (
            <Feather
              name="check"
              size={16}
              color="white"
              style={{ marginRight: 4 }}
            />
          )}
          <Text className="text-white font-semibold">
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
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-white text-lg">Close</Text>
        </TouchableOpacity>
        {!isSearching && (
          <Text className="text-white text-xl font-semibold">
            Topics you follow
          </Text>
        )}
        <View className="w-12" />
      </View>

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

      <ScrollView>
        <View className="px-4">
          {isSearching ? (
            <View className="bg-[#3a4151] p-3 rounded-lg">
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
              <View className="mb-6 bg-[#3a4151] p-3 rounded-lg">
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
                <View
                  key={section.title}
                  className="mb-6 bg-[#3a4151] p-3 rounded-lg"
                >
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-white text-xl font-bold">
                      {section.title}
                    </Text>
                    <TouchableOpacity>
                      <Text className="text-[#969da8]">Follow all</Text>
                    </TouchableOpacity>
                  </View>
                  {section.items.map((item, index) => (
                    <TopicRow
                      key={item.name}
                      name={item.name}
                      isLocked={item.isLocked}
                      isLastItem={index === section.items.length - 1}
                    />
                  ))}
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
