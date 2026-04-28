import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACTION_OPTIONS = [
  { label: "Share on social", icon: "share-2" },
  { label: "Save for later", icon: "bookmark" },
  { label: "Send to someone", icon: "send" },
  { label: "Write it down", icon: "edit-3" },
  { label: "Download photo", icon: "download" },
  { label: "Set as wallpaper", icon: "image" },
];

const QuoteActionsScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const handleContinue = () => {
    router.push("/mental-health-screen");
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
            What do you do when a quote speaks to you?
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Select the ways you like to anchor your motivation.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {ACTION_OPTIONS.map((item) => {
            const isSelected = selected.includes(item.label);
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

export default QuoteActionsScreen;
