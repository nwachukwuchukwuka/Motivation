import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const FreeTrialOfferScreen = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/trial-detail-screen');
  };

  return (
    <View className="flex-1 justify-between items-center px-5 bg-[#262e3d]">
      <View />
 
      <Text className="text-white text-3xl font-semibold text-center max-w-xs"> 
        We offer 3 free days of Premium access, just for you
      </Text>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handlePress}
      >
        <Text className="text-black text-lg font-bold">Try it for free</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FreeTrialOfferScreen;