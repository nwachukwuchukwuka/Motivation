import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RELATIONSHIP_OPTIONS = [
  "In a challenging relationship",
  "Going through a breakup",
  "Happily single",
  "Single and looking",
  "In a happy relationship",
  "Not interested in this topic",
];

const RelationshipScreen = () => {
  const router = useRouter();
  const [selectedRelationship, setSelectedRelationship] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedRelationship(option);

    // Delay before routing
    setTimeout(() => {
      router.push("/religious-screen");
    }, 400);
  };

  return (
    <View className="flex-1 px-6 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          What's your relationship status?
        </Text>

        <View className="mb-8">
          {RELATIONSHIP_OPTIONS.map((option) => {
            const isSelected = selectedRelationship === option;

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

export default RelationshipScreen;
