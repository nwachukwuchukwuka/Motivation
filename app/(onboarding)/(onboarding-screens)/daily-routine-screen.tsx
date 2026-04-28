import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const DAYS = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];

const DailyRoutineScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleContinue = () => {
    router.push("/notification-settings-screen");
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between", paddingBottom: 40 }}
      >
        <View>
          <View className="mb-12">
            <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
              Stay motivated with a daily routine.
            </Text>
            <View className="w-12 h-1 bg-emerald-500 mt-6" />
          </View>

          <View className="items-center justify-center py-8">
            <View className="w-32 h-32 rounded-full bg-emerald-500/10 items-center justify-center border border-emerald-500/20 mb-8">
              <Text className="text-emerald-500 text-6xl font-bold">1</Text>
            </View>

            <View className="bg-[#111111] rounded-[32px] p-6 w-full border border-white/5">
              <View className="flex-row justify-between items-center mb-6">
                {DAYS.map((day, index) => {
                  const isActive = day === "Sa";
                  return (
                    <View key={index} className="items-center">
                      <Text className={`text-[12px] font-bold mb-3 uppercase tracking-tighter ${isActive ? "text-emerald-500" : "text-zinc-500"}`}>
                        {day}
                      </Text>
                      {isActive ? (
                        <View className="w-9 h-9 rounded-full bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/50">
                          <Feather name="check" size={18} color="black" />
                        </View>
                      ) : (
                        <View className="w-9 h-9 rounded-full bg-white/5 border border-white/10" />
                      )}
                    </View>
                  );
                })}
              </View>
              <Text className="text-center text-[#94A3B8] text-sm font-medium leading-relaxed">
                Build a streak, one day at a time. Consistency is the key to unlocking your true potential.
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-8">
          <TouchableOpacity
            className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
            activeOpacity={0.9}
            onPress={handleContinue}
          >
            <Text className="text-black text-lg font-bold tracking-tight">
              Continue
            </Text>
          </TouchableOpacity>
          <Text className="text-zinc-600 text-center text-xs mt-6 font-bold tracking-widest uppercase">
            Setting up your daily rhythm
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DailyRoutineScreen;
