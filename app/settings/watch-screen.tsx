import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WatchScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-[#262e3d]">
            {/* Header */}
            <View className="flex-row justify-between items-center px-4 py-2">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
                    <Feather name="chevron-left" size={28} color="white" />
                    <Text className="text-white text-base ml-1">Motivation</Text>
                </TouchableOpacity>
                <Text className="text-white text-lg font-bold">Watch</Text>
                <TouchableOpacity>
                    <Feather name="share" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ padding: 16, alignItems: 'center' }}>
                {/* Watch Face Mockup */}
                <View className="w-64 aspect-[3/4] bg-black rounded-[48px] border-4 border-gray-700 p-6 items-center justify-center mt-8">
                    <View className="flex-row items-center justify-between w-full">
                        <View className="items-center">
                            <Text className="text-gray-400 text-xs">FRI</Text>
                            <Text className="text-white text-2xl font-bold">23</Text>
                        </View>
                        <Text className="text-white text-5xl font-bold">11:11</Text>
                    </View>
                    <Text className="text-white text-center text-lg mt-4">
                        Choose people who choose you
                    </Text>
                </View>

                {/* Settings */}
                <View className="w-full mt-12 space-y-4">
                    <TouchableOpacity className="bg-[#3a4151] rounded-2xl p-4 flex-row justify-between items-center">
                        <Text className="text-white text-lg">Type of quotes</Text>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-1">General</Text>
                            <Feather name="chevron-right" size={20} color="#969da8" />
                        </View>
                    </TouchableOpacity>
                    <Text className="text-gray-400 text-center text-sm px-4">
                        The selected category applies to all content on your Watch: face, complications, widgets, and app.
                    </Text>
                </View>

            </ScrollView>

            {/* Footer Buttons */}
            <View className="p-4 border-t border-t-gray-700">
                <TouchableOpacity className="bg-white w-full py-4 rounded-full items-center justify-center">
                    <Text className="text-black text-lg font-bold">Set as Watch face</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-4">
                    <Text className="text-white text-center font-semibold">Get more instructions</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default WatchScreen;