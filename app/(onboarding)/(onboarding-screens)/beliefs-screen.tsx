import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BELIEF_OPTIONS = [
  "Christianity",
  "Judaism",
  "Islam",
  "Hinduism",
  "Buddhism",
  "Other",
];

const BeliefsScreen = () => {
  const router = useRouter();
  const [selectedBelief, setSelectedBelief] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedBelief(option);

    setTimeout(() => {
      router.push("/zodiac-screen");
    }, 400);
  };

  return (
    <View className="flex-1 px-6 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          Which of these best describes your beliefs?
        </Text>

        <View className="mb-8">
          {BELIEF_OPTIONS.map((option) => {
            const isSelected = selectedBelief === option;

            return (
              <TouchableOpacity
                key={option}
                className={`flex-row justify-between items-center rounded-full px-6 py-4 my-2 border ${
                  isSelected
                    ? "bg-[#333b4f] border-gray-300"
                    : "bg-transparent border-[#3a4151]"
                }`}
                onPress={() => handleSelect(option)}
              >
                <Text
                  className={`text-lg ${
                    isSelected ? "text-white font-semibold" : "text-[#969da8]"
                  }`}
                >
                  {option}
                </Text>
                <View
                  className={`w-6 h-6 rounded-full ${
                    isSelected
                      ? "border-[3px] border-gray-300"
                      : "border-[2px] border-[#969da8]"
                  }`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default BeliefsScreen;
