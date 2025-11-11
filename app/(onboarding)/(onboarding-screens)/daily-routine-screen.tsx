import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, {
  Defs,
  Path,
  Stop,
  LinearGradient as SvgLinearGradient,
} from "react-native-svg";

const CheckIcon = () => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    stroke="white"
    strokeWidth={3}
    strokeLinecap="round"
  >
    <Path d="M20 6L9 17l-5-5" />
  </Svg>
);

const FlameIcon = () => (
  <View className="items-center justify-center">
    <Svg width={150} height={150} viewBox="0 0 24 24">
      <Defs>
        <SvgLinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#C97EFF" />
          <Stop offset="1" stopColor="#F5A1BE" />
        </SvgLinearGradient>
      </Defs>
      <Path
        fill="url(#grad)"
        d="M12 2c2.4 1.6 3.8 4.3 3.8 7.2 0 2.4-1.1 4.6-2.9 6.2 -1.4 1.2-3.4 2.6-3.4 4.6h-1c0-2-2-3.4-3.4-4.6C3.3 13.8 2.2 11.6 2.2 9.2c0-2.9 1.4-5.6 3.8-7.2 1.5-.9 3.2-1.2 4-1.2s2.5.3 4 1.2z M12 2c0 0 2-2 3 0s-1 4-1 4s2-2 3 0s-2 5-2 5"
        transform="translate(2, 0)"
      />
    </Svg>
    <Text className="text-white text-5xl font-bold absolute">1</Text>
  </View>
);

const DAYS = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];

const DailyRoutineScreen = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/notification-settings-screen");
  };

  return (
    <View className="flex-1 justify-between items-center p-6 bg-[#262e3d]">
      <View className="absolute">
        <LottieView
          style={{ height: 300, width: 700 }}
          source={require("../../../assets/images/Fire.json")}
          autoPlay
          loop
        />
      </View>
      <Text className="text-white text-[60px] font-bold absolute top-[230px]">1</Text>
      <View className="items-center w-full mt-72">
        {/* <FlameIcon /> */}
        
        <Text className="text-white text-3xl font-semibold text-center mt-24 max-w-md">
          Stay motivated with a consistent daily routine
        </Text>

        <View className="bg-[#3a4151] rounded-[30px] p-4 mt-8 w-full border border-gray-500">
          <View className="flex-row justify-around items-center">
            {DAYS.map((day, index) => {
              const isActive = day === "Sa";
              return (
                <View key={index} className="items-center">
                  <Text className="text-white mb-2">{day}</Text>
                  {isActive ? (
                    <LinearGradient
                      colors={["#C97EFF", "#F5A1BE"]}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 9999,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckIcon />
                    </LinearGradient>
                  ) : (
                    <View className="w-9 h-9 rounded-full bg-[#4a5162]" />
                  )}
                </View>
              );
            })}
          </View>
          <Text className="text-center text-lg text-[#dce1e8] mt-3">
            Build a streak, one day at a time
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyRoutineScreen;
