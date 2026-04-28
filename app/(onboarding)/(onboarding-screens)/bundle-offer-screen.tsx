import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BundleOfferScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleContinue = () => {
    router.push("/theme-selection-screen");
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between", paddingBottom: 40 }}
      >
        <View>
          <View className="mb-10">
            <Text className="text-[#E2E8F0] text-5xl font-bold tracking-tighter leading-[1.1]">
              Growth{"\n"}Essentials.
            </Text>
            <View className="w-12 h-1 bg-emerald-500 mt-6" />
          </View>

          <Text className="text-[#94A3B8] text-xl font-medium leading-relaxed mb-12">
            Invest in yourself with our exclusive 6-app bundle at a massive discount.
          </Text>

          <View className="items-center justify-center py-12">
            <View className="w-40 h-40 rounded-full bg-emerald-500/10 items-center justify-center border border-emerald-500/20 shadow-2xl shadow-emerald-500/30">
              <FontAwesome6 name="diamond" size={80} color="#10b981" />
            </View>

            <View className="bg-[#111111] rounded-[32px] p-8 mt-12 w-full border border-white/5 items-center">
              <Text className="text-white text-lg text-center font-medium leading-relaxed">
                Unlock the full potential of your self-improvement journey with one simple subscription.
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                className="mt-8 flex-row items-center bg-white/5 px-6 py-3 rounded-full border border-white/10"
              >
                <Feather name="download" size={20} color="#E2E8F0" className="mr-2" />
                <Text className="text-[#E2E8F0] text-lg font-bold ml-2">Get Bundle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mt-8">
          <TouchableOpacity
            className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
            activeOpacity={0.9}
            onPress={handleContinue}
          >
            <Text className="text-black text-lg font-bold tracking-tight">
              Continue
            </Text>
          </TouchableOpacity>
          <Text className="text-zinc-600 text-center text-xs mt-6 font-bold tracking-widest uppercase">
            Exclusive growth offer
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BundleOfferScreen;
