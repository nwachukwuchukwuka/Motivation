// import { useLocalSearchParams, useRouter } from "expo-router";
// import React from "react";
// import { Text, TouchableOpacity, View } from "react-native";

// const WelcomeMessageScreen = () => {
//   const router = useRouter();

//   const { userName } = useLocalSearchParams();
//   const name = userName || ""; 

//   const handleContinue = () => {
//     router.replace('/personalization-intro-screen'); 
//   };

//   return (
//     <View className="flex-1 justify-between items-center p-6 bg-black">

//       <View />

//       <Text className="text-white text-3xl font-bold text-center">
//         You are exactly where you are meant to be {name}.
//       </Text>

//       <TouchableOpacity
//         className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
//         onPress={handleContinue}
//       >
//         <Text className="text-black text-lg font-bold">Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default WelcomeMessageScreen;


import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
// 1. IMPORT ImageBackground
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
// 2. IMPORT your context hook
import { useAppContext } from "@/context/context"; // Adjust path if necessary

const WelcomeMessageScreen = () => {
  const router = useRouter();
  
  // 3. GET the themeSource from the context
  const { themeSource } = useAppContext();
  
  const { userName } = useLocalSearchParams<{ userName: string }>();
  // Added a comma for better grammar
  const name = userName ? `, ${userName}` : ""; 

  const handleContinue = () => {
    router.replace('/personalization-intro-screen'); 
  };
  
  // 4. CREATE a helper variable to check the background type
  const isImageBackground = typeof themeSource === 'object' && themeSource.uri;

  // 5. EXTRACT the main content to avoid code duplication
  const MainContent = () => (
    <View className="flex-1 justify-between items-center p-6">
      <View />
      <Text className="text-white text-3xl font-bold text-center">
        You are exactly where you are meant to be{name}.
      </Text>
      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
        onPress={handleContinue}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    // 6. USE CONDITIONAL RENDERING for the root component
    isImageBackground ? (
      <ImageBackground
        source={themeSource}
        resizeMode="cover"
        className="flex-1"
      >
        {/* Add the semi-transparent overlay for better text readability */}
        <View className="flex-1 bg-black/20">
            <MainContent />
        </View>
      </ImageBackground>
    ) : (
      <View
        className="flex-1"
        style={{
          backgroundColor: typeof themeSource === 'object' ? themeSource.color : 'black',
        }}
      >
        <MainContent />
      </View>
    )
  );
};

export default WelcomeMessageScreen;