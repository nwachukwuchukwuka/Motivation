import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CAUSE_OPTIONS = [
  { name: "Family", Icon: <AntDesign name="home" size={24} color="white" /> },
  { name: "Friends", Icon: <AntDesign name="home" size={24} color="white" /> },
  { name: "Work", Icon: <AntDesign name="home" size={24} color="white" /> },
  { name: "Love", Icon: <AntDesign name="home" size={24} color="white" /> },
  { name: "Health", Icon: <AntDesign name="home" size={24} color="white" /> },
  { name: "Other", Icon: <AntDesign name="home" size={24} color="white" /> },
];

const FeelingCauseScreen = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setTimeout(() => router.push("/avoidance-confrontation-screen"), 300);
  };

  return (
    <View className="flex-1 px-5 pt-24 bg-[#262e3d]">
      <Text className="text-white text-3xl font-semibold text-center mb-6">
        What's making you feel that way?
      </Text>

      <View className="mb-8">
        {CAUSE_OPTIONS.map(({ name, Icon }) => {
          const isSelected = selectedOption === name;
          return (
            <TouchableOpacity
              key={name}
              className={`flex-row justify-between items-center rounded-full px-6 py-4 my-2 border ${
                isSelected
                  ? "bg-[#333b4f] border-gray-300"
                  : "bg-transparent border-[#3a4151]"
              }`}
              onPress={() => handleSelect(name)}
            >
              <View className="flex-row items-center">
                {Icon}
                <Text
                  className={`text-lg ml-4 ${
                    isSelected ? "text-white" : "text-[#969da8]"
                  }`}
                >
                  {name}
                </Text>
              </View>

              <View
                className={`w-6 h-6 rounded-full ${
                  isSelected
                    ? "border-[3px] border-gray-300"
                    : "border-[2px] border-[#969da8]"
                } items-center justify-center`}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default FeelingCauseScreen;
