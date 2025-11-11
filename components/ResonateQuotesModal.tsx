// import {
//     BottomSheetBackdrop,
//     BottomSheetModal,
//     BottomSheetView,
// } from "@gorhom/bottom-sheet";
// import { useRouter } from "expo-router";
// import React, { useMemo } from "react";
// import { Text } from "react-native";
// import Svg, {
//     Defs,
//     Path,
//     Stop,
//     LinearGradient as SvgGradient,
// } from "react-native-svg";

// // --- Custom Gradient Heart Icon ---
// const GradientHeartIcon = () => (
//   <Svg width="100" height="100" viewBox="0 0 24 24">
//     <Defs>
//       {/* Define the gradient that will be used to fill the heart */}
//       <SvgGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
//         <Stop offset="0%" stopColor="#C97EFF" />
//         <Stop offset="100%" stopColor="#F5A1BE" />
//       </SvgGradient>
//     </Defs>
//     {/* The Path for the heart shape, filled with the gradient defined above */}
//     <Path
//       fill="url(#heartGradient)"
//       d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//     />
//   </Svg>
// );

// const ResonateQuotesModal = (ref) => {
//   const snapPoints = useMemo(() => ["75%"], []);

//   const router = useRouter();

//   const handleGotIt = () => {
//     // Go back to the previous screen when the button is pressed
//     if (router.canGoBack()) {
//       router.back();
//     }
//   };

//   return (
//     <BottomSheetModal
//       ref={ref}
//       index={0}
//       snapPoints={snapPoints}
//       enablePanDownToClose={true}
//       animateOnMount={true}
//       backgroundStyle={{ backgroundColor: "white" }}
//       handleIndicatorStyle={{ backgroundColor: "gray" }}
//       backdropComponent={(props) => (
//         <BottomSheetBackdrop
//           {...props}
//           disappearsOnIndex={-1}
//           appearsOnIndex={0}
//         />
//       )}
//     >
//       <BottomSheetView
//         style={{
//           flex: 1,
//           paddingHorizontal: 20,
//           paddingTop: 20,
//           paddingBottom: 40,
//         }}
//       >
//         <Text>Hello</Text>
//       </BottomSheetView>
//     </BottomSheetModal>
//   );
// };

// export default ResonateQuotesModal;

// // app/resonate-quotes-modal.tsx
// import { useRouter } from "expo-router";
// import React, { forwardRef, useMemo } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// // 1. IMPORT THE REQUIRED COMPONENTS FROM THE LIBRARY
// import {
//     BottomSheetBackdrop,
//     BottomSheetModal,
//     BottomSheetView,
// } from "@gorhom/bottom-sheet";

// // --- Custom Gradient Heart Icon (remains the same) ---
// // const GradientHeartIcon = () => (
// //     // ... your SVG code ...
// // );

// // 2. DEFINE THE TYPE FOR THE REF THAT THE PARENT WILL USE
// export type ResonateQuotesModalRef = BottomSheetModal;

// // 3. WRAP YOUR COMPONENT IN `forwardRef`
// const ResonateQuotesModal = forwardRef<ResonateQuotesModalRef>((props, ref) => {
//   const snapPoints = useMemo(() => ["60%"], []); // Adjusted snap point for better fit
//   const router = useRouter();

//   const handleGotIt = () => {
//     // Logic to close the modal would be called from the parent,
//     // or you can close it programmatically if needed.
//     if (router.canGoBack()) {
//       router.back();
//     }
//   };

//   return (
//     <BottomSheetModal
//       // 4. PASS THE FORWARDED REF TO THE COMPONENT
//       ref={ref}
//       index={0}
//       snapPoints={snapPoints}
//       enablePanDownToClose={true}
//       animateOnMount={true}
//       // 5. FIX THE BACKGROUND STYLE TO MATCH THE DARK THEME
//       backgroundStyle={{ backgroundColor: "#262e3d" }}
//       handleIndicatorStyle={{ backgroundColor: "gray" }}
//       backdropComponent={(props) => (
//         <BottomSheetBackdrop
//           {...props}
//           disappearsOnIndex={-1}
//           appearsOnIndex={0}
//         />
//       )}
//     >
//       <BottomSheetView
//         style={{
//           flex: 1,
//           paddingHorizontal: 20,
//           paddingBottom: 40,
//         }}
//       >
//         <View className="flex-1 justify-center items-center">
//           {/* <GradientHeartIcon /> */}

//           <Text className="text-white text-3xl font-bold text-center mt-8">
//             Get quotes that resonate with you
//           </Text>

//           <Text className="text-gray-300 text-lg text-center mt-4">
//             Personalize your feed by adding at least 5 quotes to favorites
//           </Text>
//         </View>
//         <View className="w-full">
//           <TouchableOpacity
//             className="bg-white w-full py-4 rounded-full items-center justify-center"
//             onPress={handleGotIt}
//           >
//             <Text className="text-black text-lg font-bold">Got it!</Text>
//           </TouchableOpacity>
//         </View>
//       </BottomSheetView>
//     </BottomSheetModal>
//   );
// });

// export default ResonateQuotesModal;


import {
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { forwardRef, useMemo } from "react"; // 1. Import forwardRef
import { Text, TouchableOpacity, View } from "react-native";
import { } from "react-native-svg";

// ... (GradientHeartIcon remains the same) ...

// Define the type for the ref
export type ResonateQuotesModalRef = BottomSheetModal;

// 2. Wrap the entire component function in forwardRef
const ResonateQuotesModal = forwardRef<ResonateQuotesModalRef>((props, ref) => {
  // `props` is the first argument, `ref` is the second.
  const snapPoints = useMemo(() => ["60%"], []);
  const router = useRouter();

  const handleGotIt = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <BottomSheetModal
      ref={ref} 
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: "#262e3d" }}
    >
      <BottomSheetView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        {/* The rest of your modal's content... */}
        <View className="flex-1 justify-center items-center">
          {/* <GradientHeartIcon /> */}
          <Text className="text-white text-3xl font-bold text-center mt-8">
            Get quotes that resonate with you
          </Text>
          {/* ... */}
        </View>
        <View className="w-full">
          <TouchableOpacity
            className="bg-white w-full py-4 rounded-full items-center justify-center"
            onPress={handleGotIt}
          >
            <Text className="text-black text-lg font-bold">Got it!</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default ResonateQuotesModal;