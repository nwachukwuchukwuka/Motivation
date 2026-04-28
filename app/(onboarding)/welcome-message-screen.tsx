import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useAppContext } from "@/context/context";

const WelcomeMessageScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { themeSource } = useAppContext();
  const { userName } = useLocalSearchParams<{ userName: string }>();
  
  const name = userName ? `, ${userName}` : "";

  const handleContinue = () => {
    router.replace('/personalization-intro-screen');
  };

  const isImageBackground = typeof themeSource === 'object' && themeSource.uri;

  const OverlayContent = () => (
    <View className="flex-1 justify-between px-8" style={{ paddingTop: insets.top + 80, paddingBottom: insets.bottom + 40 }}>
      <View>
        <Text className="text-[#E2E8F0] text-5xl font-bold tracking-tighter leading-[1.1]">
          You are exactly where you are meant to be{name}.
        </Text>
        <View className="w-12 h-1 bg-emerald-500 mt-8" />
      </View>

      <View>
        <TouchableOpacity
          className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
          activeOpacity={0.9}
          onPress={handleContinue}
        >
          <Text className="text-black text-lg font-bold tracking-tight">
            Continue
          </Text>
        </TouchableOpacity>
        <Text className="text-white/40 text-center text-xs mt-6 font-bold tracking-widest uppercase">
          Your journey begins now
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      {isImageBackground ? (
        <ImageBackground
          source={themeSource}
          resizeMode="cover"
          className="flex-1"
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
            className="flex-1"
          >
            <OverlayContent />
          </LinearGradient>
        </ImageBackground>
      ) : (
        <View
          className="flex-1"
          style={{
            backgroundColor: typeof themeSource === 'object' ? themeSource.color : '#050505',
          }}
        >
          <OverlayContent />
        </View>
      )}
    </View>
  );
};

export default WelcomeMessageScreen;