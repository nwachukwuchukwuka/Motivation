import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, {
  Defs,
  Path,
  Rect,
  Stop,
  LinearGradient as SvgGradient,
  Text as SvgText,
} from "react-native-svg";

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
const FlameIcon = () => (
  <View className="items-center justify-center w-12 h-12">
    <Svg width="100%" height="100%" viewBox="0 0 24 24">
      <Defs>
        <SvgGradient id="gradFlame" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#C97EFF" />
          <Stop offset="1" stopColor="#F5A1BE" />
        </SvgGradient>
      </Defs>
      <Path
        fill="url(#gradFlame)"
        d="M12 2c2.4 1.6 3.8 4.3 3.8 7.2 0 2.4-1.1 4.6-2.9 6.2 -1.4 1.2-3.4 2.6-3.4 4.6h-1c0-2-2-3.4-3.4-4.6C3.3 13.8 2.2 11.6 2.2 9.2c0-2.9 1.4-5.6 3.8-7.2 1.5-.9 3.2-1.2 4-1.2s2.5.3 4 1.2z M12 2c0 0 2-2 3 0s-1 4-1 4s2-2 3 0s-2 5-2 5"
        transform="translate(2, 0)"
      />
      <SvgText
        x="12"
        y="15"
        textAnchor="middle"
        fontWeight="bold"
        fontSize="10"
        fill="white"
      >
        1
      </SvgText>
    </Svg>
  </View>
);

const DAYS = ["Th", "Fr", "Sa", "Su", "Mo", "Tu", "We"];

const SettingsScreen = () => {
  const router = useRouter();

  const customizeItems = [
    {
      name: "Topics you follow",
      icon: "hash",
      IconLib: Feather,
      onPress: () => router.push("/settings/topics-screen"),
    },
    {
      name: "Reminders",
      icon: "bell",
      IconLib: Feather,
      onPress: () => router.push("/settings/reminders-screen"),
    },
    {
      name: "App icon",
      icon: "apps",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/app-icon"),
    },
    {
      name: "Widgets",
      icon: "extension-puzzle-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/widgets-screen"),
    },
    {
      name: "Watch",
      icon: "watch-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/watch-screen"),
    },
    {
      name: "Self-Growth bundle",
      icon: "leaf-outline",
      IconLib: Ionicons,
      onPress: () => router.push("/settings/bundle-screen"),
    },
  ];

  const contentItems = [
    { name: "Favorites", icon: "heart-outline", lib: MaterialCommunityIcons },
    {
      name: "Collections",
      icon: "bookmark-outline",
      lib: MaterialCommunityIcons,
      // onPress: () => router.push("/collections"),
    },
    { name: "My quotes", icon: "edit-3", lib: Feather },
    {
      name: "History",
      icon: "shuffle-variant",
      lib: MaterialCommunityIcons,
      isLocked: true,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center px-4 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="x" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-base">Settings</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text className="text-white text-3xl font-bold px-4 mt-2">
          Motivation
        </Text>

        <View className="px-4 mt-6">
          <View className="bg-white rounded-2xl p-4 flex-row justify-between items-center overflow-hidden">
            <View className="flex-1">
              <Text className="text-black text-lg font-bold">
                Upgrade to Premium
              </Text>
              <Text className="text-gray-600 text-sm mt-1 max-w-[180px]">
                Access all categories, quotes, themes, and remove ads!
              </Text>
            </View>
            <View className="-mr-10 -my-4">
              <PhoneIllustration />
            </View>
          </View>
        </View>

        <View className="px-4 mt-4">
          <View className="bg-[#3a4151] rounded-2xl p-4 flex-row items-center">
            <FlameIcon />
            <View className="flex-1 ml-4">
              <View className="flex-row justify-between items-center">
                <Text className="text-white font-bold text-lg">
                  Your streak
                </Text>
                <View className="flex-row items-center space-x-4">
                  <TouchableOpacity>
                    <Feather name="share-2" size={20} color="#969da8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="more-vertical" size={20} color="#969da8" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row justify-between mt-2">
                {DAYS.map((day, index) => (
                  <View key={index} className="items-center">
                    <Text className="text-[#969da8] text-sm">{day}</Text>
                    <View
                      className={`w-6 h-6 rounded-full mt-1 items-center justify-center ${
                        index === 0 ? "bg-white" : "bg-[#4a5162]"
                      }`}
                    >
                      {index === 0 && (
                        <Feather name="check" size={14} color="black" />
                      )}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 mt-6">
          <Text className="text-white text-xl font-bold mb-2">
            Customize the app
          </Text>
          <View className="flex-row flex-wrap -mx-2">
            {customizeItems.map((item) => {
              const IconComponent = item.IconLib;
              return (
                <View key={item.name} className="w-1/2 p-2">
                  <TouchableOpacity
                    onPress={item.onPress}
                    className="bg-[#3a4151] rounded-2xl aspect-square p-4 justify-between"
                  >
                    <Text className="text-white font-semibold text-base">
                      {item.name}
                    </Text>
                    <View className="items-end">
                      <IconComponent
                        name={item.icon as any}
                        size={48}
                        color="#969da8"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        <View className="px-4 mt-6">
          <Text className="text-white text-xl font-bold mb-2">My content</Text>
          <View className="flex-row flex-wrap -m-2">
            {contentItems.map((item) => {
              const IconComponent = item.lib;
              return (
                <View key={item.name} className="w-1/2 p-2">
                  <TouchableOpacity
                    className="bg-[#3a4151] rounded-2xl p-4 flex-row justify-between items-start h-24"
                    onPress={() => router.push("/")}
                  >
                    <Text className="text-white font-semibold">
                      {item.name}
                    </Text>
                    <View>
                      <IconComponent
                        name={item.icon as any}
                        size={24}
                        color="#969da8"
                      />
                      {item.isLocked && (
                        <Feather
                          name="lock"
                          size={12}
                          color="#969da8"
                          className="absolute -bottom-1 -right-1"
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SettingsScreen;
