import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SHORTCUTS = ['General', 'Morning', 'Positive', 'Love', 'Work', 'Sports', 'Workout'];

const SiriShortcutsScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-[#262e3d]">
            {/* Header */}
            <View className="flex-row items-center p-4">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
                    <Feather name="chevron-left" size={28} color="white" />
                    <Text className="text-white text-base ml-1">Back</Text>
                </TouchableOpacity>
            </View>

            <Text className="text-white text-3xl font-bold px-4 mb-8">Add Siri Shortcuts</Text>
            
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                <View className="bg-[#3a4151] rounded-2xl">
                    {SHORTCUTS.map((shortcut, index) => {
                        const isLastItem = index === SHORTCUTS.length - 1;
                        return (
                            <TouchableOpacity
                                key={shortcut}
                                className={`flex-row items-center p-4 ${!isLastItem ? 'border-b border-gray-600' : ''}`}
                            >
                                <Feather name="plus-circle" size={24} color="white" />
                                <Text className="text-white text-lg ml-4">{shortcut}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SiriShortcutsScreen;