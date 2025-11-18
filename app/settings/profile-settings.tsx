import { SETTINGS_DATA } from "@/constants/constants";
import {
  AntDesign,
  Feather,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileSettings = () => {
  const router = useRouter();

  const appVersion = "6.9.0";
  const fullUserId = "DF249E4E-C593-498C-B02A-1234567890AB";
  const displayUserId = `${fullUserId.substring(0, 22)}...`;

  const handleCopyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(fullUserId);
      Alert.alert("Copied", "User ID has been copied to your clipboard.");
    } catch (error) {
      Alert.alert("Error", "Could not copy User ID.");
    }
  };

  const TopicRow = ({
    name,
    isLastItem = false,
    onPress,
  }: {
    name: string;
    isLastItem?: boolean;
    onPress?: () => void;
  }) => {
    return (
      <Pressable
        className={`flex-row justify-between items-center py-4 -mx-3 px-3  ${
          !isLastItem ? "border-b border-b-[#262e3d]" : ""
        }`}
        onPress={onPress}
      >
        <View className="flex-row items-center gap-4">
          <AntDesign name="crown" size={20} color="#969da8" />

          <Text className="text-white text-xl">{name}</Text>
        </View>

        {onPress && (
          <SimpleLineIcons name="arrow-right" size={14} color="#969da8" />
        )}
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]" edges={["top"]}>
      <View className="flex-row justify-between items-center pl-2 pr-4 py-4">
        <Pressable
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Motivation</Text>
        </Pressable>
      </View>

      <ScrollView>
        <View className="px-4">
          <Text className="text-2xl font-bold text-white">Preferences</Text>

          <>
            <Text className="text-white text-lg mt-8">PREMIUM</Text>
            <Pressable
              className="bg-[#374051] rounded-2xl p-4 my-4 flex-row items-center justify-between"
              onPress={() => router.push("./subscription-screen")}
            >
              <View className="flex-row items-center gap-4">
                <AntDesign name="crown" size={20} color="#969da8" />

                <Text className="text-white font-semibold  text-xl">
                  Manage subscriptions
                </Text>
              </View>
              <SimpleLineIcons name="arrow-right" size={14} color="#969da8" />
            </Pressable>

            {SETTINGS_DATA.map((section) => (
              <View key={section.title} className="mb-6 ">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-white text-lg text-capitalize">
                    {section.title}
                  </Text>
                </View>
                <View className="bg-[#374051] p-3 py-0 rounded-lg">
                  {section.items.map((item, index) => (
                    <TopicRow
                      key={item.name}
                      name={item.name}
                      isLastItem={index === section.items.length - 1}
                      onPress={
                        item.route ? () => router.push(item.route) : undefined
                      }
                    />
                  ))}
                </View>
              </View>
            ))}
          </>
        </View>
        <View className="mx-5 mb-20">
          <View className="border border-white rounded-2xl flex-row">
            <View className="flex-1 p-4 justify-center">
              <Text className="text-gray-300 text-base">
                Motivation app - version {appVersion}
              </Text>
              <Text className="text-gray-300 text-sm mt-1">
                User ID: {displayUserId}
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleCopyToClipboard}
              className="border-l border-l-white px-4 items-center justify-center"
            >
              <Ionicons name="copy-outline" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;
