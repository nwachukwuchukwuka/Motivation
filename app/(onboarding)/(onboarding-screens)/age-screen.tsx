import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

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
  const insets = useSafeAreaInsets();

  const handleSelect = (option: string) => {
    setSelectedAge(option);

    setTimeout(() => {
      router.push("/name-screen");
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
            How old are you?
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {AGE_OPTIONS.map((option) => {
            const isSelected = selectedAge === option;

            return (
              <TouchableOpacity
                key={option}
                activeOpacity={0.8}
                onPress={() => handleSelect(option)}
                className={`w-[48%] aspect-square p-6 rounded-[32px] border-2 transition-all justify-between mb-4 ${
                  isSelected
                    ? "bg-[#111111] border-emerald-500"
                    : "bg-[#111111] border-white/5"
                }`}
              >
                <View className="flex-row justify-between items-start">
                  <View className={`w-10 h-10 rounded-xl items-center justify-center border ${
                    isSelected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/10"
                  }`}>
                    <Feather 
                      name="calendar" 
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
                  className={`text-xl font-bold tracking-tight ${
                    isSelected ? "text-white" : "text-[#94A3B8]"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AgeScreen;
