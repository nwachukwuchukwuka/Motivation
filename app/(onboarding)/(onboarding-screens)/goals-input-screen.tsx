import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const MAX_LENGTH = 250;

const GoalsInputScreen = () => {
  const router = useRouter();
  const [goalText, setGoalText] = useState("");

  const handleContinue = () => {
    router.push("/topics-selection-screen");
  };

  const isButtonDisabled = goalText.length === 0;

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          What are your goals right now?
        </Text>

        <View className="bg-[#3a4151] rounded-2xl p-4 h-48">
          <TextInput
            className="text-white text-lg flex-1"
            placeholder="I want to..."
            placeholderTextColor="#969da8"
            value={goalText}
            onChangeText={setGoalText}
            multiline
            maxLength={MAX_LENGTH}
            selectionColor="white"
            style={{ textAlignVertical: "top" }}
          />
        </View>
        <Text className="text-right  text-sm text-[#969da8] mt-2">
          {goalText.length}/{MAX_LENGTH}
        </Text>
      </View>

      <TouchableOpacity
        className={`w-full py-4 rounded-full items-center justify-center  ${
          isButtonDisabled ? "bg-[#5a6171]" : "bg-white"
        }`}
        onPress={handleContinue}
        disabled={isButtonDisabled}
      >
        <Text
          className={`text-lg font-bold ${
            isButtonDisabled ? "text-[#969da8]" : "text-black"
          }`}
        >
          Save goals
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoalsInputScreen;
