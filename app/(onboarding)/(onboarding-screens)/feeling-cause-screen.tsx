import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CAUSE_OPTIONS = [
  {
    name: "Family",
    icon: "team",
    library: "AntDesign",
  },
  {
    name: "Friends",
    icon: "users",
    library: "Feather",
  },
  {
    name: "Work",
    icon: "briefcase",
    library: "Feather",
  },
  {
    name: "Love",
    icon: "heart",
    library: "AntDesign",
  },
  {
    name: "Health",
    icon: "heart-pulse",
    library: "MaterialCommunityIcons",
  },
  {
    name: "Other",
    icon: "help-circle",
    library: "Feather",
  },
];

const FeelingCauseScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      router.push("/avoidance-confrontation-screen");
    }
  };

  const renderIcon = (item: typeof CAUSE_OPTIONS[0], isSelected: boolean) => {
    const color = isSelected ? "#10b981" : "#52525b";
    const size = 24;
    
    if (item.library === "AntDesign") {
      return <AntDesign name={item.icon as any} size={size} color={color} />;
    }
    if (item.library === "MaterialCommunityIcons") {
      return <MaterialCommunityIcons name={item.icon as any} size={size} color={color} />;
    }
    return <Feather name={item.icon as any} size={size} color={color} />;
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
            What's making you feel that way?
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Identifying the source is the first step toward focus.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {CAUSE_OPTIONS.map((item) => {
            const isSelected = selectedOption === item.name;
            return (
              <TouchableOpacity
                key={item.name}
                activeOpacity={0.8}
                onPress={() => handleSelect(item.name)}
                className={`w-[48%] h-[120px] p-4 rounded-[28px] border-2 mb-4 justify-between transition-all ${
                  isSelected ? "bg-[#111111] border-emerald-500" : "bg-[#111111] border-white/5"
                }`}
              >
                <View className="flex-row justify-between items-start">
                  <View className={`w-10 h-10 rounded-xl items-center justify-center border ${
                    isSelected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/10"
                  }`}>
                    {renderIcon(item, isSelected)}
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
                  {item.name}
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

export default FeelingCauseScreen;
