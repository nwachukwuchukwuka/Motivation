import React from "react";
import { Text, View } from "react-native";
import Svg, {
    Defs,
    Path,
    Rect,
    Stop,
    LinearGradient as SvgGradient,
} from "react-native-svg";

const ShelfIllustration = () => (
  <Svg width="200" height="200" viewBox="0 0 150 150">
    <Defs>
      <SvgGradient id="gradHeart" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0%" stopColor="#C97EFF" />
        <Stop offset="100%" stopColor="#F5A1BE" />
      </SvgGradient>
    </Defs>
    <Rect x="10" y="120" width="130" height="5" fill="#3a4151" />
    <Path d="M40 100 C 35 110, 55 110, 50 100 V 120 H 40 Z" fill="#4a5162" />
    <Path
      d="M45 100 C 35 90, 40 80, 45 70"
      stroke="#4a5162"
      strokeWidth="2"
      fill="none"
    />
    <Rect
      x="60"
      y="60"
      width="60"
      height="60"
      fill="#1E1E2F"
      stroke="#3a4151"
      strokeWidth="3"
    />
    <Path
      fill="url(#gradHeart)"
      d="M90 80 C 80 70, 100 70, 90 80 L 90 95 L 90 95 C 80 105, 100 105, 90 95 Z"
      transform="translate(0, -5)"
    />
    <Path d="M86 87 l4 4 l8 -8" stroke="white" strokeWidth="1.5" fill="none" />
  </Svg>
);

const FavoritesEmpty = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ShelfIllustration />
      <Text className="text-white text-2xl font-bold text-center mt-8">
        You don't have any favorites yet
      </Text>
    </View>
  );
};
export default FavoritesEmpty;
