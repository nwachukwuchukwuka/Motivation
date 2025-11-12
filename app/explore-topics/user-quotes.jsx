import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Path, Text as SvgText } from "react-native-svg";

const BoxIllustration = () => (
  <Svg width="150" height="150" viewBox="0 0 100 100">
    <Path d="M20 60 L 80 60 L 80 90 L 20 90 Z" fill="#3a4151" />
    <Path d="M15 60 L 40 45 L 90 45 L 85 60 Z" fill="#4a5162" />

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

const UserQuotes = () => {
  return (
    <View className="flex-1 justify-center items-center p-6">
      <BoxIllustration />
      <Text className="text-white text-2xl font-bold text-center mt-8">
        You haven't added any quotes yet
      </Text>
      <TouchableOpacity className="bg-white rounded-full px-12 py-3 mt-8">
        <Text className="text-black font-bold text-base">Add quote</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UserQuotes;
