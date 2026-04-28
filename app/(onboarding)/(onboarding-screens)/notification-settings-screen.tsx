import { AntDesign, Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TimePickerMenu = ({
  value,
  onChange,
  children,
}: {
  value: Date;
  onChange: (event: any, date?: Date) => void;
  children: React.ReactNode;
}) => {
  const [opened, setOpened] = useState(false);

  const handleSelect = (event: any, date?: Date) => {
    onChange(event, date);
  };

  return (
    <Menu opened={opened} onBackdropPress={() => setOpened(false)}>
      <MenuTrigger onPress={() => setOpened(true)}>{children}</MenuTrigger>
      <MenuOptions
        optionsContainerStyle={{
          backgroundColor: "#111111",
          borderRadius: 24,
          padding: 10,
          width: 320,
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.05)",
        }}
      >
        <DateTimePicker
          value={value}
          mode="time"
          display="spinner"
          is24Hour={false}
          onChange={handleSelect}
          textColor="white"
          themeVariant="dark"
        />
      </MenuOptions>
    </Menu>
  );
};

const NotificationSettingsScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [quoteCount, setQuoteCount] = useState(10);

  const [startTime, setStartTime] = useState(
    new Date(new Date().setHours(9, 0, 0))
  );
  const [endTime, setEndTime] = useState(
    new Date(new Date().setHours(22, 1, 0))
  );

  const onStartChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setStartTime(selectedDate);
    }
  };

  const onEndChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setEndTime(selectedDate);
    }
  };

  const formatTime = (date: Date) => {
    return date
      .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      .replace(" ", "")
      .toUpperCase();
  };

  const handleContinue = () => {
    router.push("/icon-style-screen");
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 40 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="mb-16">
          <View className="flex-row items-baseline">
            <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-none">
              Daily
            </Text>
            <View className="w-3 h-3 rounded-full bg-emerald-500 ml-2" />
          </View>
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-none">
            Rhythm
          </Text>

          <Text className="text-[#94A3B8] text-lg mt-8 font-medium leading-relaxed max-w-[280px]">
            Set the schedule for your daily dose of inspiration.
          </Text>
        </View>

        <View className="flex-row">
          {/* Vertical Timeline Line */}
          <View className="w-1 items-center mr-7">
            <View className="w-1 flex-1 bg-emerald-500/20 rounded-full" />
            <View className="absolute top-0 bottom-0 w-1 bg-emerald-500/10 rounded-full" />
          </View>

          <View className="flex-1 gap-12">
            {/* Start Node */}
            <View className="relative">
              <View className="absolute -left-10 top-6 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#050505] z-10" />
              <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center">
                    <View className="w-10 h-10 rounded-2xl bg-white/5 items-center justify-center mr-4 border border-white/10">
                      <Feather name="sun" size={20} color="#10b981" />
                    </View>
                    <Text className="text-white text-lg">Start at</Text>
                  </View>
                  <TimePickerMenu value={startTime} onChange={onStartChange}>
                    <View className="bg-emerald-500/10 px-4 py-2 rounded-2xl border border-emerald-500/20">
                      <Text className="text-emerald-500 text-lg">
                        {formatTime(startTime)}
                      </Text>
                    </View>
                  </TimePickerMenu>
                </View>
              </View>
            </View>

            {/* Frequency Node */}
            <View className="relative">
              <View className="absolute -left-10 top-6 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#050505] z-10" />
              <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5">
                <View className="flex-row justify-between items-center mb-4">
                  <View className="flex-row items-center">
                    <View className="w-10 h-10 rounded-2xl bg-white/5 items-center justify-center mr-4 border border-white/10">
                      <Feather name="bell" size={20} color="#10b981" />
                    </View>
                    <Text className="text-white text-lg">Frequency</Text>
                  </View>
                  <Text className="text-emerald-500 text-lg">
                    {quoteCount}x
                  </Text>
                </View>
                <View className="flex-row items-center bg-[#050505] rounded-2xl p-1 px-2 border border-white/5">
                  <TouchableOpacity
                    className="flex-1 bg-white/5 py-3 rounded-xl items-center"
                    onPress={() => setQuoteCount((c) => Math.max(1, c - 1))}
                  >
                    <AntDesign name="minus" size={20} color="white" />
                  </TouchableOpacity>
                  <View className="w-[1px] h-6 bg-white/10 mx-2" />
                  <TouchableOpacity
                    className="flex-1 bg-white/5 py-3 rounded-xl items-center"
                    onPress={() => setQuoteCount((c) => Math.min(50, c + 1))}
                  >
                    <AntDesign name="plus" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* End Node */}
            <View className="relative">
              <View className="absolute -left-10 top-6 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#050505] z-10" />
              <View className="bg-[#111111] rounded-[32px] p-6 border border-white/5">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center">
                    <View className="w-10 h-10 rounded-2xl bg-white/5 items-center justify-center mr-4 border border-white/10">
                      <Feather name="moon" size={20} color="#10b981" />
                    </View>
                    <Text className="text-white text-lg">End at</Text>
                  </View>
                  <TimePickerMenu value={endTime} onChange={onEndChange}>
                    <View className="bg-emerald-500/10 px-4 py-2 rounded-2xl border border-emerald-500/20">
                      <Text className="text-emerald-500 text-lg">
                        {formatTime(endTime)}
                      </Text>
                    </View>
                  </TimePickerMenu>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/95">
        <TouchableOpacity
          className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
          onPress={handleContinue}
          activeOpacity={0.9}
        >
          <Text className="text-black text-lg font-bold tracking-tight">Allow and Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationSettingsScreen;
