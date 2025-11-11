import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, Path, Stop, LinearGradient as SvgGradient } from 'react-native-svg';

const DoorIllustration = () => (
    <Svg width="100%" height={200} viewBox="0 0 150 150">
        <Defs>
            <SvgGradient id="gradDoor" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#C97EFF" />
                <Stop offset="1" stopColor="#F5A1BE" />
            </SvgGradient>
        </Defs>
        <Path fill="url(#gradDoor)" d="M50 50 A 25 25 0 0 1 100 50 L 100 120 L 50 120 Z" />
        <Path fill="#4a5162" d="M45 120 L 105 120 L 115 135 L 35 135 Z" />
        <Path fill="#4a5162" d="M35 135 L 115 135 L 120 145 L 30 145 Z" />
    </Svg>
);

const LastChanceOfferScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-between p-6 bg-[#262e3d]">
       <TouchableOpacity onPress={() => router.back()} className="absolute top-16 left-6 z-10">
        <Text className="text-[#969da8] text-base">Cancel</Text>
      </TouchableOpacity>

      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-3xl font-bold">Last chance!</Text>
        <View className="my-6">
            <DoorIllustration />
        </View>

        <Text className="text-white text-4xl font-extrabold">Exclusive -107% discount</Text>
        <View className="mt-6 w-full px-4 space-y-3">
          <View className="flex-row items-center">
            <Feather name="check-circle" size={20} color="#34D399" />
            <Text className="text-[#969da8] text-base ml-3">Enjoy the full experience</Text>
          </View>
          <View className="flex-row items-center">
            <Feather name="check-circle" size={20} color="#34D399" />
            <Text className="text-[#969da8] text-base ml-3">Quotes you can't find anywhere else</Text>
          </View>
           <View className="flex-row items-center">
            <Feather name="check-circle" size={20} color="#34D399" />
            <Text className="text-[#969da8] text-base ml-3">Categories for any situation</Text>
          </View>
           <View className="flex-row items-center">
            <Feather name="check-circle" size={20} color="#34D399" />
            <Text className="text-[#969da8] text-base ml-3">Original, customizable themes</Text>
          </View>
           <View className="flex-row items-center">
            <Feather name="check-circle" size={20} color="#34D399" />
            <Text className="text-[#969da8] text-base ml-3">Only ₦1,241.66/month, billed annually</Text>
          </View>
        </View>
      </View>

      <View>
         <Text className="text-center text-[#969da8] text-sm">
            Only <Text className="font-bold">₦7,200.00</Text> <Text className="line-through">₦14,900.00</Text>/year
         </Text>
        <TouchableOpacity className="w-full rounded-full overflow-hidden mt-3">
          <LinearGradient
            colors={['#C97EFF', '#F5A1BE']}
            className="py-4 items-center justify-center"
          >
            <Text className="text-black text-lg font-bold">Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View className="flex-row justify-center space-x-6 mt-4">
          <TouchableOpacity><Text className="text-[#969da8] text-sm">Restore</Text></TouchableOpacity>
          <TouchableOpacity><Text className="text-[#969da8] text-sm">Terms & Conditions</Text></TouchableOpacity>
          <TouchableOpacity><Text className="text-[#969da8] text-sm">Other</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LastChanceOfferScreen;