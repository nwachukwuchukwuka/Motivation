import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const OPTIONS = [
  'Healing from my past',
  'Setting goals for my future',
  'Transforming my relationships',
  'Advancing my work and career',
  'Improving my financial situation',
  'Other',
];

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" stroke="black" strokeWidth={3} strokeLinecap="round">
    <Path d="M20 6L9 17l-5-5" />
  </Svg>
);

const AvoidanceConfrontationScreen = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const handleContinue = () => {
    router.push('/improvement-areas-screen');
  };

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          Been avoiding anything you really should confront?
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {OPTIONS.map(option => {
            const isSelected = selected.includes(option);
            return (
              <TouchableOpacity
                key={option}
                className={`flex-row justify-between items-center rounded-full px-6 py-4 my-2 border ${
                  isSelected
                    ? 'bg-[#333b4f] border-gray-300'
                    : 'bg-transparent border-[#3a4151]'
                }`}
                onPress={() => handleSelect(option)}
              >
                <Text className={`text-lg ${isSelected ? 'text-white' : 'text-[#969da8]'}`}>
                  {option}
                </Text>

                <View
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    isSelected ? 'border-[3px] border-gray-300 bg-white' : 'border-2 border-[#969da8]'
                  }`}
                >
                  {isSelected && <CheckIcon />}
                </View>
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

export default AvoidanceConfrontationScreen;
