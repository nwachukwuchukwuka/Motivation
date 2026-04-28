import { Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type StreakToastProps = {
  visible: boolean;
  streakCount: number;
};

const StreakToast = ({ visible, streakCount }: StreakToastProps) => {
  const insets = useSafeAreaInsets();

  const translateY = useSharedValue(400);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, { damping: 15, stiffness: 100 });
      opacity.value = withTiming(1, { duration: 300 });
    } else {
      translateY.value = withTiming(400, { duration: 250 });
      opacity.value = withTiming(0, { duration: 200 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  const currentDayIndex = new Date().getDay();

  return (
    <Animated.View
      style={[animatedStyle, { bottom: insets.bottom + 110 }]}
      className="absolute left-4 right-4 z-[100]"
    >
      <View
        className="bg-[#111111] rounded-[32px] p-6 items-center border border-white/5"
      >
        <View className="flex-row items-center mb-6">
          <View className="w-10 h-10 bg-emerald-500/10 rounded-xl items-center justify-center border border-emerald-500/20 mr-3">
            <Feather name="zap" size={20} color="#10b981" />
          </View>
          <Text className="text-white text-2xl font-semibold tracking-tighter">
            {streakCount} Day Streak
          </Text>
        </View>

        <View className="flex-row justify-between w-full px-2">
          {DAYS_SHORT.map((day, index) => {
            const isActive = index === currentDayIndex;
            return (
              <View key={index} className="items-center">
                <Text className={`text-[10px] font-bold mb-3 tracking-tight ${isActive ? "text-emerald-500" : "text-zinc-600"}`}>
                  {day}
                </Text>
                {isActive ? (
                  <View
                    className="w-8 h-8 rounded-full bg-emerald-500 items-center justify-center"
                  >
                    <Feather name="check" size={16} color="black" />
                  </View>
                ) : (
                  <View className="w-8 h-8 rounded-full bg-white/5 border border-white/5" />
                )}
              </View>
            );
          })}
        </View>
      </View>
    </Animated.View>
  );
};

export default StreakToast;
