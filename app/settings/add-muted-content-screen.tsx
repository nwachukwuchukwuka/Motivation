import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddMutedContentScreen = () => {
  const router = useRouter();
  const { addMutedWord = () => {} } = useAppContext();
  const [word, setWord] = useState("");

  const handleSave = () => {
    if (!word.trim()) return;
    addMutedWord(word.trim());
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
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
              Mute Content
            </Text>
          </View>
        </View>

        <ScrollView 
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="px-6 mt-8">
            <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
              What should we{"\n"}ignore?
            </Text>
            <Text className="text-zinc-500 text-base mt-4 font-medium leading-relaxed max-w-[85%]">
              Enter any word, phrase, or category you wish to hide from your Motivation experience.
            </Text>
          </View>

          <View className="px-6 mt-12">
            <View 
              className="bg-[#111111] rounded-[24px] p-2 border border-white/5"
              style={styles.cardShadowSmall}
            >
              <View className="flex-row items-center px-4 py-2">
                <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
                <Text className="text-zinc-500 text-[10px] font-bold tracking-tight">Mute rule</Text>
              </View>
              <TextInput
                value={word}
                onChangeText={setWord}
                placeholder="Type here..."
                placeholderTextColor="#3f3f46"
                autoFocus
                className="px-4 pb-6 pt-2 text-white text-2xl font-bold tracking-tight"
              />
            </View>
          </View>
        </ScrollView>

        {/* Floating Action Button */}
        <View className="absolute bottom-10 left-0 px-5 right-0">
          <TouchableOpacity
            onPress={handleSave}
            disabled={!word.trim()}
            className={`p-3 rounded-[24px] items-center justify-center border border-white/10 px-8 ${
              !word.trim() 
                ? "bg-zinc-800 opacity-50" 
                : "bg-emerald-500"
            }`}
            style={word.trim() ? styles.emeraldShadow : {}}
          >
            <Text className={`font-bold text-xl tracking-tight ${
              !word.trim() ? "text-zinc-500" : "text-black"
            }`}>
              Add Muted Content
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  cardShadowSmall: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 3,
  },
  emeraldShadow: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 10,
  }
});

export default AddMutedContentScreen;
