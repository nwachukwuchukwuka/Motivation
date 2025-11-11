import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

const FreeTrialDetailsScreen = () => {
  const router = useRouter();
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);

  return (
    <View className="flex-1  px-5 pt-24 bg-[#262e3d]">
      <TouchableOpacity
        onPress={() => router.replace('/widget-install-screen')}
        className="absolute top-3 left-6 z-10"
      >
        <Feather name="x" size={28} color="gray" />
      </TouchableOpacity>

      <View>
        <Text className="text-white text-3xl font-semibold text-center">
          How your free trial works
        </Text>
        <Text className="text-[#dee1e5] text-lg text-center mt-2">
          You won’t be charged anything today
        </Text>

        <View className="bg-[#3a4151] rounded-2xl p-6 mt-8 flex-row">
          <View className="items-center mr-4 gap-9">
            <View className="w-10 h-10 bg-black/20 rounded-full items-center justify-center">
              <Feather name="lock" size={20} color="#C97EFF" />
            </View>
            <LinearGradient
              colors={["#C97EFF", "#F5A1BE"]}
              className="w-1 h-16 my-2"
            />
            <View className="w-10 h-10 bg-black/20 rounded-full items-center justify-center">
              <Feather name="bell" size={20} color="#F5A1BE" />
            </View>
            <LinearGradient
              colors={["#F5A1BE", "#F5A1BE"]}
              className="w-1 h-16 my-2"
            />
            <View className="w-10 h-10 bg-black/20 rounded-full items-center justify-center">
              <Feather name="star" size={20} color="#F5A1BE" />
            </View>
          </View>
          <View className="flex-1 pt-1">
            <Text className="text-white font-bold text-lg">Today</Text>
            <Text className="text-[#969da8] mb-12">
              Get full access and see your mindset start to change
            </Text>
            <Text className="text-white font-bold text-lg">Day 2</Text>
            <Text className="text-[#969da8] mb-12">
              Get a reminder that your trial ends in 24 hours
            </Text>
            <Text className="text-white font-bold text-lg">After day 3</Text>
            <Text className="text-[#969da8]">
              Your free trial ends and you'll be charged, cancel anytime before
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center bg-[#3a4151] rounded-full px-6 py-3 mt-16">
          <Text className="text-white text-base">
            Reminder before trial ends
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#C97EFF" }}
            thumbColor={isReminderEnabled ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={() => setIsReminderEnabled((prev) => !prev)}
            value={isReminderEnabled}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{
            width: "100%",
            borderRadius: 9999,
            overflow: "hidden",
            marginTop: 10, 
          }}
          onPress={() => router.push("/widget-install-screen")}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["#C97EFF", "#F5A1BE"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              paddingVertical: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Start 3-day free trial
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text className="text-center text-[#969da8] mt-3 text-lg">
          Unlimited free access for 3 days, then ₦29,900.00 per year
          (₦2,491.66/month)
        </Text>
        <View className="flex-row justify-center gap-6 mt-4">
          <TouchableOpacity>
            <Text className="text-[#969da8] text-sm">Restore</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-[#969da8] text-sm">Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-[#969da8] text-sm">Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FreeTrialDetailsScreen;
