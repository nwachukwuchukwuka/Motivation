import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
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

  const translateY = useSharedValue(-200);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, { damping: 20, stiffness: 100 });
      opacity.value = withTiming(1, { duration: 300 });
    } else {
      translateY.value = withTiming(-200, { duration: 250 });
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
      style={[animatedStyle, { top: insets.top }]}
      className="absolute left-4 right-4 z-20"
    >
      <View className="bg-[#3a4151] rounded-3xl p-4 flex-row items-center">
        <View className="relative">
          <Image
            source={require("../assets/images/fire-img.png")}
            className="w-[80] h-[80]"
            resizeMode="contain"
          />
          <Text className="absolute bottom-0 left-[35px] text-xl text-white font-bold">
            {streakCount}
          </Text>
        </View>

        <View className="flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="text-white font-bold text-lg">Your streak</Text>
          </View>
          <View className="flex-row justify-between mt-2">
            {DAYS_SHORT.map((day, index) => {
              const isActive = index === currentDayIndex;
              return (
                <View key={index} className="items-center">
                  <Text className="text-white mb-2">{day}</Text>
                  {isActive ? (
                    <LinearGradient
                      colors={["#C97EFF", "#F5A1BE"]}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 9999,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="check" size={14} color="white" />
                    </LinearGradient>
                  ) : (
                    <View className="w-[25px] h-[25px] rounded-full bg-[#4a5162]" />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default StreakToast;
