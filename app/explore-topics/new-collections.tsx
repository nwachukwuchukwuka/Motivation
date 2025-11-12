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
    if (!name.trim()) return; // Prevent saving empty names
    addCollection(name.trim());
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d] justify-between">
      <View>
        <View className="flex-row items-center p-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Feather name="chevron-left" size={28} color="white" />
            <Text className="text-white text-base ml-1">Back</Text>
          </TouchableOpacity>
        </View>
        <View className="p-4">
          <Text className="text-white text-3xl font-bold">New collection</Text>
          <Text className="text-gray-400 text-base mt-2 mb-6">
            Enter a name for your new collection. You can rename it later.
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="My new collection"
            placeholderTextColor="#969da8"
            className="bg-[#3a4151] rounded-lg p-4 text-white text-lg"
          />
        </View>
      </View>
      <View className="p-4">
        <TouchableOpacity
          onPress={handleSave}
          disabled={!name.trim()}
          className={`rounded-full py-4 items-center ${
            !name.trim() ? "bg-gray-500" : "bg-white"
          }`}
        >
          <Text
            className={`font-bold text-lg ${
              !name.trim() ? "text-gray-400" : "text-black"
            }`}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewCollectionScreen;
