import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RemindersScreen = () => {
  const router = useRouter();
  const [generalEnabled, setGeneralEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5"
          style={styles.cardShadow}
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-white text-xl font-bold tracking-tight">Daily Flow</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/free-trial-details-screen")}
          className="w-10 h-10 bg-emerald-500/10 rounded-full items-center justify-center border border-emerald-500/20"
        >
          <Feather name="plus" size={20} color="#10b981" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-8">
          <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
            Design your routine
          </Text>
          <Text className="text-zinc-500 text-base mt-4 font-medium leading-relaxed">
            Set your notification schedule to weave motivation into your daily life.
          </Text>
        </View>

        <View className="px-6 mt-12 gap-4">
          <TouchableOpacity
            className="bg-[#111111] rounded-[32px] p-6 border border-white/5"
            style={styles.cardShadow}
            onPress={() => router.push("/edit-reminder")}
          >
            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <View className="flex-row items-center mb-2">
                  <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                  <Text className="text-zinc-500 text-[10px] font-bold tracking-tight">Primary schedule</Text>
                </View>
                <Text className="text-white text-2xl font-bold tracking-tight">General</Text>
                <Text className="text-zinc-400 text-sm mt-1 font-medium">10x Every day • 9:00AM - 10:00PM</Text>
              </View>
              <Switch
                value={generalEnabled}
                onValueChange={setGeneralEnabled}
                trackColor={{ false: "#1a1a1a", true: "#10b981" }}
                thumbColor={"#ffffff"}
                ios_backgroundColor="#1a1a1a"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#111111]/50 rounded-[32px] p-6 border border-white/5 border-dashed items-center justify-center py-10"
            onPress={() => router.push("/free-trial-details-screen")}
          >
            <View className="w-12 h-12 bg-white/5 rounded-full items-center justify-center mb-4">
              <Feather name="lock" size={20} color="#3f3f46" />
            </View>
            <Text className="text-zinc-500 font-bold tracking-tight">Add custom schedule</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View className="absolute bottom-10 left-0 px-5 right-0">
        <TouchableOpacity
          onPress={() => router.push("/free-trial-details-screen")}
          className="bg-emerald-500 p-3 rounded-[24px] items-center justify-center border border-white/10 px-8"
          style={styles.emeraldShadow}
        >
          <Text className="text-black font-bold text-xl tracking-tight">Unlock More Schedules</Text>
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
  }
});

export default RemindersScreen;
