import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TOPICS = [
    'Hard times', 'Working out', 'Productivity', 'Self-esteem',
    'Achieving goals', 'Inspiration', 'Letting go', 'Love',
    'Relationships', 'Faith & Spirituality', 'Positive thinking', 'Stress & Anxiety',
];

const ContentPreferencesScreen = () => {
    const router = useRouter();
    const [selectedTopics, setSelectedTopics] = useState<string[]>(['Hard times']); // Start with one selected for example

    const handleToggleTopic = (topic: string) => {
        setSelectedTopics(prev => 
            prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-[#262e3d]">
            {/* Header */}
            <View className="flex-row items-center p-4">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
                    <Feather name="chevron-left" size={28} color="white" />
                    <Text className="text-white text-base ml-1">Back</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <Text className="text-white text-3xl font-bold">Content preferences</Text>
                <Text className="text-gray-400 text-base mt-2 mb-6">Select all topics that interest you</Text>

                {/* Topics Grid */}
                <View className="flex-row flex-wrap -m-2">
                    {TOPICS.map(topic => {
                        const isSelected = selectedTopics.includes(topic);
                        return (
                            <View key={topic} className="w-1/2 p-2">
                                <TouchableOpacity 
                                    onPress={() => handleToggleTopic(topic)}
                                    className={`bg-[#3a4151] rounded-2xl h-24 justify-center items-center p-2 ${isSelected ? 'border-2 border-white' : ''}`}
                                >
                                    <Text className="text-white font-bold text-center text-lg">{topic}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ContentPreferencesScreen;