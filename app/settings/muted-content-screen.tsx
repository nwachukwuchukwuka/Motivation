import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MutedContentScreen = () => {
  const router = useRouter();
  const { mutedWords = [], removeMutedWord = () => {} } = useAppContext();

  const Header = () => (
    <View className="flex-row justify-between items-center px-6 py-4">
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5"
        style={styles.cardShadow}
      >
        <Feather name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <View className="flex-1 items-center">
        <Text className="text-white text-xl font-bold tracking-tight">Muted</Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/settings/add-muted-content-screen")}
        className="w-10 h-10 bg-emerald-500/10 rounded-full items-center justify-center border border-emerald-500/20"
      >
        <Feather name="plus" size={20} color="#10b981" />
      </TouchableOpacity>
    </View>
  );

  if (mutedWords.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#050505]">
        <Header />
        <View className="flex-1 items-center justify-center px-8">
          <View className="w-32 h-32 bg-[#111111] rounded-full items-center justify-center mb-10 border border-white/5" style={styles.cardShadow}>
            <Feather name="volume-x" size={48} color="#10b981" />
          </View>
          <Text className="text-white text-3xl font-bold text-center tracking-tighter">
            Pure Serenity
          </Text>
          <Text className="text-zinc-500 text-lg text-center mt-4 leading-relaxed font-medium">
            You haven't muted any content yet. Your experience is wide open and full of potential.
          </Text>
        </View>
        <View className="p-6 pb-10">
          <TouchableOpacity
            onPress={() => router.push("/settings/add-muted-content-screen")}
            className="bg-emerald-500 p-3 rounded-[24px] items-center justify-center border border-white/10 px-8"
            style={styles.emeraldShadow}
          >
            <Text className="text-black font-bold text-xl tracking-tight">Add Muted Content</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      <Header />
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-6">
          <Text className="text-white text-4xl font-bold tracking-tighter">Muted topics</Text>
          <Text className="text-zinc-500 text-base mt-2 mb-8 leading-snug font-medium">
            Muted content will be hidden from your feed, notifications, and interactive widgets.
          </Text>
          
          <View className="gap-3">
            {mutedWords.map((word: string) => (
              <View
                key={word}
                className="bg-[#111111] rounded-[24px] p-5 flex-row justify-between items-center border border-white/5"
                style={styles.cardShadowSmall}
              >
                <View className="flex-row items-center">
                  <View className="w-2 h-2 rounded-full bg-emerald-500 mr-4" />
                  <Text className="text-white text-lg font-bold tracking-tight">{word}</Text>
                </View>
                <TouchableOpacity 
                  onPress={() => removeMutedWord(word)}
                  className="w-10 h-10 bg-white/5 rounded-full items-center justify-center"
                >
                  <Feather name="trash-2" size={18} color="#ef4444" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View className="absolute bottom-10 left-0 px-5 right-0">
        <TouchableOpacity
          onPress={() => router.push("/settings/add-muted-content-screen")}
          className="bg-emerald-500 p-3 rounded-[24px] items-center justify-center border border-white/10 px-8"
          style={styles.emeraldShadow}
        >
          <Text className="text-black font-bold text-xl tracking-tight">Add More Content</Text>
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
  cardShadowSmall: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  emeraldShadow: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 10,
  }
});

export default MutedContentScreen;
