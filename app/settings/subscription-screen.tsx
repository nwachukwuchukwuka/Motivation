import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SubscriptionScreen = () => {
  const router = useRouter();

  const features = [
    { icon: "shield", text: "Ad-free experience" },
    { icon: "image", text: "Unlock all premium themes" },
    { icon: "layers", text: "Access all 50+ categories" },
    { icon: "zap", text: "Priority access to new content" },
  ];

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

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-8">
          <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
            Elevate your mindset
          </Text>
        </View>

        {/* Status Card */}
        <View className="px-6 mt-10">
          <View
            className="bg-[#111111] rounded-[32px] p-8 border border-white/5 relative overflow-hidden"
            style={styles.cardShadow}
          >
            <View className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl" />
            <Text className="text-emerald-500 text-[10px] font-bold tracking-tight mb-4">Current plan</Text>
            <Text className="text-white text-3xl font-bold tracking-tight">Free Member</Text>
            <Text className="text-zinc-300 text-sm mt-4 leading-relaxed font-medium">
              You are currently using the free version of Motivation. Experience the full potential of your mindset with our premium suite.
            </Text>
          </View>
        </View>

        {/* Features List */}
        <View className="px-8 mt-12">
          <Text className="text-white text-lg font-bold mb-8 tracking-tight">Premium Benefits</Text>
          <View className="gap-6">
            {features.map((feature, index) => (
              <View key={index} className="flex-row items-center">
                <View className="w-10 h-10 bg-emerald-500/10 rounded-xl items-center justify-center border border-emerald-500/10">
                  <Feather name={feature.icon as any} size={18} color="#10b981" />
                </View>
                <Text className="text-white text-base ml-4 font-bold tracking-tight">{feature.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View className="absolute bottom-10 left-0 px-5 right-0">
        <TouchableOpacity
          onPress={() => router.push("/free-trial-details-screen")}
          className="bg-emerald-500 p-3 rounded-[24px] items-center justify-center border border-white/10 px-8"
          style={styles.emeraldShadow}
        >
          <Text className="text-black font-bold text-xl tracking-tight">Upgrade to Premium</Text>
        </TouchableOpacity>
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
  },
  emeraldShadow: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 10,
  }
});

export default SubscriptionScreen;
