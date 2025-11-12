import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];

const EditReminderScreen = () => {
  const router = useRouter();

  const [quoteCount, setQuoteCount] = useState(10);
  const [startTime, setStartTime] = useState(
    new Date(new Date().setHours(12, 33, 0))
  );
  const [endTime, setEndTime] = useState(
    new Date(new Date().setHours(23, 1, 0))
  );
  const [selectedDays, setSelectedDays] = useState<string[]>([
    "S",
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
  ]);
  const [selectedSound, setSelectedSound] = useState("Positive");

  const handleCountChange = (amount: number) => {
    setQuoteCount((prev) => Math.max(1, Math.min(100, prev + amount)));
  };

  const handleTimeChange = (
    timeSetter: React.Dispatch<React.SetStateAction<Date>>,
    amountMinutes: number
  ) => {
    timeSetter(
      (prevDate) => new Date(prevDate.getTime() + amountMinutes * 60000)
    );
  };

  const formatTime = (date: Date) => {
    return date
      .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      .toUpperCase();
  };

  const handleDayToggle = (day: string) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row items-center p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-white text-xl">Done</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-white text-3xl font-bold">Edit reminder</Text>

        {/* Main Settings Card */}
        <View className="bg-[#374051] rounded-2xl p-4 mt-6">
          <TouchableOpacity
            className="flex-row justify-between items-center py-3 pt-0"
            onPress={() => router.push("/free-trial-details-screen")}
          >
            <Text className="text-white text-lg">Type of quotes</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400 text-lg mr-1">General</Text>
              <Feather name="chevron-right" size={20} color="#969da8" />
            </View>
          </TouchableOpacity>
          <View className="border-b border-[#3e485c] -mx-4 px-4" />
          <View className="flex-row justify-between items-center py-3">
            <Text className="text-white text-lg">How many</Text>
            <View className="flex-row items-center space-x-4">
              <TouchableOpacity
                onPress={() => handleCountChange(-1)}
                className="bg-gray-500 p-2 rounded-full"
              >
                <Feather name="minus" size={16} color="white" />
              </TouchableOpacity>
              <Text className="text-white text-lg w-10 text-center">
                {quoteCount}x
              </Text>
              <TouchableOpacity
                onPress={() => handleCountChange(1)}
                className="bg-gray-500 p-2 rounded-full"
              >
                <Feather name="plus" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="border-b border-[#3e485c] -mx-4 px-4" />
          <View className="flex-row justify-between items-center py-3">
            <Text className="text-white text-lg">Start at</Text>
            <View className="flex-row items-center space-x-4">
              <TouchableOpacity
                onPress={() => handleTimeChange(setStartTime, -30)}
                className="bg-gray-500 p-2 rounded-full"
              >
                <Feather name="minus" size={16} color="white" />
              </TouchableOpacity>
              <Text className="text-white text-lg w-24 text-center">
                {formatTime(startTime)}
              </Text>
              <TouchableOpacity
                onPress={() => handleTimeChange(setStartTime, 30)}
                className="bg-gray-500 p-2 rounded-full"
              >
                <Feather name="plus" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="border-b border-[#3e485c] -mx-4 px-4" />
          <View className="flex-row justify-between items-center py-3">
            <Text className="text-white text-lg">End at</Text>
            <View className="flex-row items-center space-x-4">
              <TouchableOpacity
                onPress={() => handleTimeChange(setEndTime, -30)}
                className="bg-gray-500 p-2 rounded-full"
              >
                <Feather name="minus" size={16} color="white" />
              </TouchableOpacity>
              <Text className="text-white text-lg w-24 text-center">
                {formatTime(endTime)}
              </Text>
              <TouchableOpacity
                onPress={() => handleTimeChange(setEndTime, 30)}
                className="bg-gray-500 p-2 rounded-full"
              >
                <Feather name="plus" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="border-b border-[#3e485c] -mx-4 px-4" />

          <View className=" mt-6">
            <Text className="text-white text-xl mb-4">Repeat</Text>
            <View className="flex-row items-center justify-between ">
              {DAYS_OF_WEEK.map((day, index) => {
                const isSelected = selectedDays.includes(day);
                return (
                  <TouchableOpacity
                    key={`${day}-${index}`}
                    onPress={() => handleDayToggle(day)}
                    className={`w-10 h-10 rounded-full items-center justify-center ${
                      isSelected ? "bg-white" : "border border-gray-500"
                    }`}
                  >
                    <Text
                      className={`font-bold ${
                        isSelected ? "text-black" : "text-white"
                      }`}
                    >
                      {day}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View className="border-b border-[#3e485c]  -mx-4 px-4 pt-4" />

          <View className=" mt-4">
            <TouchableOpacity
              onPress={() => router.push("/edit-reminder/sound")}
              className="flex-row justify-between items-center"
            >
              <Text className="text-white text-lg">Sound</Text>
              <View className="flex-row items-center">
                <Text className="text-gray-400 text-lg mr-1">
                  {selectedSound}
                </Text>
                <Feather name="chevron-right" size={20} color="#969da8" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditReminderScreen;
