// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import Svg, { Path } from "react-native-svg";

// const MinusIcon = () => (
//   <Svg width={20} height={20} viewBox="0 0 24 24">
//     <Path fill="black" d="M5 11h14v2H5z" />
//   </Svg>
// );
// const PlusIcon = () => (
//   <Svg width={20} height={20} viewBox="0 0 24 24">
//     <Path fill="black" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
//   </Svg>
// );

// const NotificationSettingsScreen = () => {
//   const router = useRouter();
//   const [quoteCount, setQuoteCount] = useState(10);

//   const handleContinue = () => {
//     router.push("/icon-style-screen");
//   };

//   return (
//     <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
//       <View>
//         <Text className="text-white text-3xl font-semibold text-center">
//           Get quotes throughout the day
//         </Text>
//         <Text className="text-[#969da8] text-lg text-center mt-4 mb-8">
//           Small doses of motivation can make a big difference in your life
//         </Text>

// <View className="bg-[#3a4151] rounded-2xl p-4 flex-row">
//   <View className="bg-black/20 w-8 h-8 rounded-lg items-center justify-center mr-3">
//     <Text className="text-white text-2xl font-bold">”</Text>
//   </View>
//   <View className="flex-1">
//     <Text className="text-white font-bold">Motivation</Text>
//     <Text className="text-[#969da8]">
//       One day, you'll be at the place you always wanted to be.
//     </Text>
//   </View>
// </View>

//         <View className="mt-8 gap-4">
// <View className="bg-[#3a4151] rounded-full p-3 flex-row justify-between items-center">
//   <Text className="text-white text-lg ml-4">How many</Text>
//   <View className="flex-row items-center gap-10">
//     <TouchableOpacity
//       className="bg-white p-2 rounded-full"
//       onPress={() => setQuoteCount((c) => Math.max(1, c - 1))}
//     >
//       <MinusIcon />
//     </TouchableOpacity>
//     <Text className="text-white font-bold w-8 text-center">
//       {quoteCount}x
//     </Text>
//     <TouchableOpacity
//       className="bg-white p-2 rounded-full"
//       onPress={() => setQuoteCount((c) => Math.min(50, c + 1))}
//     >
//       <PlusIcon />
//     </TouchableOpacity>
//   </View>
// </View>
//           <View className="bg-[#3a4151] rounded-3xl p-4">
//             <View className="pb-4 flex-row justify-between items-center border-b border-[#262e3d] -mx-4 px-4">
//               <Text className="text-white text-lg ml-2">Start at</Text>
//               <TouchableOpacity className="bg-[#5a6172] px-4 py-2 rounded-xl">
//                 <Text className="text-white text-lg">9:00 AM</Text>
//               </TouchableOpacity>
//             </View>
//             <View className="pt-4  flex-row justify-between items-center">
//               <Text className="text-white text-lg ml-2">End at</Text>
//               <TouchableOpacity className="bg-[#5a6172] px-4 py-2 rounded-xl">
//                 <Text className="text-white text-lg">10:00 PM</Text>
//               </TouchableOpacity>
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

// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import Svg, { Path } from "react-native-svg";
// // 1. Import the DateTimePicker component
// import DateTimePicker from '@react-native-community/datetimepicker';

// // --- Icon Components ---
// const MinusIcon = () => (
//   <Svg width={20} height={20} viewBox="0 0 24 24">
//     <Path fill="black" d="M5 11h14v2H5z" />
//   </Svg>
// );
// const PlusIcon = () => (
//   <Svg width={20} height={20} viewBox="0 0 24 24">
//     <Path fill="black" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
//   </Svg>
// );

// // --- Main Component ---
// const NotificationSettingsScreen = () => {
//   const router = useRouter();
//   const [quoteCount, setQuoteCount] = useState(10);

//   // 2. ADD STATE for managing times and picker visibility
//   const [startTime, setStartTime] = useState(new Date(new Date().setHours(9, 0, 0))); // Default to 9:00 AM
//   const [endTime, setEndTime] = useState(new Date(new Date().setHours(22, 0, 0))); // Default to 10:00 PM
//   const [showPicker, setShowPicker] = useState(false);
//   const [pickerMode, setPickerMode] = useState<'start' | 'end'>('start'); // To know which time we are setting

//   // 3. CREATE a function to handle showing the picker
//   const showTimePicker = (mode: 'start' | 'end') => {
//     setPickerMode(mode);
//     setShowPicker(true);
//   };

//   // 4. CREATE a function to handle the change from the picker
//   const onChange = (event: any, selectedDate?: Date) => {
//     // On Android, the picker closes itself. On iOS, we might need to manage it.
//     // Setting showPicker to false ensures it disappears after selection on both platforms.
//     setShowPicker(false);

//     if (selectedDate) {
//       if (pickerMode === 'start') {
//         setStartTime(selectedDate);
//       } else {
//         setEndTime(selectedDate);
//       }
//     }
//   };

//   // 5. HELPER function to format the time for display (e.g., "9:00 AM")
//   const formatTime = (date: Date) => {
//     return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
//   };

//   const handleContinue = () => {
//     // Here you would save the settings (quoteCount, startTime, endTime)
//     // before navigating to the next screen.
//     router.push("/icon-style-screen");
//   };

//   return (
//     <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
//       <View>
//         <Text className="text-white text-3xl font-semibold text-center">
//           Get quotes throughout the day
//         </Text>
//         <Text className="text-[#969da8] text-lg text-center mt-4 mb-8">
//           Small doses of motivation can make a big difference in your life
//         </Text>

//         {/* Mock Notification Card */}
//         <View className="bg-[#3a4151] rounded-2xl p-4 flex-row">
//           <View className="bg-black/20 w-8 h-8 rounded-lg items-center justify-center mr-3">
//             <Text className="text-white text-2xl font-bold">”</Text>
//           </View>
//           <View className="flex-1">
//             <Text className="text-white font-bold">Motivation</Text>
//             <Text className="text-[#969da8]">
//               One day, you'll be at the place you always wanted to be.
//             </Text>
//           </View>
//         </View>

//         {/* Settings Section */}
//         <View className="mt-8 gap-4">
//           {/* How many Stepper */}
//           <View className="bg-[#3a4151] rounded-full p-3 flex-row justify-between items-center">
//             <Text className="text-white text-lg ml-4">How many</Text>
//             <View className="flex-row items-center gap-10">
//               <TouchableOpacity
//                 className="bg-white p-2 rounded-full"
//                 onPress={() => setQuoteCount((c) => Math.max(1, c - 1))}
//               >
//                 <MinusIcon />
//               </TouchableOpacity>
//               <Text className="text-white font-bold w-8 text-center text-lg">
//                 {quoteCount}x
//               </Text>
//               <TouchableOpacity
//                 className="bg-white p-2 rounded-full"
//                 onPress={() => setQuoteCount((c) => Math.min(50, c + 1))}
//               >
//                 <PlusIcon />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Time Selection */}
//           <View className="bg-[#3a4151] rounded-3xl p-4">
//             <View className="pb-4 flex-row justify-between items-center border-b border-[#262e3d] -mx-4 px-4">
//               <Text className="text-white text-lg ml-2">Start at</Text>
//               <TouchableOpacity
//                 onPress={() => showTimePicker('start')}
//                 className="bg-[#5a6172] px-4 py-2 rounded-xl"
//               >
//                 <Text className="text-white text-lg">{formatTime(startTime)}</Text>
//               </TouchableOpacity>
//             </View>
//             <View className="pt-4 flex-row justify-between items-center">
//               <Text className="text-white text-lg ml-2">End at</Text>
//               <TouchableOpacity
//                 onPress={() => showTimePicker('end')}
//                 className="bg-[#5a6172] px-4 py-2 rounded-xl"
//               >
//                 <Text className="text-white text-lg">{formatTime(endTime)}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* 6. RENDER the DateTimePicker conditionally */}
//       {showPicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={pickerMode === 'start' ? startTime : endTime}
//           mode="time"
//           is24Hour={false}
//           display="spinner" // Provides a consistent UI on both platforms
//           onChange={onChange}
//         />
//       )}

//       {/* "Allow and Save" Button */}
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

// app/(onboarding-screens)/notification-settings-screen.tsx

import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import Svg, { Path } from "react-native-svg";

const MinusIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path fill="black" d="M5 11h14v2H5z" />
  </Svg>
);
const PlusIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path fill="black" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
  </Svg>
);

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
    setOpened(false);
  };

  return (
    <Menu opened={opened} onBackdropPress={() => setOpened(false)}>
      <MenuTrigger onPress={() => setOpened(true)}>{children}</MenuTrigger>
      <MenuOptions
        // optionsContainerStyle={{
        //   backgroundColor: "#35363d",
        //   borderRadius: 16,
        //   padding: 10,
        //   width: 300,
        // }}
        optionsContainerStyle={{
          backgroundColor: "#35363d",
          borderRadius: 16,
          padding: 10,
          width: 220,
          marginTop: -250,
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 6,
        }}
      >
        <View
          style={{
            transform: [{ scale: 0.8 }],
            height: 180,
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
        </View>
      </MenuOptions>
    </Menu>
  );
};

// --- Main Component ---
const NotificationSettingsScreen = () => {
  const router = useRouter();
  const [quoteCount, setQuoteCount] = useState(10);
  const [startTime, setStartTime] = useState(
    new Date(new Date().setHours(9, 0, 0))
  );
  const [endTime, setEndTime] = useState(
    new Date(new Date().setHours(22, 1, 0))
  );

  // 3. SIMPLIFY the onChange handlers
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
        <Text className="text-[#969da8] text-lg text-center mt-4 mb-8">
          Small doses of motivation can make a big difference in your life
        </Text>

        <View className="bg-[#3a4151] rounded-2xl p-4 flex-row">
          <View className="bg-black/20 w-8 h-8 rounded-lg items-center justify-center mr-3">
            <Text className="text-white text-2xl font-bold">”</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-bold">Motivation</Text>
            <Text className="text-[#969da8]">
              One day, you'll be at the place you always wanted to be.
            </Text>
          </View>
        </View>

        <View className="mt-8 gap-4">
          <View className="bg-[#3a4151] rounded-full p-3 flex-row justify-between items-center">
            <Text className="text-white text-lg ml-4">How many</Text>
            <View className="flex-row items-center gap-10">
              <TouchableOpacity
                className="bg-white p-2 rounded-full"
                onPress={() => setQuoteCount((c) => Math.max(1, c - 1))}
              >
                <MinusIcon />
              </TouchableOpacity>
              <Text className="text-white font-bold w-8 text-center">
                {quoteCount}x
              </Text>
              <TouchableOpacity
                className="bg-white p-2 rounded-full"
                onPress={() => setQuoteCount((c) => Math.min(50, c + 1))}
              >
                <PlusIcon />
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

              {/* 4. USE the new TimePickerMenu component again */}
              <TimePickerMenu value={endTime} onChange={onEndChange}>
                {/* This is the trigger button */}
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
