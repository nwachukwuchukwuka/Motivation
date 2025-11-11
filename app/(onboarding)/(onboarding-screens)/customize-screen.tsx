import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomizeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-1 justify-between items-center">
        <Image
          source={require("../../../assets/images/bitcoin.png")}
          className=" w-[40%] h-[40%] rounded-full "
          resizeMode="contain"
        />

        <View className="w-full px-5">
          <Text className="text-white text-3xl font-semibold text-center leading-tight mb-24">
            Customize the app to improve your experience
          </Text>

          <TouchableOpacity
            className="w-full rounded-full"
            activeOpacity={0.8}
            onPress={() => router.push("/age-screen")}
          >
            <LinearGradient
              colors={["#ab92f4", "#f0a3b2"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{
                paddingVertical: 16,
                borderRadius: 9999,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text className="text-black text-lg font-semibold text-center">
                Continue
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomizeScreen;
