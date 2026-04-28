import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OPTIONS = [
  { label: "Yes, I've seen it", icon: "eye" },
  { label: "I'm open to it", icon: "unlock" },
  { label: "Not really", icon: "shield" },
];

const ThoughtRealityScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      router.push('/positive-thinking-screen');
    }
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
            Do you believe thoughts help shape your reality?
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Your beliefs determine the strength of your transformation.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {OPTIONS.map((item) => {
            const isSelected = selectedOption === item.label;
            return (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.8}
                onPress={() => handleSelect(item.label)}
                className={`w-[48%] h-[120px] p-4 rounded-[28px] border-2 mb-4 justify-between transition-all ${
                  isSelected ? "bg-[#111111] border-emerald-500" : "bg-[#111111] border-white/5"
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

      {/* Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/90">
        <TouchableOpacity
          className={`w-full py-5 rounded-[24px] items-center justify-center shadow-lg ${
            selectedOption ? "bg-emerald-500 shadow-emerald-500/30" : "bg-zinc-800 opacity-50"
          }`}
          onPress={handleContinue}
          disabled={!selectedOption}
          activeOpacity={0.9}
        >
          <Text className={`text-lg font-bold tracking-tight ${
            selectedOption ? "text-black" : "text-zinc-500"
          }`}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThoughtRealityScreen;
