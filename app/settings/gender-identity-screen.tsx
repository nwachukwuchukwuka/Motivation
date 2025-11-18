import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GENDER_OPTIONS = [
  "Female",
  "Male",
  "Non-binary",
  "Other",
  "Prefer not to say",
];

const GenderIdentityScreen = () => {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("Female");

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row items-center p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Settings</Text>
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-white text-3xl font-bold">Gender identity</Text>
        <Text className="text-white text-lg mt-2 mb-8">
          Your gender identity is used to personalize your content
        </Text>

        <View className="gap-3">
          {GENDER_OPTIONS.map((gender) => {
            const isSelected = selectedGender === gender;
            return (
              <TouchableOpacity
                key={gender}
                onPress={() => setSelectedGender(gender)}
                className={`rounded-full p-4 border ${
                  isSelected ? "border-white bg-white/10" : "border-gray-600"
                }`}
              >
                <Text
                  className={`font-semibold text-lg text-center ${
                    isSelected ? "text-white" : "text-gray-400"
                  }`}
                >
                  {gender}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GenderIdentityScreen;
