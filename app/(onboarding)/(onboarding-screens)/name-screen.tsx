import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NameScreen = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#050505]"
    >
      <View className="flex-1 px-8 pt-36 justify-between" style={{ paddingBottom: insets.bottom + 20 }}>
        <View>
          <View className="mb-12">
            <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-[1.1]">
              What should we call you?
            </Text>
            <View className="w-12 h-1 bg-emerald-500 mt-6" />
          </View>

          <View className="bg-[#111111] rounded-[28px] p-6 border border-white/5">
            <TextInput
              className="text-white text-2xl font-bold tracking-tight"
              placeholder="Your name"
              placeholderTextColor="#52525b"
              value={name}
              onChangeText={setName}
              selectionColor="#10b981"
            />
          </View>
          <Text className="text-zinc-500 text-sm font-medium mt-4 ml-2">
            Your name helps us personalize your daily motivation journey.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            className={`w-full py-5 rounded-[24px] items-center justify-center ${name.trim() ? "bg-emerald-500" : "bg-white/5 opacity-50"
              }`}
            disabled={!name.trim()}
            activeOpacity={0.9}
            onPress={() => router.push({
              pathname: "/gender-screen",
              params: { userName: name }
            })}
          >
            <Text className={`text-lg font-bold tracking-tight ${name.trim() ? "text-black" : "text-zinc-500"}`}>
              Continue
            </Text>
          </TouchableOpacity>
          <Text className="text-zinc-600 text-center text-xs mt-6 font-bold tracking-widest uppercase">
            Setting up your identity
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NameScreen;
