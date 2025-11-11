// import { AntDesign } from "@expo/vector-icons";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { useRouter } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withDelay,
//   withTiming,
// } from "react-native-reanimated";

// const TimePickerMenu = ({
//   value,
//   onChange,
//   children,
// }: {
//   value: Date;
//   onChange: (event: any, date?: Date) => void;
//   children: React.ReactNode;
// }) => {
//   const [opened, setOpened] = useState(false);

//   const handleSelect = (event: any, date?: Date) => {
//     onChange(event, date);
//   };

//   return (
//     <Menu opened={opened} onBackdropPress={() => setOpened(false)}>
//       <MenuTrigger onPress={() => setOpened(true)}>{children}</MenuTrigger>
//       <MenuOptions
//         optionsContainerStyle={{
//           backgroundColor: "#35363d",
//           borderRadius: 16,
//           padding: 10,
//           width: 350,
//           marginTop: -250,
//           alignSelf: "center",
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.3,
//           shadowRadius: 6,
//           elevation: 6,
//         }}
//       >
//         <DateTimePicker
//           value={value}
//           mode="time"
//           display="spinner"
//           is24Hour={false}
//           onChange={handleSelect}
//           textColor="white"
//           themeVariant="dark"
//         />
//       </MenuOptions>
//     </Menu>
//   );
// };

// const NotificationSettingsScreen = () => {
//   const router = useRouter();
//   const [quoteCount, setQuoteCount] = useState(10);

//   const scale = useSharedValue(0.5); // Start at half size
//   const opacity = useSharedValue(0); // Start invisible
//   const translateY = useSharedValue(0);

//   useEffect(() => {
//     // Phase 1: Scale in and fade in
//     // scale.value = withSpring(1, { damping: 15, stiffness: 100 });
//     scale.value = withTiming(1, {
//       duration: 800,
//       easing: Easing.out(Easing.ease),
//     });

//     opacity.value = withTiming(1, { duration: 400 });

//     // Phase 2: After a delay, move up
//     // The delay gives the user time to see the card before it moves.
//     // translateY.value = withDelay(1000, withTiming(-60, { duration: 300 }));
//     translateY.value = withDelay(1000, withTiming(-30, { duration: 600 }));
//   }, []);
//   const [startTime, setStartTime] = useState(
//     new Date(new Date().setHours(9, 0, 0))
//   );
//   const [endTime, setEndTime] = useState(
//     new Date(new Date().setHours(22, 1, 0))
//   );

//   const animatedCardStyle = useAnimatedStyle(() => {
//     return {
//       opacity: opacity.value,
//       transform: [{ scale: scale.value }, { translateY: translateY.value }],
//     };
//   });

//   const onStartChange = (event: any, selectedDate?: Date) => {
//     if (selectedDate) {
//       setStartTime(selectedDate);
//     }
//   };

//   const onEndChange = (event: any, selectedDate?: Date) => {
//     if (selectedDate) {
//       setEndTime(selectedDate);
//     }
//   };

//   const formatTime = (date: Date) => {
//     return date
//       .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
//       .replace(" ", "")
//       .toUpperCase();
//   };

//   const handleContinue = () => {
//     router.push("/icon-style-screen");
//   };

//   return (
//     <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
//       <View>
//         <Text className="text-white text-3xl font-semibold text-center">
//           Get quotes throughout the day
//         </Text>
//         <Text className="text-[#969da8] text-lg text-center mt-4 mb-20">
//           Small doses of motivation can make a big difference in your life
//         </Text>

//         <View className="relative">
//           <Animated.View style={[animatedCardStyle, { zIndex: 2 }]}>
//             <View
//               className="bg-[#3a4151] rounded-3xl p-5 items-center flex-row"
//               style={{
//                 shadowColor: "#000",
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 4.65,
//                 elevation: 8,
//               }}
//             >
//               <View className="bg-black/70 w-10 h-10 rounded-lg items-center justify-center mr-5">
//                 <Text className="text-white text-2xl font-bold">”</Text>
//               </View>
//               <View className="flex-1">
//                 <Text className="text-white text-lg font-bold">Motivation</Text>
//                 <Text className="text-white text-[15px]">
//                   One day, you'll be at the place you always wanted to be.
//                 </Text>
//               </View>
//             </View>
//           </Animated.View>
//           <Animated.View
//             style={animatedCardStyle}
//             className="absolute left-0 right-0 z-0"
//           >
//             <View
//               className="bg-[#3a4151] rounded-3xl p-5 items-center flex-row max-w-[90%] mx-auto"
//               style={{
//                 shadowColor: "#000",
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 4.65,
//                 elevation: 8,
//               }}
//             >
//               <View className="bg-black/70 w-10 h-10 rounded-lg items-center justify-center">
//                 <Text className="text-white text-2xl font-bold">”</Text>
//               </View>
//               <View className="flex-1">
//                 <Text className="text-white text-lg font-bold">Motivation</Text>
//                 <Text className="text-white text-[15px]">
//                   One day, you'll be at the place you always.
//                 </Text>
//               </View>
//             </View>
//           </Animated.View>
//         </View>

//         <View className="mt-14 gap-4">
//           <View className="bg-[#3a4151] rounded-full p-3 flex-row justify-between items-center">
//             <Text className="text-white text-lg ml-4">How many</Text>
//             <View className="flex-row items-center gap-10">
//               <TouchableOpacity
//                 className="bg-white p-2 rounded-full"
//                 onPress={() => setQuoteCount((c) => Math.max(1, c - 1))}
//               >
//                 <AntDesign name="minus" size={18} color="black" />
//               </TouchableOpacity>
//               <Text className="text-white font-bold w-8 text-center">
//                 {quoteCount}x
//               </Text>
//               <TouchableOpacity
//                 className="bg-white p-2 rounded-full"
//                 onPress={() => setQuoteCount((c) => Math.min(50, c + 1))}
//               >
//                 <AntDesign name="plus" size={18} color="black" />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View className="bg-[#3a4151] rounded-3xl p-4">
//             <View className="pb-4 flex-row justify-between items-center border-b border-[#262e3d] -mx-4 px-4">
//               <Text className="text-white text-lg ml-2">Start at</Text>

//               <TimePickerMenu value={startTime} onChange={onStartChange}>
//                 <View className="bg-[#5a6172] px-4 py-2 rounded-xl">
//                   <Text className="text-white text-lg">
//                     {formatTime(startTime)}
//                   </Text>
//                 </View>
//               </TimePickerMenu>
//             </View>
//             <View className="pt-4 flex-row justify-between items-center">
//               <Text className="text-white text-lg ml-2">End at</Text>

//               <TimePickerMenu value={endTime} onChange={onEndChange}>
//                 <View className="bg-[#5a6172] px-4 py-2 rounded-xl">
//                   <Text className="text-white text-lg">
//                     {formatTime(endTime)}
//                   </Text>
//                 </View>
//               </TimePickerMenu>
//             </View>
//           </View>
//         </View>
//       </View>

//       <TouchableOpacity
//         className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
//         onPress={handleContinue}
//       >
//         <Text className="text-black text-lg font-bold">Allow and Save</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default NotificationSettingsScreen;

import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

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
          backgroundColor: "#35363d",
          borderRadius: 16,
          padding: 10,
          width: 350,
          // marginTop: "-50%",
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 6,
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
  const [quoteCount, setQuoteCount] = useState(10);

  const scale1 = useSharedValue(0.5);
  const opacity1 = useSharedValue(0);
  const translateY1 = useSharedValue(0);

  const scale2 = useSharedValue(0.5);
  const opacity2 = useSharedValue(0);

  useEffect(() => {
    scale1.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.ease),
    });
    opacity1.value = withTiming(1, { duration: 400 });
    translateY1.value = withDelay(1000, withTiming(-30, { duration: 600 }));

    scale2.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.ease),
    });
    opacity2.value = withTiming(1, { duration: 400 });
  }, []);

  const [startTime, setStartTime] = useState(
    new Date(new Date().setHours(9, 0, 0))
  );
  const [endTime, setEndTime] = useState(
    new Date(new Date().setHours(22, 1, 0))
  );

  const animatedCardStyle1 = useAnimatedStyle(() => {
    return {
      opacity: opacity1.value,
      transform: [{ scale: scale1.value }, { translateY: translateY1.value }],
    };
  });

  const animatedCardStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity2.value,
      transform: [{ scale: scale2.value }],
    };
  });

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
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center">
          Get quotes throughout the day
        </Text>
        <Text className="text-[#969da8] text-lg text-center mt-4 mb-20">
          Small doses of motivation can make a big difference in your life
        </Text>

        <View className="relative">
          <Animated.View style={[animatedCardStyle1, { zIndex: 2 }]}>
            <View
              className="bg-[#3a4151] rounded-3xl p-5 items-center flex-row"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <View className="bg-black/70 w-10 h-10 rounded-lg items-center justify-center mr-5">
                <Text className="text-white text-2xl font-bold">”</Text>
              </View>
              <View className="flex-1">
                <Text className="text-white text-lg font-bold">Motivation</Text>
                <Text className="text-white text-[15px]">
                  One day, you'll be at the place you always wanted to be.
                </Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={animatedCardStyle2}
            className="absolute left-0 right-0 z-0"
          >
            <View
              className="bg-[#3a4151] rounded-3xl p-5 items-center flex-row max-w-[90%] mx-auto"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <View className="bg-black/70 w-10 h-10 rounded-lg items-center justify-center">
                <Text className="text-white text-2xl font-bold">”</Text>
              </View>
              <View className="flex-1">
                <Text className="text-white text-lg font-bold">Motivation</Text>
                <Text className="text-white text-[15px]">
                  One day, you'll be at the place you always.
                </Text>
              </View>
            </View>
          </Animated.View>
        </View>

        <View className="mt-12 gap-4">
          <View className="bg-[#3a4151] rounded-full p-3 flex-row justify-between items-center">
            <Text className="text-white text-lg ml-4">How many</Text>
            <View className="flex-row items-center gap-10">
              <TouchableOpacity
                className="bg-white p-2 rounded-full"
                onPress={() => setQuoteCount((c) => Math.max(1, c - 1))}
              >
                <AntDesign name="minus" size={18} color="black" />
              </TouchableOpacity>
              <Text className="text-white font-bold w-8 text-center">
                {quoteCount}x
              </Text>
              <TouchableOpacity
                className="bg-white p-2 rounded-full"
                onPress={() => setQuoteCount((c) => Math.min(50, c + 1))}
              >
                <AntDesign name="plus" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#3a4151] rounded-3xl p-4">
            <View className="pb-4 flex-row justify-between items-center border-b border-[#262e3d] -mx-4 px-4">
              <Text className="text-white text-lg ml-2">Start at</Text>

              <TimePickerMenu value={startTime} onChange={onStartChange}>
                <View className="bg-[#5a6172] px-4 py-2 rounded-xl">
                  <Text className="text-white text-lg">
                    {formatTime(startTime)}
                  </Text>
                </View>
              </TimePickerMenu>
            </View>
            <View className="pt-4 flex-row justify-between items-center">
              <Text className="text-white text-lg ml-2">End at</Text>

              <TimePickerMenu value={endTime} onChange={onEndChange}>
                <View className="bg-[#5a6172] px-4 py-2 rounded-xl">
                  <Text className="text-white text-lg">
                    {formatTime(endTime)}
                  </Text>
                </View>
              </TimePickerMenu>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Allow and Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationSettingsScreen;
