import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MORE_MOTIVATION = [
  {
    name: "Apple TV",
    Icon: () => <FontAwesome name="apple" size={24} color="white" />,
  },
  {
    name: "Alexa",
    Icon: () => <FontAwesome name="amazon" size={24} color="white" />,
  },
  {
    name: "Slack",
    Icon: () => <FontAwesome name="slack" size={24} color="white" />,
  },
];

const YOU_MAY_LIKE = [
  {
    name: "I am - Positive affirmations",
    icon: "I am",
    bgColor: "#F2D7E7",
    isTextIcon: true,
    textColor: "black",
  },
  {
    name: "Facts - Learn every day",
    icon: "key-outline",
    IconLib: Ionicons,
    bgColor: "#D6B8FF",
  },
  {
    name: "Vocabulary - Learn new wo...",
    icon: "text",
    IconLib: Feather,
    bgColor: "#FFFFFF",
    textColor: "black",
  },
  {
    name: "Moodlight - mood tracker",
    icon: "moon-outline",
    IconLib: Ionicons,
    bgColor: "#424874",
  },
  {
    name: "Loving Kindness",
    icon: "lotus-outline",
    IconLib: Ionicons,
    bgColor: "#F2D7E7",
  },
  {
    name: "Bible Widgets",
    icon: "book-outline",
    IconLib: Ionicons,
    bgColor: "#ADD8E6",
    textColor: "black",
  },
];

const MonkeyTapsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      {/* Header */}
      <View className="flex-row items-center p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-base ml-1">Back</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-white text-3xl font-bold px-4">Monkey Taps</Text>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* More Motivation Section */}
        <View className="mb-8">
          <Text className="text-gray-400 text-sm font-bold tracking-widest mb-3">
            MORE MOTIVATION
          </Text>
          <View className="bg-[#3a4151] rounded-2xl">
            {MORE_MOTIVATION.map((item, index) => (
              <TouchableOpacity
                key={item.name}
                className={`flex-row items-center p-4 ${
                  index !== MORE_MOTIVATION.length - 1
                    ? "border-b border-gray-600"
                    : ""
                }`}
              >
                <View className="w-8 h-8 items-center justify-center mr-4">
                  <item.Icon />
                </View>
                <Text className="text-white text-lg flex-1">{item.name}</Text>
                <Feather name="chevron-right" size={20} color="#969da8" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* You May Like Section */}
        <View>
          <Text className="text-gray-400 text-sm font-bold tracking-widest mb-3">
            IF YOU LIKE THIS APP, YOU MAY LIKE
          </Text>
          <View className="bg-[#3a4151] rounded-2xl">
            {YOU_MAY_LIKE.map((app, index) => {
              const IconComponent = app.IconLib;
              return (
                <TouchableOpacity
                  key={app.name}
                  className={`flex-row items-center p-4 ${
                    index !== YOU_MAY_LIKE.length - 1
                      ? "border-b border-gray-600"
                      : ""
                  }`}
                >
                  <View
                    style={{ backgroundColor: app.bgColor }}
                    className="w-10 h-10 rounded-lg items-center justify-center mr-4"
                  >
                    {app.isTextIcon ? (
                      <Text
                        style={{ color: app.textColor }}
                        className="font-bold text-sm"
                      >
                        {app.icon}
                      </Text>
                    ) : IconComponent ? (
                      <IconComponent
                        name={app.icon as any}
                        size={24}
                        color={app.textColor || "white"}
                      />
                    ) : null}
                  </View>
                  <Text className="text-white text-lg flex-1">{app.name}</Text>
                  <Feather name="chevron-right" size={20} color="#969da8" />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonkeyTapsScreen;
