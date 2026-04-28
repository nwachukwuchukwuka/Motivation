import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const StreakSection = () => {
  const router = useRouter();
  const currentDayIndex = new Date().getDay();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `I'm on a 1-day streak in Motivation! Join me and elevate your mindset.`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with:", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share sheet was dismissed");
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View className="px-6 mt-6">
      <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5">
        <View className="flex-row items-center justify-between mb-8">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-emerald-500/10 rounded-2xl items-center justify-center border border-emerald-500/20 mr-4">
              <Feather name="zap" size={24} color="#10b981" />
            </View>
            <View>
              <Text className="text-white text-xl font-bold tracking-tight">Your streak</Text>
              <Text className="text-zinc-500 text-xs font-medium">1 day so far</Text>
            </View>
          </View>
          
          <View className="flex-row items-center gap-2">
            <TouchableOpacity 
              onPress={onShare}
              className="w-10 h-10 bg-white/5 rounded-full items-center justify-center border border-white/5"
            >
              <Feather name="share-2" size={18} color="#71717a" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/settings/streak-screen")}
              className="w-10 h-10 bg-white/5 rounded-full items-center justify-center border border-white/5"
            >
              <Feather name="maximize-2" size={18} color="#71717a" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between">
          {DAYS_OF_WEEK.map((day, index) => {
            const isActive = index === currentDayIndex;
            return (
              <View key={index} className="items-center">
                <Text className={`text-[10px] font-bold mb-3 ${isActive ? "text-emerald-500" : "text-zinc-600"}`}>
                  {day}
                </Text>
                {isActive ? (
                  <View 
                    className="w-9 h-9 rounded-full bg-emerald-500 items-center justify-center border border-emerald-400/20"
                    style={styles.emeraldShadowSmall}
                  >
                    <Feather name="check" size={18} color="black" />
                  </View>
                ) : (
                  <View className="w-9 h-9 rounded-full bg-white/5 border border-white/5 items-center justify-center">
                    <View className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emeraldShadowSmall: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  }
});

export default StreakSection;
