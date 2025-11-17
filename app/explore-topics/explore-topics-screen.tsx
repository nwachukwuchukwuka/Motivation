import {
  PhoneIllustration,
  PremiumBgIllustration,
} from "@/components/Illustrations";
import UserItemsGrid from "@/components/UserItemsGrid";
import {
  forYou,
  freeToday,
  mostPopular,
  personalGrowth,
  QUOTES
} from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ExploreTopicsScreen = () => {
  const { setFeedQuotes } = useAppContext();

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
  return (
    <View className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-white text-xl">Close</Text>
        </TouchableOpacity>
        <Text className="text-white text-2xl font-semibold ">
          Explore topics
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/explore-topics/topics-follow-screen")}
        >
          <Text className="text-white text-xl">Edit</Text>
        </TouchableOpacity>
      </View>

      <View className="px-4 mt-2 mb-14">
        <View className="bg-[#3a4151] rounded-lg flex-row items-center px-3 py-2.5">
          <Feather name="search" size={20} color="#969da8" />
          <TextInput
            placeholder="Search topics"
            placeholderTextColor="#969da8"
            className="text-white ml-2 flex-1"
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-4 mb-6">
          <View className="bg-white rounded-2xl p-4 flex-row justify-between items-center overflow-hidden">
            <View className="flex-1">
              <Text className="text-black text-lg font-bold">
                Unlock all topics
              </Text>
              <Text className="text-gray-600 text-sm pr-20">
                Browse topics and follow them to customize your feed
              </Text>
            </View>
            <View className="-mr-8 -mt-4">
              <PhoneIllustration />
            </View>
          </View>
        </View>

        <UserItemsGrid />

        {/* <View className="flex-row flex-wrap px-4 mb-6">
          {userItems.map((item, index) => (
            <Pressable
              key={item.name}
              className="w-1/2 p-2"
              onPress={item.onPress}
            >
              <View className="bg-[#3a4151] rounded-2xl p-4 h-24 justify-between">
                <Text className="text-white font-semibold">{item.name}</Text>
                <View className="items-end">
                  <Feather name={item.icon as any} size={24} color="#969da8" />
                  {item.isLocked && (
                    <Feather
                      name="lock"
                      size={12}
                      color="#969da8"
                      className="absolute -bottom-1 -left-1"
                    />
                  )}
                </View>
              </View>
            </Pressable>
          ))}
        </View> */}

        <View className="px-4 mb-6">
          <Text className="text-white text-xl font-bold mb-3">
            Most popular
          </Text>
          {mostPopular.map((item) => {
            const IconComponent = item.lib;
            return (
              <Pressable
                key={item.name}
                className="bg-[#3a4151] rounded-2xl p-4 flex-row items-center justify-between mb-3"
                // onPress={() => router.push("/free-trial-details-screen")}
                onPress={() => handleItemPress(item)}
              >
                <View className="flex-row items-center">
                  <IconComponent
                    name={item.icon as any}
                    size={24}
                    color="#969da8"
                  />
                  <Text className="text-white font-semibold ml-4">
                    {item.name}
                  </Text>
                </View>
                <Feather name="lock" size={16} color="#969da8" />
              </Pressable>
            );
          })}
        </View>

        <View className="px-4 mb-6">
          <Text className="text-white text-xl font-bold mb-3">For you</Text>
          {forYou.map((item) => {
            const IconComponent = item.lib;
            return (
              <Pressable
                key={item.name}
                className="bg-[#3a4151] rounded-2xl p-4 flex-row items-center justify-between mb-3"
                onPress={() => handleItemPress(item)}
              >
                <View className="flex-row items-center">
                  <IconComponent
                    name={item.icon as any}
                    size={24}
                    color="#969da8"
                  />
                  <Text className="text-white font-semibold ml-4">
                    {item.name}
                  </Text>
                </View>
                <Feather name="lock" size={16} color="#969da8" />
              </Pressable>
            );
          })}
        </View>

        <View className="px-4 mb-6">
          <Text className="text-white text-xl font-bold mb-3">Free today</Text>
          {freeToday.map((item) => {
            const IconComponent = item.lib;
            return (
              <Pressable
                key={item.name}
                className="bg-[#3a4151] rounded-2xl p-4 flex-row items-center justify-between mb-3"
                // onPress={() => handleItemPress(item)}
                onPress={() => handleFreeToday(item)}
              >
                <View className="flex-row items-center">
                  <IconComponent
                    name={item.icon as any}
                    size={24}
                    color="#969da8"
                  />
                  <Text className="text-white font-semibold ml-4">
                    {item.name}
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color="#969da8" />
              </Pressable>
            );
          })}
        </View>

        <View className="px-4 mb-20">
          <Text className="text-white text-xl font-bold mb-3">
            Personal growth
          </Text>
          {personalGrowth.map((item) => {
            const IconComponent = item.lib;
            return (
              <Pressable
                key={item.name}
                className="bg-[#3a4151] rounded-2xl p-4 flex-row items-center justify-between mb-3"
                onPress={() => handleItemPress(item)}
              >
                <View className="flex-row items-center">
                  <IconComponent
                    name={item.icon as any}
                    size={24}
                    color="#969da8"
                  />
                  <Text className="text-white font-semibold ml-4">
                    {item.name}
                  </Text>
                </View>
                <Feather name="lock" size={16} color="#969da8" />
              </Pressable>
            );
          })}
        </View>
        <View className="absolute bottom-0 left-0 right-0 items-center">
          <PremiumBgIllustration />
          <View className="items-center p-6 w-full">
            <Text className="text-white text-xl font-bold">Go Premium</Text>
            <Text className="text-[#969da8] mt-1">Unlock all topics</Text>
            <TouchableOpacity className="bg-white w-full py-4 rounded-full items-center justify-center mt-6">
              <Text className="text-black text-lg font-bold">Unlock all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreTopicsScreen;
