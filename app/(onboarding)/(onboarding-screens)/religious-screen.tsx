import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const RELIGIOUS_OPTIONS = [
  { label: "Yes", icon: "moon" },
  { label: "No", icon: "sun" },
  { label: "Spiritual but not religious", icon: "wind" },
];

const ReligiousScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);

    setTimeout(() => {
      if (option === "Yes") {
        router.push("/beliefs-screen");
      } else {
        router.push("/zodiac-screen");
      }
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
            Are you religious?
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {RELIGIOUS_OPTIONS.map((item) => {
            const isSelected = selectedOption === item.label;

            return (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.8}
                onPress={() => handleSelect(item.label)}
                className={`w-[48%] h-[120px] p-4 rounded-[28px] border-2 transition-all justify-between mb-4 ${
                  isSelected
                    ? "bg-[#111111] border-emerald-500"
                    : "bg-[#111111] border-white/5"
                }`}
              >
                <View className="flex-row justify-between items-start">
                  <View className={`w-8 h-8 rounded-lg items-center justify-center border ${
                    isSelected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/10"
                  }`}>
                    <Feather 
                      name={item.icon as any} 
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
                  className={`text-[14px] tracking-tight leading-tight ${
                    isSelected ? "text-white" : "text-[#94A3B8]"
                  }`}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReligiousScreen;
