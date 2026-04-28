import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const SHORTCUTS = [
  "General",
  "Morning",
  "Positive",
  "Love",
  "Work",
  "Sports",
  "Workout",
];

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const SiriShortcutsScreen = () => {
  const router = useRouter();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const smallHeaderTitleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      [0, 1],
      Extrapolate.CLAMP
    );
    return { opacity };
  });

  const largeHeaderTitleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, HEADER_SCROLL_DISTANCE / 2],
      [1, 0],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_SCROLL_DISTANCE],
      [0, -20],
      Extrapolate.CLAMP
    );
    return { opacity, transform: [{ translateY }] };
  });

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="absolute top-0 left-0 right-0 z-20 bg-[#050505]">
        <SafeAreaView edges={["top"]}>
          <View className="flex-row items-center justify-between px-6 py-4 h-[64px]">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5"
              style={styles.cardShadow}
            >
              <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>

            <Animated.View
              style={smallHeaderTitleStyle}
              className="absolute left-0 right-0 items-center -z-10"
            >
              <Text className="text-white text-lg font-bold tracking-tight">
                Siri Shortcuts
              </Text>
            </Animated.View>
            <View className="w-10" />
          </View>
        </SafeAreaView>
      </View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 100, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 gap-3">
          {SHORTCUTS.map((shortcut) => {
            return (
              <TouchableOpacity
                key={shortcut}
                className="bg-[#111111] rounded-[24px] p-5 flex-row justify-between items-center border border-white/5"
                style={styles.cardShadow}
              >
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-white/5 rounded-xl items-center justify-center border border-white/5">
                    <Feather name="mic" size={18} color="#10b981" />
                  </View>
                  <Text className="text-white text-lg font-bold ml-4 tracking-tight">{shortcut}</Text>
                </View>
                <View className="bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                  <Text className="text-emerald-500 text-xs font-bold">Add to Siri</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.ScrollView>

      <Animated.View
        style={[{ paddingTop: HEADER_MIN_HEIGHT + 30 }, largeHeaderTitleStyle]}
        className="absolute top-0 left-6 right-6"
      >
        <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
          Siri Shortcuts
        </Text>
        <Text className="text-zinc-500 text-base mt-2 font-medium leading-relaxed">
          Access your favorite categories with just your voice.
        </Text>
      </Animated.View>
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
  }
});

export default SiriShortcutsScreen;

