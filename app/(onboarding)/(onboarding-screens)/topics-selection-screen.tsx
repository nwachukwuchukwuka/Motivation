import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TOPICS = [
  { name: "Deep", icon: "moon" },
  { name: "Overthinking", icon: "brain" },
  { name: "Life lessons", icon: "book" },
  { name: "Heartbroken", icon: "heart" },
  { name: "Self-esteem", icon: "award" },
  { name: "Success", icon: "trending-up" },
  { name: "Mental toughness", icon: "shield" },
  { name: "Positivity", icon: "smile" },
  { name: "Discipline", icon: "clock" },
  { name: "Mental health", icon: "activity" },
  { name: "Love", icon: "heart" },
  { name: "Affirmations", icon: "star" },
  { name: "Motivation", icon: "zap" },
  { name: "Unfiltered", icon: "alert-circle" },
];

const TopicsSelectionScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
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
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Which topics do you want to follow?
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Personalize your feed with the themes that resonate most.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {TOPICS.map((topic) => {
            const isSelected = selectedTopics.includes(topic.name);
            return (
              <TouchableOpacity
                key={topic.name}
                activeOpacity={0.8}
                onPress={() => handleSelect(topic.name)}
                className={`w-[48%] h-[120px] p-4 rounded-[28px] border-2 mb-4 justify-between transition-all ${
                  isSelected ? "bg-[#111111] border-emerald-500" : "bg-[#111111] border-white/5"
                }`}
              >
                <View className="flex-row justify-between items-start">
                  <View className={`w-8 h-8 rounded-lg items-center justify-center border ${
                    isSelected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/10"
                  }`}>
                    <Feather 
                      name={topic.icon as any} 
                      size={16} 
                      color={isSelected ? "#10b981" : "#52525b"} 
                    />
                  </View>
                  
                  {isSelected ? (
                    <View className="w-5 h-5 rounded-full bg-emerald-500 items-center justify-center">
                      <Feather name="check" size={12} color="black" />
                    </View>
                  ) : (
                    <View className="w-5 h-5 rounded-full border-2 border-white/10" />
                  )}
                </View>

                <Text 
                  className={`text-[14px] tracking-tight font-medium ${
                    isSelected ? "text-white" : "text-[#94A3B8]"
                  }`}
                >
                  {topic.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/90">
        <TouchableOpacity
          className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
          onPress={handleContinue}
          activeOpacity={0.9}
        >
          <Text className="text-black text-lg font-bold tracking-tight">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopicsSelectionScreen;
