import { View } from "react-native";
import Svg, {
  Circle,
  Defs,
  Path,
  Rect,
  Stop,
  LinearGradient as SvgGradient,
  Text as SvgText,
} from "react-native-svg";

export const ShelfIllustration = () => (
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

export const BookIllustration = () => (
  <Svg width="150" height="150" viewBox="0 0 100 100">
    <Path d="M15 80 L 85 80 L 90 70 L 20 70 Z" fill="#3a4151" />
    <Path d="M20 70 L 90 70 L 90 50 L 20 50 Z" fill="#4a5162" />
    <Path d="M25 55 L 45 55" stroke="#3a4151" strokeWidth="2" />
    <Path d="M25 60 L 65 60" stroke="#3a4151" strokeWidth="2" />
    <Path d="M25 65 L 55 65" stroke="#3a4151" strokeWidth="2" />

    <Path d="M10 50 L 80 50 L 85 40 L 15 40 Z" fill="#3a4151" />
    <Path d="M15 40 L 85 40 L 85 20 L 15 20 Z" fill="#4a5162" />
    <Path d="M20 25 L 40 25" stroke="#3a4151" strokeWidth="2" />
    <Path d="M20 30 L 60 30" stroke="#3a4151" strokeWidth="2" />
    <Path d="M20 35 L 50 35" stroke="#3a4151" strokeWidth="2" />
    <Circle cx="50" cy="30" r="10" fill="#262e3d" />
    <SvgText
      x="50"
      y="35"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      ”
    </SvgText>
  </Svg>
);

export const BoxIllustration = () => (
  <Svg width="150" height="150" viewBox="0 0 100 100">
    <Path d="M20 60 L 80 60 L 80 90 L 20 90 Z" fill="#3a4151" />
    <Path d="M15 60 L 40 45 L 90 45 L 85 60 Z" fill="#4a4152" />
    <SvgText
      x="45"
      y="40"
      fill="white"
      fontSize="20"
      fontWeight="bold"
      transform="rotate(-15 45 40)"
    >
      ”
    </SvgText>
    <SvgText x="60" y="30" fill="white" fontSize="20" fontWeight="bold">
      ”
    </SvgText>
    <SvgText x="35" y="50" fill="white" fontSize="14" fontWeight="bold">
      ”
    </SvgText>
  </Svg>
);

export const PhoneIllustration = () => (
  <Svg width="100" height="70" viewBox="0 0 100 70">
    <Defs>
      <SvgGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0%" stopColor="#C97EFF" />
        <Stop offset="100%" stopColor="#F5A1BE" />
      </SvgGradient>
    </Defs>
    <Rect
      x="10"
      y="5"
      width="80"
      height="60"
      rx="10"
      fill="#3a4151"
      transform="rotate(15 50 35)"
    />
    <Rect
      x="15"
      y="10"
      width="70"
      height="50"
      rx="5"
      fill="url(#grad)"
      transform="rotate(15 50 35)"
    />
  </Svg>
);


export const PremiumBgIllustration = () => (
  <View className="absolute bottom-0 left-0 right-0 h-64">
    <Svg
      height="100%"
      width="100%"
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <Defs>
        <SvgGradient id="skyGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <Stop offset="0%" stopColor="#4a5162" stopOpacity="0" />
          <Stop offset="100%" stopColor="#3a4151" stopOpacity="1" />
        </SvgGradient>
      </Defs>
      <Rect x="0" y="0" width="300" height="200" fill="url(#skyGrad)" />
      <Circle cx="150" cy="180" r="100" fill="#EAE5E0" fillOpacity="0.1" />
      <Circle cx="150" cy="190" r="100" fill="#262e3d" />
    </Svg>
  </View>
);


