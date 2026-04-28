import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MAX_LENGTH = 250;

const GoalsInputScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [goalText, setGoalText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleContinue = () => {
    router.push("/topics-selection-screen");
  };

  const isButtonDisabled = goalText.length === 0;

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            What are your goals right now?
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Writing your intentions down is the first step toward manifesting them.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View 
          className={`bg-[#111111] rounded-[32px] p-6 h-64 border-2 transition-all ${
            isFocused ? "border-emerald-500" : "border-white/5"
          }`}
        >
          <TextInput
            className="text-white text-lg flex-1"
            placeholder="I want to achieve..."
            placeholderTextColor="#52525b"
            value={goalText}
            onChangeText={setGoalText}
            multiline
            maxLength={MAX_LENGTH}
            selectionColor="#10b981"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ textAlignVertical: "top" }}
          />
          <View className="flex-row justify-end items-center mt-2">
            <Text className={`text-xs font-medium ${
              goalText.length === MAX_LENGTH ? "text-emerald-500" : "text-[#52525b]"
            }`}>
              {goalText.length}/{MAX_LENGTH}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/90">
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={isButtonDisabled}
          onPress={handleContinue}
          className={`w-full py-5 rounded-[24px] items-center justify-center shadow-lg ${
            isButtonDisabled 
              ? "bg-zinc-800 opacity-50" 
              : "bg-emerald-500 shadow-emerald-500/30"
          }`}
        >
          <Text className={`text-lg font-bold tracking-tight ${
            isButtonDisabled ? "text-zinc-500" : "text-black"
          }`}>
            Save goals
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoalsInputScreen;
