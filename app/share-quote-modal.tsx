// import { useAppContext } from "@/context/context";
// import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   ImageBackground,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const EditThemeIcon = () => (
//   <View className="w-16 h-16 rounded-full bg-[#3a4151]/80 border border-gray-500 items-center justify-center">
//     <Feather name="edit-3" size={32} color="white" />
//   </View>
// );

// const MessagesIcon = () => (
//   <View className="w-16 h-16 rounded-full bg-[#4CD964] items-center justify-center">
//     <Ionicons name="chatbubble-ellipses" size={36} color="white" />
//   </View>
// );

// const InstagramStoriesIcon = () => (
//   <LinearGradient
//     colors={["#feda75", "#fa7e1e", "#d62976"]}
//     style={{
//       width: 60,
//       height: 60,
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "50%",
//     }}
//   >
//     <FontAwesome name="instagram" size={36} color="white" />
//   </LinearGradient>
// );

// const TikTokIcon = () => (
//   <View className="w-16 h-16 rounded-full bg-black items-center justify-center">
//     <FontAwesome name="music" size={32} color="white" />
//   </View>
// );

// const FacebookIcon = () => (
//   <View className="w-16 h-16 rounded-full bg-[#1877F2] items-center justify-center">
//     <FontAwesome name="facebook-f" size={36} color="white" />
//   </View>
// );
// const ACTION_BUTTONS = [
//   { name: "Save image", icon: "download" },
//   { name: "Add to collection", icon: "bookmark" },
//   { name: "Copy", icon: "copy" },
// ];

// const SHARE_OPTIONS = [
//   { name: "Edit theme", Icon: EditThemeIcon },
//   { name: "Messages", Icon: MessagesIcon },
//   { name: "Instagram\nStories", Icon: InstagramStoriesIcon },
//   { name: "TikTok", Icon: TikTokIcon },
//   { name: "Facebook", Icon: FacebookIcon },
// ];

// const ShareQuoteModal = () => {
//   const router = useRouter();
//   const {
//     themeSource,
//     activeQuote,
//     fontSize,
//     fontFamily,
//     textColor,
//     textAlign,
//     textShadowStyle,
//   } = useAppContext();

//   const QuoteCardContent = () => (
//     <View className="flex-1 p-6 items-center justify-center">
//       <Text
//         style={[
//           {
//             fontFamily: fontFamily,
//             fontSize: fontSize,
//             color: textColor,
//             textAlign: textAlign,
//           },
//           textShadowStyle,
//         ]}
//         className="text-center leading-relaxed"
//       >
//         {activeQuote.text}
//       </Text>

//       <View className="flex-row items-center bg-black/30 rounded-full px-3 py-1 mt-6">
//         <Text className="text-white font-bold text-lg mr-2">”</Text>
//         <Text className="text-white/80 text-sm">motivation.app</Text>
//       </View>
//     </View>
//   );

//   const isImageBackground = typeof themeSource === "object" && themeSource.uri;

//   return (
//     <View className="flex-1 bg-[#262e3d] p-5">
//       <View className="absolute top-6 left-4 z-10">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Feather name="x" size={32} color="white" />
//         </TouchableOpacity>
//       </View>

//       <View className="flex-1 items-center justify-center mt-10 ">
//         <View className="w-[85%] h-[90%] rounded-2xl overflow-hidden">
//           {isImageBackground ? (
//             <ImageBackground
//               source={themeSource}
//               resizeMode="cover"
//               className="flex-1"
//             >
//               <View className="absolute inset-0 bg-black/20" />
//               <QuoteCardContent />
//             </ImageBackground>
//           ) : (
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor:
//                   typeof themeSource === "object" ? themeSource.color : "black",
//               }}
//             >
//               <QuoteCardContent />
//             </View>
//           )}
//         </View>
//       </View>

//       <View className="pb-6">
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           className="mb-6"
//         >
//           {ACTION_BUTTONS.map((action) => (
//             <TouchableOpacity
//               key={action.name}
//               className="items-center justify-center border border-gray-600 rounded-lg py-3 px-5 flex-row mr-3"
//               onPress={() => {
//                 if (action.name === "Add to collection") {
//                   router.push("/explore-topics/collections-screen");
//                 } else {
//                   console.log(`${action.name} clicked`);
//                 }
//               }}
//             >
//               <Feather name={action.icon as any} size={18} color="#969da8" />
//               <Text className="text-[#969da8] ml-2 font-semibold">
//                 {action.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {SHARE_OPTIONS.map((option) => (
//             <TouchableOpacity key={option.name} className="items-center mr-6">
//               <option.Icon />
//               <Text className="text-white text-xs mt-2 text-center">
//                 {option.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default ShareQuoteModal;

import { useAppContext } from "@/context/context";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useRef } from "react";

import * as MediaLibrary from "expo-media-library";
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ViewShot from "react-native-view-shot";

const EditThemeIcon = () => (
  <View className="w-16 h-16 rounded-full bg-[#3a4151]/80 border border-gray-500 items-center justify-center">
    <Feather name="edit-3" size={32} color="white" />
  </View>
);

const MessagesIcon = () => (
  <View className="w-16 h-16 rounded-full bg-[#4CD964] items-center justify-center">
    <Ionicons name="chatbubble-ellipses" size={36} color="white" />
  </View>
);

const InstagramStoriesIcon = () => (
  <LinearGradient
    colors={["#feda75", "#fa7e1e", "#d62976"]}
    style={{
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    }}
  >
    <FontAwesome name="instagram" size={36} color="white" />
  </LinearGradient>
);

const TikTokIcon = () => (
  <View className="w-16 h-16 rounded-full bg-black items-center justify-center">
    <FontAwesome name="music" size={32} color="white" />
  </View>
);

const FacebookIcon = () => (
  <View className="w-16 h-16 rounded-full bg-[#1877F2] items-center justify-center">
    <FontAwesome name="facebook-f" size={36} color="white" />
  </View>
);
const ACTION_BUTTONS = [
  { name: "Save image", icon: "download" },
  { name: "Add to collection", icon: "bookmark" },
  { name: "Copy", icon: "copy" },
];

const SHARE_OPTIONS = [
  { name: "Edit theme", Icon: EditThemeIcon },
  { name: "Messages", Icon: MessagesIcon },
  { name: "Instagram\nStories", Icon: InstagramStoriesIcon },
  { name: "TikTok", Icon: TikTokIcon },
  { name: "Facebook", Icon: FacebookIcon },
];

const ShareQuoteModal = () => {
  const router = useRouter();
  const {
    themeSource,
    activeQuote,
    fontSize,
    fontFamily,
    textColor,
    textAlign,
    textShadowStyle,
  } = useAppContext();

  const viewShotRef = useRef<ViewShot>(null);

  const handleSaveImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "We need permission to save photos to your device."
        );
        return;
      }

      const uri = await viewShotRef.current?.capture?.();
      if (!uri) {
        throw new Error("Could not capture image.");
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("Saved!", "The quote image has been saved to your photos.");
    } catch (error: any) {
      console.error("Error saving image:", error);
      Alert.alert("Error", "Sorry, we could not save the image.");
    }
  };

  const QuoteCardContent = () => (
    <View className="flex-1 p-6 items-center justify-center">
      <Text
        style={[
          {
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: textColor,
            textAlign: textAlign,
          },
          textShadowStyle,
        ]}
        className="text-center leading-relaxed"
      >
        {activeQuote.text}
      </Text>

      <View className="flex-row items-center bg-black/30 rounded-full px-3 py-1 mt-6">
        <Text className="text-white font-bold text-lg mr-2">”</Text>
        <Text className="text-white/80 text-sm">motivation.app</Text>
      </View>
    </View>
  );

  const isImageBackground = typeof themeSource === "object" && themeSource.uri;

  return (
    <View className="flex-1 bg-[#262e3d] p-5">
      <View className="absolute top-6 left-4 z-10">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="x" size={32} color="white" />
        </TouchableOpacity>
      </View>

      {/* <View className="flex-1 items-center justify-center mt-10 ">
          <View className="w-[85%] h-[90%] rounded-2xl overflow-hidden">
            {isImageBackground ? (
              <ImageBackground
                source={themeSource}
                resizeMode="cover"
                className="flex-1"
              >
                <View className="absolute inset-0 bg-black/20" />
                <QuoteCardContent />
              </ImageBackground>
            ) : (
              <View
                style={{
                  flex: 1,
                  backgroundColor:
                    typeof themeSource === "object"
                      ? themeSource.color
                      : "black",
                }}
              >
                <QuoteCardContent />
              </View>
            )}
          </View>
      </View> */}
      <View className="flex-1 items-center justify-center mt-10">
        <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
          <View className="w-[320px] aspect-[9/14] rounded- overflow-hidden">
            {isImageBackground ? (
              <ImageBackground
                source={themeSource}
                resizeMode="cover"
                className="flex-1"
              >
                <View className="absolute inset-0 bg-black/20" />
                <QuoteCardContent />
              </ImageBackground>
            ) : (
              <View
                style={{
                  flex: 1,
                  backgroundColor:
                    typeof themeSource === "object"
                      ? themeSource.color
                      : "black",
                }}
              >
                <QuoteCardContent />
              </View>
            )}
          </View>
        </ViewShot>
      </View>

      <View className="pb-6">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {ACTION_BUTTONS.map((action) => (
            <TouchableOpacity
              key={action.name}
              className="items-center justify-center border border-gray-600 rounded-lg py-3 px-5 flex-row mr-3"
              // onPress={() => {
              //   if (action.name === "Add to collection") {
              //     router.push("/explore-topics/collections-screen");
              //   } else {
              //     console.log(`${action.name} clicked`);
              //   }
              // }}
              onPress={() => {
                if (action.name === "Save image") {
                  handleSaveImage();
                } else if (action.name === "Add to collection") {
                  router.push("/explore-topics/collections-screen");
                } else {
                  console.log(`${action.name} clicked`);
                }
              }}
            >
              <Feather name={action.icon as any} size={18} color="#969da8" />
              <Text className="text-[#969da8] ml-2 font-semibold">
                {action.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {SHARE_OPTIONS.map((option) => (
            <TouchableOpacity key={option.name} className="items-center mr-6">
              <option.Icon />
              <Text className="text-white text-xs mt-2 text-center">
                {option.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ShareQuoteModal;
