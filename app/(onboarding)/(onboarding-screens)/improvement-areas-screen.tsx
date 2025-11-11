import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const CheckIcon = () => (
  <Feather name="check" size={16} color="black" />
);

const IMPROVEMENT_OPTIONS = [
  { 
    name: 'Stress & anxiety', 
    iconName: 'brain',
    IconLib: MaterialCommunityIcons 
  },
  { 
    name: 'Positive thinking', 
    iconName: 'smile', 
    IconLib: Feather 
  },
  { 
    name: 'Self-esteem', 
    iconName: 'award',
    IconLib: Feather 
  },
  { 
    name: 'Achieving goals', 
    iconName: 'mountain',
    IconLib: FontAwesome5 
  },
  { 
    name: 'Relationships', 
    iconName: 'user-friends',
    IconLib: FontAwesome5 
  },
  { 
    name: 'Faith & spirituality', 
    iconName: 'praying-hands',
    IconLib: FontAwesome5 
  },
];

const ImprovementAreasScreen = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const handleContinue = () => {
    router.push('/achieve-goals-screen');
  };

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          What do you want to improve?
        </Text>

        {IMPROVEMENT_OPTIONS.map(({ name, iconName, IconLib }) => {
          const isSelected = selected.includes(name);
          return (
            <TouchableOpacity
              key={name}
              className={`flex-row justify-between items-center rounded-full px-6 py-4 my-2 border ${
                isSelected ? 'bg-[#333b4f] border-gray-300' : 'bg-transparent border-[#3a4151]'
              }`}
              onPress={() => handleSelect(name)}
            >
              <View className="flex-row items-center">
                <IconLib name={iconName as any} size={24} color={isSelected ? 'white' : '#969da8'} />
                <Text className={`text-lg ml-4 ${isSelected ? 'text-white' : 'text-[#969da8]'}`}>
                  {name}
                </Text>
              </View>

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

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4 mt-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImprovementAreasScreen;
