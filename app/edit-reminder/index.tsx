import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];

const EditReminderScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 20 }}>
      {/* Header Area */}
      <View className="px-8 flex-row justify-between items-center mb-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-emerald-500 px-6 py-2 rounded-full"
        >
          <Text className="text-black font-medium tracking-tight">Done</Text>
        </TouchableOpacity>
        <View className="w-10 h-1" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Edit reminder
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Customize how often you want to receive inspiration.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* Main Settings Pod */}
        <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5">
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row justify-between items-center py-4"
            onPress={() => router.push("/free-trial-details-screen")}
          >
            <Text className="text-white text-lg font-medium tracking-tight">Type of quotes</Text>
            <View className="flex-row items-center">
              <Text className="text-emerald-500 text-base font-medium mr-1">General</Text>
              <Feather name="chevron-right" size={18} color="#52525b" />
            </View>
          </TouchableOpacity>

          <View className="h-[1px] bg-white/5 w-full" />

          {/* How many */}
          <View className="flex-row justify-between items-center py-5">
            <Text className="text-white text-lg font-medium tracking-tight">How many</Text>
            <View className="flex-row items-center gap-4">
              <TouchableOpacity
                onPress={() => handleCountChange(-1)}
                className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
              >
                <Feather name="minus" size={16} color="#10b981" />
              </TouchableOpacity>
              <Text className="text-white text-base font-medium w-12 text-center">
                {quoteCount}x
              </Text>
              <TouchableOpacity
                onPress={() => handleCountChange(1)}
                className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
              >
                <Feather name="plus" size={16} color="#10b981" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="h-[1px] bg-white/5 w-full" />

          {/* Start Time */}
          <View className="flex-row justify-between items-center py-5">
            <Text className="text-white text-lg font-medium tracking-tight">Start at</Text>
            <View className="flex-row items-center gap-4">
              <TouchableOpacity
                onPress={() => handleTimeChange(setStartTime, -30)}
                className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
              >
                <Feather name="minus" size={16} color="#10b981" />
              </TouchableOpacity>
              <Text className="text-white text-base font-medium w-20 text-center">
                {formatTime(startTime)}
              </Text>
              <TouchableOpacity
                onPress={() => handleTimeChange(setStartTime, 30)}
                className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
              >
                <Feather name="plus" size={16} color="#10b981" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="h-[1px] bg-white/5 w-full" />

          {/* End Time */}
          <View className="flex-row justify-between items-center py-5">
            <Text className="text-white text-lg font-medium tracking-tight">End at</Text>
            <View className="flex-row items-center gap-4">
              <TouchableOpacity
                onPress={() => handleTimeChange(setEndTime, -30)}
                className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
              >
                <Feather name="minus" size={16} color="#10b981" />
              </TouchableOpacity>
              <Text className="text-white text-base font-medium w-20 text-center">
                {formatTime(endTime)}
              </Text>
              <TouchableOpacity
                onPress={() => handleTimeChange(setEndTime, 30)}
                className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
              >
                <Feather name="plus" size={16} color="#10b981" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Repeat Section */}
        <View className="mt-8 bg-[#111111] rounded-[32px] p-6 border border-white/5">
          <Text className="text-white text-xl font-medium tracking-tight mb-6">Repeat</Text>
          <View className="flex-row items-center justify-between">
            {DAYS_OF_WEEK.map((day, index) => {
              const isSelected = selectedDays.includes(day);
              return (
                <TouchableOpacity
                  key={`${day}-${index}`}
                  onPress={() => handleDayToggle(day)}
                  className={`w-10 h-10 rounded-full items-center justify-center border-2 transition-all ${isSelected ? "bg-emerald-500 border-emerald-500" : "bg-transparent border-white/10"
                    }`}
                >
                  <Text
                    className={`font-medium text-xs ${isSelected ? "text-black" : "text-[#52525b]"
                      }`}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Sound Section */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/edit-reminder/sound")}
          className="mt-8 bg-[#111111] rounded-[24px] p-6 border border-white/5 flex-row justify-between items-center"
        >
          <Text className="text-white text-lg font-medium tracking-tight">Sound</Text>
          <View className="flex-row items-center">
            <Text className="text-emerald-500 text-base font-medium mr-1">
              {selectedSound}
            </Text>
            <Feather name="chevron-right" size={18} color="#52525b" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditReminderScreen;
