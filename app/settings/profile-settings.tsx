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
        className={`flex-row justify-between items-center py-5 px-1  ${
          !isLastItem ? "border-b border-white/5" : ""
        }`}
        onPress={onPress}
      >
        <View className="flex-row items-center gap-4">
          <AntDesign name="crown" size={18} color="#10b981" />
          <Text className="text-white text-lg font-bold tracking-tight">{name}</Text>
        </View>

        {onPress && (
          <Feather name="chevron-right" size={18} color="#3f3f46" />
        )}
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#050505]" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5 shadow-lg"
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-zinc-500 text-sm font-bold ml-4 tracking-tight">Motivation</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 pb-20">
          <Text className="text-3xl font-bold text-white tracking-tighter mb-8">Preferences</Text>

          <View>
            <View className="flex-row items-center mb-4 px-1">
              <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
              <Text className="text-emerald-500 text-xs font-bold tracking-tight">Premium</Text>
            </View>
            <TouchableOpacity
              className="bg-[#111111] rounded-[24px] p-6 mb-10 flex-row items-center justify-between border border-white/5 shadow-2xl"
              onPress={() => router.push("./subscription-screen")}
            >
              <View className="flex-row items-center gap-4">
                <View className="w-11 h-11 bg-emerald-500/10 rounded-2xl items-center justify-center border border-emerald-500/10">
                  <AntDesign name="crown" size={22} color="#10b981" />
                </View>

                <View>
                  <Text className="text-white font-bold text-lg tracking-tight">
                    Subscriptions
                  </Text>
                  <Text className="text-zinc-500 text-[10px] font-medium">Manage your plan</Text>
                </View>
              </View>
              <Feather name="arrow-up-right" size={20} color="#10b981" />
            </TouchableOpacity>

            {SETTINGS_DATA.map((section) => (
              <View key={section.title} className="mb-10">
                <View className="flex-row items-center mb-4 px-1">
                  <View className="w-1.5 h-1.5 rounded-full bg-zinc-800 mr-2" />
                  <Text className="text-zinc-500 text-xs font-bold tracking-tight">
                    {section.title}
                  </Text>
                </View>
                <View className="bg-[#111111] px-6 py-1 rounded-[32px] border border-white/5">
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
          </View>

          {/* Minimalist Footer Design */}
          <View className="mt-12 items-center">
            <View className="w-12 h-1 bg-[#111111] rounded-full mb-8 opacity-20" />
            
            <Text className="text-zinc-500 text-[11px] font-bold tracking-tight">
              Motivation App — Version {appVersion}
            </Text>
            
            <TouchableOpacity 
              onPress={handleCopyToClipboard}
              className="mt-6 flex-row items-center bg-[#111111] px-5 py-3 rounded-full border border-white/5 shadow-sm"
            >
              <Ionicons name="copy-outline" size={14} color="#10b981" />
              <Text className="text-zinc-400 text-[10px] font-bold ml-2 tracking-tight">
                User ID: {displayUserId}
              </Text>
            </TouchableOpacity>
            
            <Text className="text-zinc-800 text-[9px] mt-8 font-medium tracking-widest opacity-50">
              Made with passion
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;
