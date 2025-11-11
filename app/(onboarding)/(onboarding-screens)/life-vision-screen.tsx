import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const VISION_OPTIONS = [
  "Yes, I do",
  "I'm working on it",
  "I take it one day at a time",
  "Not really",
];

const LifeVisionScreen = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);

    setTimeout(() => {
      router.push("/thought-reality-screen");
    }, 400); 
  };

  return (
    <View className="flex-1 px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          Do you have a clear vision of the life you want?
        </Text>

        <View className="mb-8">
          {VISION_OPTIONS.map((option) => {
            const isSelected = selectedOption === option;

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
                    isSelected ? "text-white" : "text-[#969da8]"
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

export default LifeVisionScreen;
