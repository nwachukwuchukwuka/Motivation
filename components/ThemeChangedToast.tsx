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

const StoriesIcon = () => (
  <View className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center">
    <Feather name="plus" size={24} color="#10b981" />
  </View>
);

const InstagramIcon = () => (
  <View className="w-12 h-12 rounded-2xl items-center justify-center overflow-hidden">
    <Svg width="48" height="48" viewBox="0 0 60 60">
      <Defs>
        <SvgGradient id="instaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#feda75" />
          <Stop offset="50%" stopColor="#fa7e1e" />
          <Stop offset="100%" stopColor="#d62976" />
        </SvgGradient>
      </Defs>
      <Rect x="0" y="0" width="60" height="60" rx="18" fill="url(#instaGrad)" />
      <Circle cx="30" cy="30" r="12" stroke="white" strokeWidth="2.5" />
      <Circle cx="42" cy="18" r="2.5" fill="white" />
    </Svg>
  </View>
);

const FacebookIcon = () => (
  <View className="w-12 h-12 rounded-2xl bg-[#1877F2] items-center justify-center">
    <Feather name="facebook" size={24} color="white" />
  </View>
);

const ShareIcon = () => (
  <View className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center">
    <Feather name="share-2" size={20} color="white" />
  </View>
);

const SHARE_OPTIONS = [
  { name: "Stories", Icon: StoriesIcon },
  { name: "Instagram", Icon: InstagramIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Share", Icon: ShareIcon },
];

type Props = {
  visible: boolean;
};

const ThemeChangedToast = ({ visible }: Props) => {
  const translateY = useSharedValue(400);
  const opacity = useSharedValue(0);

  const insets = useSafeAreaInsets();

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

  return (
    <Animated.View
      style={[animatedStyle, { bottom: insets.bottom + 110 }]}
      className="absolute left-4 right-4 z-[100]"
    >
      <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5">
        <View className="flex-row items-center mb-6">
          <View className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shadow-sm shadow-emerald-500/50" />
          <Text className="text-white text-lg font-bold tracking-tight">
            Aesthetic updated
          </Text>
        </View>
        
        <Text className="text-zinc-500 text-sm font-medium mb-6 leading-relaxed">
          Your new theme is ready. Want to share this quote with the world?
        </Text>

        <View className="flex-row justify-between items-start px-2">
          {SHARE_OPTIONS.map((option) => (
            <TouchableOpacity key={option.name} className="items-center">
              <option.Icon />
              <Text className="text-zinc-400 text-[10px] font-bold mt-2 tracking-tight">
                {option.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

export default ThemeChangedToast;
