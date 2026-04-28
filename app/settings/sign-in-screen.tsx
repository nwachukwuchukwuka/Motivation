import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5"
          style={styles.cardShadow}
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center mr-10">
          <Text className="text-white text-xl font-bold tracking-tight">
            Account
          </Text>
        </View>
      </View>

      <View className="flex-1 justify-center items-center px-8">
        <View
          className="bg-[#111111] w-20 h-20 rounded-[32px] items-center justify-center mb-10 border border-white/5"
          style={styles.cardShadow}
        >
          <Feather name="shield" size={32} color="#10b981" />
        </View>
        <Text className="text-white text-4xl font-bold text-center tracking-tighter leading-tight">
          Keep your{"\n"}mindset safe
        </Text>
        <Text className="text-zinc-500 text-lg text-center mt-6 leading-relaxed font-medium">
          Create an account to sync your favorites, collections, and settings across all your devices.
        </Text>
      </View>

      <View className="px-6 pb-12">
        <View className="gap-4">
          <TouchableOpacity
            className="bg-white h-[64px] rounded-[24px] flex-row items-center justify-center px-6"
            style={styles.cardShadow}
          >
            <AntDesign name="apple" size={24} color="black" />
            <Text className="text-black font-bold text-lg ml-3 tracking-tight">
              Sign in with Apple
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#111111] h-[64px] rounded-[24px] flex-row items-center justify-center px-6 border border-white/5"
            style={styles.cardShadow}
          >
            <AntDesign name="google" size={20} color="white" />
            <Text className="text-white font-bold text-lg ml-3 tracking-tight">
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-zinc-600 text-xs text-center mt-12 px-4 leading-relaxed font-medium">
          By signing in, you agree to our{" "}
          <Text className="text-zinc-400 underline">Terms & Conditions</Text> and{" "}
          <Text className="text-zinc-400 underline">Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  }
});

export default SignInScreen;

