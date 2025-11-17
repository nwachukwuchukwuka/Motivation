import { Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, {
  Circle,
  Defs,
  Rect,
  Stop,
  LinearGradient as SvgGradient,
} from "react-native-svg";

const FacebookStoriesIcon = () => (
  <View className="w-12 h-12 rounded-full border-2 border-dashed border-white items-center justify-center">
    <Feather name="plus" size={24} color="white" />
  </View>
);

const InstagramIcon = () => (
  <View className="w-12 h-12 rounded-full items-center justify-center">
    <Svg width="48" height="48" viewBox="0 0 60 60">
      <Defs>
        <SvgGradient id="instaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#feda75" />
          <Stop offset="50%" stopColor="#fa7e1e" />
          <Stop offset="100%" stopColor="#d62976" />
        </SvgGradient>
      </Defs>
      <Rect x="0" y="0" width="60" height="60" rx="15" fill="url(#instaGrad)" />
      <Circle cx="30" cy="30" r="14" stroke="white" strokeWidth="3" />
      <Circle cx="42" cy="18" r="3" fill="white" />
    </Svg>
  </View>
);

const FacebookIcon = () => (
  <View className="w-12 h-12 rounded-full bg-[#1877F2] items-center justify-center">
    <Feather name="facebook" size={28} color="white" />
  </View>
);

const ShareViaIcon = () => (
  <View className="w-12 h-12 rounded-full bg-white/10 items-center justify-center">
    <Feather name="share" size={24} color="white" />
  </View>
);

const SHARE_OPTIONS = [
  { name: "Facebook\nStories", Icon: FacebookStoriesIcon },
  { name: "Instagram", Icon: InstagramIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Share via...", Icon: ShareViaIcon },
];

type Props = {
  visible: boolean;
};

const ThemeChangedToast = ({ visible }: Props) => {
  const translateY = useSharedValue(-200);
  const opacity = useSharedValue(0);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, { damping: 15, stiffness: 100 });
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

  return (
    <Animated.View
      style={animatedStyle}
      className="absolute top-20 left-4 right-4 bg-[#3a4151] rounded-3xl p-4 shadow-lg"
    >
      <Text className="text-white text-base font-semibold mb-4">
        Theme changed! Want to share this quote?
      </Text>
      <View className="flex-row justify-around items-start">
        {SHARE_OPTIONS.map((option) => (
          <TouchableOpacity key={option.name} className="items-center w-1/4">
            <option.Icon />
            <Text className="text-gray-300 text-xs text-center mt-2">
              {option.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
};

export default ThemeChangedToast;
