import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PUSH_OPTIONS = [
  'Thinking about the future',
  'Recalling past achievements',
  'Hitting rock bottom',
  'Faith or spirituality',
  'Support from others',
  'Being inspired by someone',
];

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" stroke="black" strokeWidth={3} strokeLinecap="round">
    <Path d="M20 6L9 17l-5-5" />
  </Svg>
);

const MotivationPushScreen = () => {
  const router = useRouter();
  const [selectedPushes, setSelectedPushes] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelectedPushes((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleContinue = () => {
    // This should navigate to the next part of your app, e.g., the home screen or another onboarding step.
    // Replace '/home' with your actual destination.
    // router.push('/home');
  };

  return (
    <View className="flex-1 justify-between p-6 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-bold text-center mt-20 mb-10">
          What gives you a push when you're unmotivated?
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {PUSH_OPTIONS.map((option) => {
            const isSelected = selectedPushes.includes(option);
            return (
              <TouchableOpacity
                key={option}
                className="flex-row justify-between items-center border border-[#3a4151] rounded-full px-6 py-4 my-2"
                onPress={() => handleSelect(option)}
              >
                <Text className="text-[#969da8] text-lg">{option}</Text>
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
        </ScrollView>
      </View>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MotivationPushScreen;