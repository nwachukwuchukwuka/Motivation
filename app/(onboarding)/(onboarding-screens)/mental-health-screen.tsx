import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const MENTAL_HEALTH_OPTIONS = [
  'Exercise and nutrition',
  'Support from others',
  'Spending time in nature',
  'Journaling',
  'Therapy',
  'Meditation',
];

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" stroke="black" strokeWidth={3} strokeLinecap="round">
    <Path d="M20 6L9 17l-5-5" />
  </Svg>
);

const MentalHealthScreen = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const handleContinue = () => {
    router.push('/motivation-habit-screen');
  };

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-bold text-center mb-2">
          How do you improve your mental health?
        </Text>
        <Text className="text-[#969da8] text-base text-center mb-6">
          You can select more than one option
        </Text>
        <View>
          {MENTAL_HEALTH_OPTIONS.map(option => {
            const isSelected = selected.includes(option);
            return (
              <TouchableOpacity
                key={option}
                className={`flex-row justify-between items-center rounded-full px-6 py-4 my-2 border ${
                  isSelected ? "bg-[#333b4f] border-gray-300" : "border-[#3a4151]"
                }`}
                onPress={() => handleSelect(option)}
                activeOpacity={0.8}
              >
                <Text className={`text-lg ${isSelected ? "text-white" : "text-[#969da8]"}`}>{option}</Text>
                {isSelected ? (
                  <View className="w-6 h-6 rounded-full bg-white items-center justify-center">
                    <CheckIcon />
                  </View>
                ) : (
                  <View className="w-6 h-6 rounded-full border-2 border-[#969da8]" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
        activeOpacity={0.8}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MentalHealthScreen;
