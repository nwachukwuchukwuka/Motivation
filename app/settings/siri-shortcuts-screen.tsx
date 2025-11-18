import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="absolute top-0 left-0 right-0 z-10 bg-[#262e3d]">
        <SafeAreaView edges={["top"]}>
          <View className="flex-row items-center justify-between p-4 h-[60px]">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex-row items-center"
            >
              <Feather name="chevron-left" size={28} color="white" />
              <Text className="text-white text-xl ml-1">Settings</Text>
            </TouchableOpacity>

            <Animated.View
              style={smallHeaderTitleStyle}
              className="absolute left-0 right-0 items-center"
            >
              <Text className="text-white text-lg font-bold">
                Add Siri Shortcuts
              </Text>
            </Animated.View>
          </View>
        </SafeAreaView>
      </View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
      >
        <View className="bg-[#3a4151]">
          {SHORTCUTS.map((shortcut, index) => {
            const isLastItem = index === SHORTCUTS.length - 1;
            return (
              <TouchableOpacity
                key={shortcut}
                className={`flex-row items-center p-4 ${
                  !isLastItem ? "border-b border-gray-600" : ""
                }`}
              >
                <Feather name="plus-circle" size={24} color="white" />
                <Text className="text-white text-xl ml-4">{shortcut}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.ScrollView>

      <Animated.View
        style={[{ paddingTop: HEADER_MIN_HEIGHT }, largeHeaderTitleStyle]}
        className="absolute top-0 left-0 right-0 px-4"
      >
        <Text className="text-white text-3xl font-bold">
          Add Siri Shortcuts
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SiriShortcutsScreen;
