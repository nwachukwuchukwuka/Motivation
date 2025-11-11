import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TOPICS = [
  "Deep",
  "Overthinking",
  "Life lessons",
  "Heartbroken",
  "Self-esteem",
  "Success",
  "Mental toughness",
  "Positivity",
  "Discipline",
  "Mental health",
  "Love",
  "Affirmations",
  "Motivation",
  "Unfiltered (NSFW)",
];

const TopicsSelectionScreen = () => {
  const router = useRouter();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleSelect = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((item) => item !== topic)
        : [...prev, topic]
    );
  };

  const handleContinue = () => {
    router.push("/free-trial-offer-screen");
  };

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d] ">
      <View>
        <Text className="text-white text-3xl font-semibold text-center  mb-6">
          Which topics do you want to follow?
        </Text>
        <View>
          <View className="flex-row flex-wrap ">
            {TOPICS.map((topic) => {
              const isSelected = selectedTopics.includes(topic);
              return (
                <TouchableOpacity
                  key={topic}
                  className={`flex-row items-center border rounded-full px-4 py-4 m-3 ${
                    isSelected
                      ? "border-gray-300 bg-[#333b4f]"
                      : "border-[#3a4151] bg-transparent"
                  }`}
                  onPress={() => handleSelect(topic)}
                >
                  <Feather
                   
                    name={isSelected ? "check" : "plus"}
                    size={16}
                    color={isSelected ? "white" : "#969da8"}
                  />
                  <Text
                    className={`ml-2 font-semibold ${
                      isSelected ? "text-white" : "text-[#969da8]"
                    }`}
                  >
                    {topic}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopicsSelectionScreen;
