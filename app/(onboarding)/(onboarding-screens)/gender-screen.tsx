import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const GENDER_OPTIONS = ["Female", "Male", "Other", "Prefer not to say"];

const GenderScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { userName } = useLocalSearchParams();

  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedGender(option);

    setTimeout(() => {
      router.push("/relationship-screen");
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
            Which option represents you best, {userName || "friend"}?
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {GENDER_OPTIONS.map((option) => {
            const isSelected = selectedGender === option;

            return (
              <TouchableOpacity
                key={option}
                activeOpacity={0.8}
                onPress={() => handleSelect(option)}
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
                      name="user" 
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
                  className={`text-[14px] font-bold tracking-tight leading-tight ${
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

export default GenderScreen;
