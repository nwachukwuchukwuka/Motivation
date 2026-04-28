import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SURVEY_OPTIONS = [
  { name: "Friend/family", icon: "users" },
  { name: "TikTok", icon: "smartphone" },
  { name: "Instagram", icon: "instagram" },
  { name: "Facebook", icon: "facebook" },
  { name: "App Store", icon: "shopping-bag" },
  { name: "Web search", icon: "search" },
  { name: "Other", icon: "more-horizontal" },
];

const SurveyScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);

    setTimeout(() => {
      router.push("/customize-screen");
    }, 400);
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 40 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            How did you hear about Motivation?
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {SURVEY_OPTIONS.map((option) => {
            const isSelected = selectedOption === option.name;

            return (
              <TouchableOpacity
                key={option.name}
                activeOpacity={0.8}
                onPress={() => handleSelectOption(option.name)}
                className={`w-[48%] aspect-square p-6 rounded-[32px] border-2 transition-all justify-between mb-4 ${isSelected
                    ? "bg-[#111111] border-emerald-500"
                    : "bg-[#111111] border-white/5"
                  }`}
              >
                <View className="flex-row justify-between items-start">
                  <View className={`w-10 h-10 rounded-xl items-center justify-center border ${isSelected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/10"
                    }`}>
                    <Feather
                      name={option.icon as any}
                      size={20}
                      color={isSelected ? "#10b981" : "#52525b"}
                    />
                  </View>

                  {isSelected ? (
                    <View className="w-6 h-6 rounded-full bg-emerald-500 items-center justify-center">
                      <Feather name="check" size={14} color="black" />
                    </View>
                  ) : (
                    <View className="w-6 h-6 rounded-full border-2 border-white/10" />
                  )}
                </View>

                <Text
                  className={`text-base font-bold tracking-tight leading-tight ${isSelected ? "text-white" : "text-[#94A3B8]"
                    }`}
                >
                  {option.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SurveyScreen;
