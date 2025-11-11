import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SURVEY_OPTIONS = [
  "Friend/family",
  "TikTok",
  "Instagram",
  "Facebook",
  "App Store",
  "Web search",
  "Other",
];

const SurveyScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);

    setTimeout(() => {
      router.push("/customize-screen");
    }, 400);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="px-5">
        <Text className="text-white text-3xl font-semibold text-center my-10 mb-6 mt-3">
          How did you hear about Motivation?
        </Text>

        <View>
          {SURVEY_OPTIONS.map((option) => {
            const isSelected = selectedOption === option;

            return (
              <TouchableOpacity
                key={option}
                activeOpacity={0.8}
                className={`flex-row justify-between items-center rounded-full px-6 py-4 my-2 border ${
                  isSelected
                    ? "bg-[#334155] border-gray-300"
                    : "bg-transparent border-gray-600"
                }`}
                onPress={() => handleSelectOption(option)}
              >
                <Text
                  className={`text-base ${
                    isSelected ? "text-white font-semibold" : "text-gray-300"
                  }`}
                >
                  {option}
                </Text>

                <View
                  className={`w-6 h-6 rounded-full ${
                    isSelected
                      ? "border-[3px] border-gray-300"
                      : "border-[2px] border-gray-500"
                  }`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SurveyScreen;
