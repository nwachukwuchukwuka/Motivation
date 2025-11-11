import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const AGE_OPTIONS = [
  "13 to 17",
  "18 to 24",
  "25 to 34",
  "35 to 44",
  "45 to 54",
  "55+",
];

const AgeScreen = () => {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (option: string) => {
    setSelectedAge(option);

    setTimeout(() => {
      router.push("/name-screen");
    }, 400);
  };

  return (
    <View className="flex-1 px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          How old are you?
        </Text>

        <View className="mb-8">
          {AGE_OPTIONS.map((option) => {
            const isSelected = selectedAge === option;

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

export default AgeScreen;
