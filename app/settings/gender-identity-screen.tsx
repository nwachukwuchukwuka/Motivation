import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
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
            Identity
          </Text>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-8">
          <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
            Personalize your{"\n"}journey
          </Text>
          <Text className="text-zinc-500 text-base mt-4 font-medium leading-relaxed">
            Your gender identity helps us curate content that resonates more deeply with your perspective.
          </Text>
        </View>

        <View className="px-6 mt-12 gap-4">
          {GENDER_OPTIONS.map((gender) => {
            const isSelected = selectedGender === gender;
            return (
              <TouchableOpacity
                key={gender}
                onPress={() => setSelectedGender(gender)}
                className={`flex-row justify-between items-center p-6 rounded-[28px] border transition-all ${
                  isSelected 
                    ? "bg-emerald-500 border-emerald-500" 
                    : "bg-[#111111] border-white/5"
                }`}
                style={isSelected ? styles.emeraldShadowSmall : styles.cardShadow}
              >
                <Text
                  className={`text-lg font-bold tracking-tight ${
                    isSelected ? "text-black" : "text-white"
                  }`}
                >
                  {gender}
                </Text>
                {isSelected ? (
                  <View className="w-6 h-6 bg-black rounded-full items-center justify-center">
                    <Feather name="check" size={14} color="#10b981" />
                  </View>
                ) : (
                  <View className="w-6 h-6 rounded-full border-2 border-white/10" />
                )}
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
          <Text className="text-black font-bold text-xl tracking-tight">Update Identity</Text>
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

export default GenderIdentityScreen;
