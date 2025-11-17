// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Feather } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const VOICES = [
//     { name: 'Gordon', region: 'en-AU' }, { name: 'Karen', region: 'en-AU' }, { name: 'Catherine', region: 'en-AU' },
//     { name: 'Rocko', region: 'en-GB' }, { name: 'Shelley', region: 'en-GB' }, { name: 'Martha', region: 'en-GB' },
//     { name: 'Daniel', region: 'en-GB' }, { name: 'Grandma', region: 'en-GB' }, { name: 'Grandpa', region: 'en-GB' },
//     { name: 'Flo', region: 'en-GB' }, { name: 'Eddy', region: 'en-GB' }, { name: 'Reed', region: 'en-GB' },
// ];

// const VoiceScreen = () => {
//     const router = useRouter();
//     const [selectedVoice, setSelectedVoice] = useState('Gordon');

//     return (
//         <SafeAreaView className="flex-1 bg-[#262e3d]">
//             {/* Header */}
//             <View className="flex-row items-center p-4">
//                 <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
//                     <Feather name="chevron-left" size={28} color="white" />
//                     <Text className="text-white text-base ml-1">Preferences</Text>
//                 </TouchableOpacity>
//             </View>

//             <Text className="text-white text-3xl font-bold px-4">Voice</Text>
            
//             <ScrollView contentContainerStyle={{ padding: 16 }}>
//                 <View className="bg-[#3a4151] rounded-2xl">
//                     {VOICES.map((voice, index) => {
//                         const isSelected = selectedVoice === voice.name;
//                         const isLastItem = index === VOICES.length - 1;
//                         return (
//                             <TouchableOpacity
//                                 key={voice.name}
//                                 onPress={() => setSelectedVoice(voice.name)}
//                                 className={`flex-row justify-between items-center p-4 ${!isLastItem ? 'border-b border-gray-600' : ''}`}
//                             >
//                                 <View>
//                                     <Text className="text-white text-lg">{voice.name}</Text>
//                                     <Text className="text-gray-400 text-sm">{voice.region}</Text>
//                                 </View>
//                                 <View className="w-6 h-6 rounded-full border-2 items-center justify-center ${isSelected ? 'bg-white border-white' : 'border-gray-500'}`}>
//                                 </View>
//                             </TouchableOpacity>
//                         );
//                     })}
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default VoiceScreen;

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Voice = () => {
  return (
    <View>
      <Text>Voice</Text>
    </View>
  )
}

export default Voice

const styles = StyleSheet.create({})