import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const OPTIONS = ["Yes, I've seen it happen", "I'm open to it", 'Not really'];

const ThoughtRealityScreen = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setTimeout(() => {
      router.push('/positive-thinking-screen');
    }, 400);
  };

  return (
    <View className="flex-1 px-5 pt-24 bg-[#262e3d]">
      <Text className="text-white text-3xl font-semibold text-center mb-6">
        Do you believe thoughts help shape your reality?
      </Text>

      <View className="mb-8">
        {OPTIONS.map(option => {
          const isSelected = selectedOption === option;
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
              <Text
                className={`text-lg ${
                  isSelected ? 'text-white' : 'text-[#969da8]'
                }`}
              >
                {option}
              </Text>

              <View
                className={`w-6 h-6 rounded-full ${
                  isSelected
                    ? 'border-[3px] border-gray-300'
                    : 'border-[2px] border-[#969da8]'
                }`}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ThoughtRealityScreen;
