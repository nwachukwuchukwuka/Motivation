// import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

// const THEMES = [
//   {
//     id: 1,
//     value: {
//       uri: "https://images.unsplash.com/photo-1549488344-cbb6c14cf08b?q=80&w=800",
//     },
//     isVideo: false,
//   },
//   {
//     id: 2,
//     value: {
//       uri: "https://images.unsplash.com/photo-1528824652433-2a625a2ad817?q=80&w=800",
//     },
//     isVideo: true,
//   },
//   {
//     id: 3,
//     value: {
//       uri: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800",
//     },
//     isVideo: true,
//   },
//   {
//     id: 4,
//     value: {
//       uri: "https://images.unsplash.com/photo-1517511529138-198555893a73?q=80&w=800",
//     },
//     isVideo: false,
//   },
//   {
//     id: 5,
//     value: {
//       uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800",
//     },
//     textColor: "black",
//     isVideo: false,
//   },
//   {
//     id: 6,
//     value: {
//       uri: "https://images.unsplash.com/photo-1447014421976-7f4415b8e863?q=80&w=800",
//     },
//     isVideo: false,
//   },
// ];

// const ThemeSelectionScreen = () => {
//   const router = useRouter();
//   const [selectedId, setSelectedId] = useState(1);

//   const handleContinue = () => {
//     router.push("/welcome-message-screen");
//   };

//   return (
//     <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
//       <View className="items-center">
//         <Text className="text-white text-3xl font-semibold text-center mb-8">
//           Which theme would you like to start with?
//         </Text>
//         <View className="flex-row flex-wrap justify-center mt-36">
//           {THEMES.map((theme) => {
//             const isSelected = selectedId === theme.id;

//             return (
//               <View key={theme.id} className="p-2 w-1/3">
//                 <TouchableOpacity onPress={() => setSelectedId(theme.id)}>
//                   <ImageBackground
//                     source={theme.value}
//                     className="h-44 w-full rounded-2xl items-center justify-center relative overflow-hidden"
//                     resizeMode="cover"
//                   >
//                     <View className="absolute inset-0 bg-black/10" />

//                     <Text
//                       style={{
//                         color: theme.textColor || "white",
//                         fontSize: 24,
//                         opacity: 0.8,
//                       }}
//                     >
//                       Aa
//                     </Text>

//                     {theme.isVideo && (
//                       <View className="absolute top-2 left-2">
//                         <MaterialCommunityIcons
//                           name="motion-play-outline"
//                           size={24}
//                           color="white"
//                         />
//                       </View>
//                     )}

//                     {isSelected && (
//                       <View className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 items-center justify-center">
//                         <Feather name="check" size={18} color="black" />
//                       </View>
//                     )}
//                   </ImageBackground>
//                 </TouchableOpacity>
//               </View>
//             );
//           })}
//         </View>
//       </View>
//       <TouchableOpacity
//         className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
//         onPress={handleContinue}
//       >
//         <Text className="text-black text-lg font-bold">Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ThemeSelectionScreen;

// import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
// // 1. IMPORT the context hook
// import { useAppContext } from "@/context/context";

// // Assume THEMES is imported from a shared constants file
// import { THEMES } from "@/constants/constants";

// const ThemeSelectionScreen = () => {
//   const router = useRouter();
//   // 2. GET the `setThemeSource` function
//   const { setThemeSource } = useAppContext();
  
//   // Initialize the selected ID to the first theme's ID
//   const [selectedId, setSelectedId] = useState(THEMES[0].id);

//   const handleContinue = () => {
//     // 3. FIND the full theme object that the user selected
//     const selectedTheme = THEMES.find(theme => theme.id === selectedId);

//     // 4. UPDATE the global theme state if a theme was found
//     if (selectedTheme) {
//       // The source is either a video or an image from your constants
//       const source = selectedTheme.video ? { uri: selectedTheme.video } : selectedTheme.value;
//       setThemeSource(source);
//     }
    
//     // 5. NAVIGATE to the next screen in the onboarding flow
//     router.push("/welcome-message-screen");
//   };

//   return (
//     <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
//       <View className="items-center">
//         <Text className="text-white text-3xl font-semibold text-center mb-8">
//           Which theme would you like to start with?
//         </Text>
//         <View className="flex-row flex-wrap justify-center mt-36">
//           {THEMES.map((theme) => {
//             const isSelected = selectedId === theme.id;
//             const sourceUri = theme.video ? { uri: theme.video } : theme.value;

//             return (
//               <View key={theme.id} className="p-2 w-1/3">
//                 <TouchableOpacity onPress={() => setSelectedId(theme.id)}>
//                   <ImageBackground
//                     source={sourceUri}
//                     className="h-44 w-full rounded-2xl items-center justify-center relative overflow-hidden"
//                     resizeMode="cover"
//                   >
//                     <View className="absolute inset-0 bg-black/10" />

//                     <Text
//                       style={{
//                         color: theme.textColor || "white",
//                         fontSize: 24,
//                         opacity: 0.8,
//                       }}
//                     >
//                       Aa
//                     </Text>

//                     {theme.isVideo && (
//                       <View className="absolute top-2 left-2">
//                         <MaterialCommunityIcons
//                           name="motion-play-outline"
//                           size={24}
//                           color="white"
//                         />
//                       </View>
//                     )}

//                     {isSelected && (
//                       <View className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 items-center justify-center">
//                         <Feather name="check" size={18} color="black" />
//                       </View>
//                     )}
//                   </ImageBackground>
//                 </TouchableOpacity>
//               </View>
//             );
//           })}
//         </View>
//       </View>
//       <TouchableOpacity
//         className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
//         onPress={handleContinue}
//       >
//         <Text className="text-black text-lg font-bold">Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ThemeSelectionScreen;

import { THEMES } from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

const ThemeSelectionScreen = () => {
  const router = useRouter();
  const { setThemeSource } = useAppContext();
  
  const [selectedId, setSelectedId] = useState(THEMES[0].id);

  const handleContinue = () => {
    const selectedTheme = THEMES.find(theme => theme.id === selectedId);

    if (selectedTheme) {
      // 1. CREATE the source object based on the theme's type
      let source;
      if (selectedTheme.type === 'image') {
        source = selectedTheme.video ? { uri: selectedTheme.video } : selectedTheme.value;
      } else { // type is 'color'
        source = { color: selectedTheme.value };
      }
      setThemeSource(source);
    }
    
    router.push("/welcome-message-screen");
  };

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <View className="items-center">
        <Text className="text-white text-3xl font-semibold text-center mb-8">
          Which theme would you like to start with?
        </Text>
        <View className="flex-row flex-wrap justify-center mt-36">
          {THEMES.map((theme) => {
            const isSelected = selectedId === theme.id;
            
            return (
              <View key={theme.id} className="p-2 w-1/3">
                <TouchableOpacity onPress={() => setSelectedId(theme.id)}>
                  
                  {/* 2. USE CONDITIONAL RENDERING for the background */}
                  {theme.type === 'image' ? (
                    // Render ImageBackground for image types
                    <ImageBackground
                      source={theme.video ? { uri: theme.video } : theme.value}
                      className="h-44 w-full rounded-2xl items-center justify-center relative overflow-hidden"
                      resizeMode="cover"
                    >
                      {/* Shared Overlay UI */}
                      <View className="absolute inset-0 bg-black/10" />
                      <Text style={{ color: theme.textColor || "white", fontSize: 24, opacity: 0.8 }}>Aa</Text>
                      {theme.isVideo && <View className="absolute top-2 left-2"><MaterialCommunityIcons name="motion-play-outline" size={24} color="white" /></View>}
                      {isSelected && <View className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 items-center justify-center"><Feather name="check" size={18} color="black" /></View>}
                    </ImageBackground>
                  ) : (
                    // Render a colored View for color types
                    <View 
                      style={{ backgroundColor: theme.value }}
                      className="h-44 w-full rounded-2xl items-center justify-center relative overflow-hidden"
                    >
                      {/* Shared Overlay UI */}
                      <Text style={{ color: theme.textColor || "white", fontSize: 24, opacity: 0.8 }}>Aa</Text>
                      {isSelected && <View className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 items-center justify-center"><Feather name="check" size={18} color="black" /></View>}
                    </View>
                  )}

                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeSelectionScreen;