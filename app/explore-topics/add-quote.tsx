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
          <Text className="text-white text-4xl font-bold tracking-tight">Add new</Text>
          <Text className="text-zinc-500 text-lg mt-3 mb-10 font-medium leading-relaxed">
            Create your own inspiration. It will only be visible to you.
          </Text>
          
          <View className="gap-6">
            <View className="bg-[#111111] border border-[#222222] rounded-[32px] p-2">
              <TextInput
                value={quoteText}
                onChangeText={setQuoteText}
                placeholder="Write your quote here..."
                placeholderTextColor="#3f3f46"
                className="px-6 py-5 text-white text-xl font-bold min-h-[120px]"
                multiline
                textAlignVertical="top"
              />
            </View>

            <View className="bg-[#111111] border border-[#222222] rounded-[28px] p-2">
              <TextInput
                value={authorText}
                onChangeText={setAuthorText}
                placeholder="Author (optional)"
                placeholderTextColor="#3f3f46"
                className="px-6 py-4 text-white text-lg font-bold"
              />
            </View>
          </View>
        </View>
      </View>

      <View className="px-6 pb-10">
        <TouchableOpacity
          onPress={handleSave}
          disabled={isSaveDisabled}
          className={`rounded-[24px] py-5 items-center shadow-lg ${
            isSaveDisabled 
              ? "bg-zinc-900 border border-zinc-800" 
              : "bg-emerald-500 shadow-emerald-500/40"
          }`}
        >
          <Text
            className={`font-bold text-lg ${
              isSaveDisabled ? "text-zinc-700" : "text-white"
            }`}
          >
            Save quote
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddQuoteScreen;
