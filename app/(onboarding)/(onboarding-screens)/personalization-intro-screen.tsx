import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, {
    Defs,
    Path,
    Rect,
    Stop,
    LinearGradient as SvgGradient,
} from "react-native-svg";

const ShelfIllustration = () => (
  <Svg width="100%" height={250} viewBox="0 0 300 150">
    <Defs>
      <SvgGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor="#C97EFF" />
        <Stop offset="1" stopColor="#F5A1BE" />
      </SvgGradient>
    </Defs>
    {/* Shelf */}
    <Rect x="20" y="100" width="260" height="5" fill="#3a4151" />
    {/* Back wall lines */}
    <Path
      d="M0 20 H300 M0 40 H300 M0 60 H300 M0 80 H300"
      stroke="#3a4151"
      strokeWidth="2"
    />
    {/* Vases */}
    <Path d="M230 70 C 230 60, 250 60, 250 70 V 100 H 230 Z" fill="#3a4151" />
    <Path d="M260 80 C 255 70, 275 70, 270 80 V 100 H 260 Z" fill="#3a4151" />
    {/* Left Frame */}
    <Rect
      x="80"
      y="60"
      width="50"
      height="40"
      fill="#1E1E2F"
      stroke="#3a4151"
      strokeWidth="3"
    />
    {/* <Text x="105" y="85" fill="white" fontSize="20" textAnchor="middle" fontWeight="bold">”</Text> */}
    {/* Right Frame (Gradient) */}
    <Rect
      x="140"
      y="50"
      width="50"
      height="50"
      fill="url(#grad)"
      stroke="#3a4151"
      strokeWidth="3"
    />
    {/* <Text x="155" y="75" fill="white" fontSize="20" textAnchor="middle" fontWeight="bold">”</Text> */}
  </Svg>
);

const PersonalizationIntroScreen = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/inspiring-quotes-screen");
  };

  return (
    <View className="flex-1 justify-between items-center px-5 bg-[#262e3d]">
      <View className="flex-1 justify-center items-center w-full">
        <ShelfIllustration />
        <Text className="text-white text-3xl font-semibold text-center mt-8 max-w-sm">
          Answer a few questions to get personalized quotes
        </Text>
      </View>

      <TouchableOpacity
        className="w-full rounded-full overflow-hidden mb-4"
        onPress={handlePress}
      >
        <LinearGradient
          colors={["#C97EFF", "#F5A1BE"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            paddingVertical: 16,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999, 
          }}
        >
          <Text className="text-black text-lg font-bold">Let's do it</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalizationIntroScreen;
