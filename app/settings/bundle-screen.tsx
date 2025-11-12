import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BUNDLE_APPS = [
  {
    name: "Motivation",
    description: "Reminders to think positive",
    icon: "”",
    bgColor: "#4A4A4A",
    status: "Installed",
  },
  {
    name: "I am",
    description: "Affirmations to empower daily",
    icon: "I am",
    bgColor: "#FFFFFF",
    textColor: "#000000",
    isTextIcon: true,
  },
  {
    name: "Loving Kindness",
    description: "Daily meditation mantras",
    icon: "lotus-outline",
    IconLib: Ionicons,
    bgColor: "#F2D7E7",
  },
  {
    name: "Moodlight",
    description: "Mood tracker & self-help",
    icon: "moon-outline",
    IconLib: Ionicons,
    bgColor: "#424874",
  },
  {
    name: "Vocabulary",
    description: "Improve vocabulary every day",
    icon: "text",
    IconLib: Feather,
    bgColor: "#DCD6F7",
  },
  {
    name: "Facts",
    description: "Learn new interesting trivia",
    icon: "bulb-outline",
    IconLib: Ionicons,
    bgColor: "#F4D160",
  },
];

const BundleScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#262e3d]">
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center px-4 py-2">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Feather name="chevron-left" size={28} color="white" />
            <Text className="text-white text-base ml-1">Motivation</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          <View className="items-center px-6 mt-4">
            <Text className="text-white text-3xl font-bold text-center">
              Your Self-Growth Essentials bundle
            </Text>
            <Text className="text-white text-4xl font-extrabold text-center mt-1 text-purple-400">
              with 50% off
            </Text>
            <Text className="text-gray-400 text-base text-center mt-4">
              The complete mental well-being and growth toolkit in one app
              bundle
            </Text>
          </View>

          {/* Pricing Card */}
          <View className="bg-[#3a4151] rounded-2xl mx-4 mt-8 p-6 items-center relative overflow-hidden">
            <View className="absolute -top-4 bg-purple-400 rounded-full px-4 py-1">
              <Text className="text-white font-bold">Just for you</Text>
            </View>
            <Text className="text-gray-400 text-lg line-through mt-4">
              ₦459,800.00
            </Text>
            <Text className="text-white text-3xl font-bold mt-1">
              Now ₦229,900.00/year
            </Text>
          </View>

          {/* App List Section */}
          <View className="mt-8 px-4">
            <Text className="text-white text-xl font-bold mb-4">
              Enjoy all apps in one subscription!
            </Text>
            <View className="space-y-3">
              {BUNDLE_APPS.map((app) => {
                const IconComponent = app.IconLib;
                return (
                  <View
                    key={app.name}
                    className="bg-[#3a4151] rounded-2xl p-4 flex-row items-center"
                  >
                    <View
                      style={{ backgroundColor: app.bgColor }}
                      className="w-12 h-12 rounded-lg items-center justify-center mr-4"
                    >
                      {app.isTextIcon ? (
                        <Text
                          style={{ color: app.textColor }}
                          className="font-bold text-lg"
                        >
                          {app.icon}
                        </Text>
                      ) : IconComponent ? (
                        <IconComponent
                          name={app.icon as any}
                          size={28}
                          color={app.textColor || "white"}
                        />
                      ) : (
                        <Text
                          style={{ color: app.textColor || "white" }}
                          className="text-3xl font-bold"
                        >
                          {app.icon}
                        </Text>
                      )}
                    </View>
                    <View className="flex-1">
                      <Text className="text-white text-lg font-bold">
                        {app.name}
                      </Text>
                      <Text className="text-gray-400 text-sm">
                        {app.description}
                      </Text>
                    </View>
                    {app.status === "Installed" && (
                      <View className="border border-gray-500 rounded-full px-3 py-1">
                        <Text className="text-gray-400 font-semibold text-xs">
                          {app.status}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>

          {/* App Store Ratings */}
          <View className="items-center mt-8 px-4">
            <View className="flex-row items-center space-x-4">
              <FontAwesome name="apple" size={20} color="gray" />
              <Text className="text-gray-400 text-xs font-semibold">
                App of the Day
              </Text>
              <FontAwesome name="apple" size={20} color="gray" />
              <Text className="text-gray-400 text-xs font-semibold">
                Editors' Choice
              </Text>
            </View>
            <View className="flex-row items-center space-x-1 mt-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FontAwesome key={i} name="star" size={16} color="#FFD700" />
                ))}
            </View>
            <Text className="text-gray-400 text-sm mt-2">12.3K+ reviews</Text>
          </View>
        </ScrollView>

        <View className="absolute bottom-0 left-0 right-0 p-4 bg-[#262e3d] border-t border-t-gray-700">
          <View className="flex-row justify-center space-x-6 mb-4">
            <TouchableOpacity>
              <Text className="text-gray-400">Restore purchase</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-400">Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-400">Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-center text-gray-400 mb-2">
            <Text className="line-through">₦459,800.00</Text> now just{" "}
            <Text className="text-white font-bold">₦229,900.00/year</Text>
          </Text>
          <TouchableOpacity>
            <LinearGradient
              colors={["#C97EFF", "#8A2BE2"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="rounded-full py-4 items-center justify-center"
            >
              <Text className="text-white text-lg font-bold">
                Claim my offer
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BundleScreen;
