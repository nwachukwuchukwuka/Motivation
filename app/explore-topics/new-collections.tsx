import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewCollectionScreen = () => {
  const router = useRouter();
  const { addCollection } = useAppContext();
  const [name, setName] = useState("");

  const handleSave = () => {
    if (!name.trim()) return;
    addCollection(name.trim());
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#050505] justify-between">
      <View>
        <View className="flex-row items-center px-6 py-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-[#222222]"
          >
            <Feather name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        
        <View className="px-10 mt-4">
          <Text className="text-white text-4xl font-bold tracking-tight">New collection</Text>
          <Text className="text-zinc-500 text-lg mt-3 mb-10 font-medium leading-relaxed">
            Give your collection a name. You can always change it later.
          </Text>
          
          <View className="bg-[#111111] border border-[#222222] rounded-[28px] p-2">
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="e.g., Morning Motivation"
              placeholderTextColor="#3f3f46"
              className="px-6 py-5 text-white text-xl font-bold"
              autoFocus
            />
          </View>
        </View>
      </View>

      <View className="px-6 pb-10">
        <TouchableOpacity
          onPress={handleSave}
          disabled={!name.trim()}
          className={`rounded-[24px] py-5 items-center shadow-lg ${
            !name.trim() 
              ? "bg-zinc-900 border border-zinc-800" 
              : "bg-emerald-500 shadow-emerald-500/40"
          }`}
        >
          <Text
            className={`font-bold text-lg ${
              !name.trim() ? "text-zinc-700" : "text-white"
            }`}
          >
            Save collection
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewCollectionScreen;
