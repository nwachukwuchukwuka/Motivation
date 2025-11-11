import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Path, Text as SvgText } from "react-native-svg";

const BookIllustration = () => (
  <Svg width="150" height="150" viewBox="0 0 100 100">
    <Path d="M20 70 L 80 70 L 85 60 L 25 60 Z" fill="#4a5162" />
    <Path d="M25 60 L 85 60 L 85 40 L 25 40 Z" fill="#3a4151" />
    <Path d="M30 48 L 35 48" stroke="#969da8" strokeWidth="2" />
    <Path d="M30 52 L 50 52" stroke="#969da8" strokeWidth="2" />
    <Path d="M20 55 L 80 55 L 85 45 L 25 45 Z" fill="#4a5162" />
    <Path d="M25 45 L 85 45 L 85 25 L 25 25 Z" fill="#3a4151" />

    <SvgText x="40" y="38" fill="white" fontSize="12" fontWeight="bold">
      ”
    </SvgText>
  </Svg>
);

const CollectionsEmpty = () => {
  return (
    <View className="flex-1 justify-center items-center p-6">
      <BookIllustration />
      <Text className="text-white text-2xl font-bold text-center mt-8">
        You don't have any collections yet
      </Text>
      <Text className="text-[#969da8] text-base text-center mt-4 max-w-xs">
        Create collections to group quotes you want to save together, like
        'Loving myself' or 'Reaching my goals'.
      </Text>
      <TouchableOpacity className="bg-white rounded-full px-8 py-3 mt-8">
        <Text className="text-black font-bold text-base">
          Create collection
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CollectionsEmpty;
