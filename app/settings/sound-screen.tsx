import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SoundScreen = () => {
    const router = useRouter();
    const [volume, setVolume] = useState(0.5); // 0 to 1

    return (
        <SafeAreaView className="flex-1 bg-[#262e3d]">
            {/* Header */}
            <View className="flex-row items-center p-4">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
                    <Feather name="chevron-left" size={28} color="white" />
                    <Text className="text-white text-base ml-1">Preferences</Text>
                </TouchableOpacity>
            </View>

            <View className="p-4">
                <Text className="text-white text-3xl font-bold">Sound</Text>
                <Text className="text-gray-400 text-base mt-2 mb-12">Set the volume you'd like</Text>

                <View className="bg-[#3a4151] rounded-2xl p-6">
                    <Text className="text-gray-400 text-sm font-bold tracking-widest">THEME SOUND</Text>
                    <Slider
                        style={{ width: '100%', height: 40, marginTop: 10 }}
                        minimumValue={0}
                        maximumValue={1}
                        value={volume}
                        onValueChange={setVolume}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#5a6172"
                        thumbTintColor="#FFFFFF"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SoundScreen;