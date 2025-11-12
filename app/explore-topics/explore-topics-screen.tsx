import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
import Svg, {
  Circle,
  Defs,
  Rect,
  Stop,
  LinearGradient as SvgGradient,
} from "react-native-svg";

const userItems = [
  {
    name: "Favorites",
    icon: "heart",
    isLocked: false,
    onPress: () => router.push("./favorites-screen"),
  },
  {
    name: "My collections",
    icon: "bookmark",
    isLocked: false,
    // onPress: () => router.push("./collections-screen"),
    onPress: () =>
      router.push({
        pathname: "./collections-screen",
        params: { display: "collections" },
      }),
  },
  {
    name: "My own quotes",
    icon: "edit-3",
    isLocked: false,
    onPress: () => router.push("./user-quotes"),
  },
  {
    name: "Recent quotes",
    icon: "shuffle",
    isLocked: true,
    onPress: () => router.push("/free-trial-details-screen"),
  },
];

const mostPopular = [
  {
    name: "Mental toughness",
    icon: "brain",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
  { name: "Feeling blessed", icon: "sunny", lib: Ionicons, isLocked: true },
  { name: "Self-worth", icon: "sparkles", lib: Ionicons, isLocked: true },
  { name: "Bible verses", icon: "bible", lib: FontAwesome5, isLocked: true },
];

const forYou = [
  { name: "Listening", icon: "ear", lib: Ionicons, isLocked: true },
  { name: "Family", icon: "home", lib: Feather, isLocked: true },
  { name: "Fake people", icon: "people", lib: Ionicons, isLocked: true }, // Corrected name
  {
    name: "Honesty",
    icon: "shield-check",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
  {
    name: "Setting boundaries",
    icon: "fence",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
];

const freeToday = [
  { name: "Finding purpose", icon: "compass", lib: Feather, isLocked: false },
  {
    name: "Mental health",
    icon: "head-side-virus",
    lib: FontAwesome5,
    isLocked: false,
  },
  { name: "Life balance", icon: "git-compare", lib: Feather, isLocked: false },
  { name: "Start your day", icon: "sunrise", lib: Feather, isLocked: false },
  { name: "Resilience", icon: "shield", lib: Feather, isLocked: false },
  { name: "Business", icon: "trending-up", lib: Feather, isLocked: false },
];

const personalGrowth = [
  { name: "Growth", icon: "leaf", lib: Ionicons, isLocked: true },
  {
    name: "Self-love",
    icon: "hand-heart",
    lib: MaterialCommunityIcons,
    isLocked: true,
  },
  { name: "New beginnings", icon: "sun", lib: Feather, isLocked: true },
  { name: "Love yourself", icon: "heart", lib: Feather, isLocked: true },
  { name: "Gratitude", icon: "pray", lib: FontAwesome5, isLocked: true },
  {
    name: "Moving on",
    icon: "arrow-right-circle",
    lib: Feather,
    isLocked: true,
  },
];

const PhoneIllustration = () => (
  <Svg width="100" height="70" viewBox="0 0 100 70">
    <Defs>
      <SvgGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0%" stopColor="#C97EFF" />
        <Stop offset="100%" stopColor="#F5A1BE" />
      </SvgGradient>
    </Defs>
    <Rect
      x="10"
      y="5"
      width="80"
      height="60"
      rx="10"
      fill="#3a4151"
      transform="rotate(15 50 35)"
    />
    <Rect
      x="15"
      y="10"
      width="70"
      height="50"
      rx="5"
      fill="url(#grad)"
      transform="rotate(15 50 35)"
    />
  </Svg>
);

const PremiumBgIllustration = () => (
  <View className="absolute bottom-0 left-0 right-0 h-64">
    <Svg
      height="100%"
      width="100%"
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <Defs>
        <SvgGradient id="skyGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <Stop offset="0%" stopColor="#4a5162" stopOpacity="0" />
          <Stop offset="100%" stopColor="#3a4151" stopOpacity="1" />
        </SvgGradient>
      </Defs>
      <Rect x="0" y="0" width="300" height="200" fill="url(#skyGrad)" />
      <Circle cx="150" cy="180" r="100" fill="#EAE5E0" fillOpacity="0.1" />
      <Circle cx="150" cy="190" r="100" fill="#262e3d" />
    </Svg>
  </View>
);

const ExploreTopicsScreen = () => {
  const handleItemPress = (item: { name: string; isLocked: boolean }) => {
    if (item.isLocked) {
      router.push("/free-trial-details-screen");
    }
    // else {
    //   if (
    //     ["Favorites", "My collections", "My own quotes"].includes(item.name)
    //   ) {
    //     router.push({
    //       pathname: "/explore-topics/user-item-screen",
    //       params: { category: item.name },
    //     });
    //   } else {
    //     router.push({
    //       pathname: "/explore-topics/topic-details-screen",
    //       params: { topicName: item.name },
    //     });
    //   }
    // }
  };

  return (
    <View className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-4">
        <TouchableOpacity>
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

        <View className="flex-row flex-wrap px-4 mb-6">
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
        </View>

        {/* <View className="flex-row flex-wrap px-4 mb-6">
          {userItems.map((item) => (
            <Pressable
              key={item.name}
              className="w-1/2 p-2"
              onPress={item.onPress} // ✅ Now uses the onPress function from userItems
            >
              <View className="bg-[#262e3d] rounded-2xl p-4 h-24 justify-between">
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
