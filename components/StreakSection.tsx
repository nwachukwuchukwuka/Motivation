import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Image, Share, Text, TouchableOpacity, View } from "react-native";

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const StreakSection = () => {
  const router = useRouter();

  const currentDayIndex = new Date().getDay();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `share message`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with:", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share sheet was dismissed");
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View className="px-4 mt-4">
      <View className="bg-[#3a4151] rounded-2xl p-4 flex-row items-center">
        <View className="relative">
          <Image
            source={require("../assets/images/fire-img.png")}
            className="w-[80] h-[80]"
            resizeMode="contain"
          />
          <Text className=" absolute -bottom-2  left-[35px] text-xl text-white ">
            1
          </Text>
        </View>

        <View className="flex-1 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-white font-bold text-lg">Your streak</Text>
            <View className="flex-row items-center gap-4">
              <TouchableOpacity onPress={onShare}>
                <Feather name="share" size={20} color="#969da8" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/settings/streak-screen")}
              >
                <Feather name="more-vertical" size={20} color="#969da8" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between mt-2">
            {DAYS_OF_WEEK.map((day, index) => {
              const isActive = index === currentDayIndex;
              return (
                <View key={index} className="items-center">
                  <Text className="text-white mb-2">{day}</Text>
                  {isActive ? (
                    <LinearGradient
                      colors={["#C97EFF", "#F5A1BE"]}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 9999,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="check" size={14} color="white" />
                    </LinearGradient>
                  ) : (
                    <View className="w-[25px] h-[25px] rounded-full bg-[#4a5162]" />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default StreakSection;
