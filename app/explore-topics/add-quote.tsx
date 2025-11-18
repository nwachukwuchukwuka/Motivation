import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddQuoteScreen = () => {
  const router = useRouter();
  const { addUserQuote } = useAppContext();
  const [quoteText, setQuoteText] = useState("");
  const [authorText, setAuthorText] = useState("");

  const handleSave = () => {
    if (!quoteText.trim()) return;
    addUserQuote({ text: quoteText, author: authorText });
    router.back();
  };

  const isSaveDisabled = !quoteText.trim();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d] justify-between">
      <View>
        <View className="flex-row items-center p-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Feather name="chevron-left" size={28} color="white" />
            <Text className="text-white text-xl ml-1">Back</Text>
          </TouchableOpacity>
        </View>
        <View className="p-4">
          <Text className="text-white text-3xl font-bold">Add new</Text>
          <Text className="text-white text-xl mt-4 mb-6">
            Add your own quote. It will only be visible to you.
          </Text>
          <View className="gap-4">
            <TextInput
              value={quoteText}
              onChangeText={setQuoteText}
              placeholder="Quote"
              placeholderTextColor="#969da8"
              className="bg-[#3a4151] rounded-lg p-4 text-white text-lg"
              multiline
            />
            <TextInput
              value={authorText}
              onChangeText={setAuthorText}
              placeholder="Author (optional)"
              placeholderTextColor="#969da8"
              className="bg-[#3a4151] rounded-lg p-4 text-white text-lg"
            />
          </View>
        </View>
      </View>
      <View className="p-4 absolute bottom-10 left-0 right-0 p-4">
        <TouchableOpacity
          onPress={handleSave}
          disabled={isSaveDisabled}
          className={`rounded-full py-4 items-center ${
            isSaveDisabled ? "bg-gray-500" : "bg-white"
          }`}
        >
          <Text
            className={`font-bold text-lg ${
              isSaveDisabled ? "text-gray-400" : "text-black"
            }`}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddQuoteScreen;
