import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TOPICS = [
  "Hard times",
  "Working out",
  "Productivity",
  "Self-esteem",
  "Achieving goals",
  "Inspiration",
  "Letting go",
  "Love",
  "Relationships",
  "Faith & Spirituality",
  "Positive thinking",
  "Stress & Anxiety",
];

const ContentPreferencesScreen = () => {
  const router = useRouter();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "Hard times",
  ]);

  const handleToggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5"
          style={styles.cardShadow}
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center mr-10">
          <Text className="text-white text-xl font-bold tracking-tight">
            Preferences
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-6">
          <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
            Curate your experience
          </Text>
          <Text className="text-zinc-500 text-base mt-4 font-medium leading-relaxed max-w-[80%]">
            Select the topics you want to prioritize in your daily motivation feed.
          </Text>
        </View>

        <View className="flex-row flex-wrap px-6 mt-10 gap-3">
          {TOPICS.map((topic) => {
            const isSelected = selectedTopics.includes(topic);
            return (
              <TouchableOpacity
                key={topic}
                onPress={() => handleToggleTopic(topic)}
                className={`p-4 rounded-[32px] border flex-row items-center transition-all pl-10 pr-6 ${isSelected
                  ? "bg-emerald-500 border-emerald-500"
                  : "bg-[#111111] border-white/5"
                  }`}
                style={isSelected ? styles.emeraldShadowSmall : styles.cardShadowSmall}
              >
                <Text
                  className={`text-[15px] font-bold tracking-tight ${isSelected ? "text-black" : "text-white"
                    }`}
                >
                  {topic}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View className="absolute bottom-10 left-0 px-5 right-0">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-emerald-500 p-3 rounded-[24px] items-center justify-center border border-white/10 px-8"
          style={styles.emeraldShadow}
        >
          <Text className="text-black font-bold text-xl tracking-tight">Save Preferences</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  cardShadowSmall: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  emeraldShadow: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 10,
  },
  emeraldShadowSmall: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  }
});

export default ContentPreferencesScreen;
