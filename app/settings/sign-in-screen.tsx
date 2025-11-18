import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row items-center p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center"
        >
          <Feather name="chevron-left" size={28} color="white" />
          <Text className="text-white text-xl ml-1">Settings</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 justify-center items-center p-6">
        <View className="bg-black/50 rounded-xl w-14 h-14 items-center justify-center mb-6">
          <Text className="text-white text-4xl font-bold">”</Text>
        </View>
        <Text className="text-white text-3xl font-bold text-center mb-3">
          Keep your data safe
        </Text>
        <Text className="text-white text-2xl text-center">
          Create an account so you never lose favorites, collections, and
          settings when you reinstall or switch devices
        </Text>
      </View>

      <View className="p-6 ">
        <View className="gap-4">
          <TouchableOpacity className="bg-white rounded-xl py-4 flex-row items-center justify-around">
            <AntDesign name="apple" size={24} color="black" />
            <Text className="text-black font-bold text-base ml-2">
              Sign in with Apple
            </Text>
            <View className="w-20" />
          </TouchableOpacity>
          <TouchableOpacity className="border border-white rounded-xl py-4 flex-row items-center justify-around">
            <AntDesign name="google" size={20} color="white" />
            <Text className="text-white font-bold text-base ml-2">
              Sign in with Google
            </Text>
            <View className="w-20" />
          </TouchableOpacity>
        </View>
        <Text className="text-gray-500 text-md text-center mt-[200px] mb-4">
          By signing in, you agree to our{" "}
          <Text className="underline">Terms & Conditions</Text> and{" "}
          <Text className="underline">Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
