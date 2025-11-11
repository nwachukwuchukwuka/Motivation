import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  Path,
  Rect,
  Stop,
  LinearGradient as SvgGradient,
} from "react-native-svg";


const EditThemeIcon = () => (
  <View className="w-16 h-16 rounded-full bg-[#3a4151]/80 border border-gray-500 items-center justify-center">
    <Svg width="40" height="40" viewBox="0 0 100 100">
      <Rect
        x="20"
        y="20"
        width="60"
        height="60"
        rx="10"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <Rect
        x="30"
        y="30"
        width="40"
        height="15"
        rx="5"
        fill="rgba(255,255,255,0.2)"
      />
    </Svg>
  </View>
);
const MessagesIcon = () => (
  <View className="w-16 h-16 rounded-full bg-[#4CD964] items-center justify-center">
    <Svg width="40" height="40" viewBox="0 0 24 24">
      <Path
        fill="white"
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
      />
    </Svg>
  </View>
);
const InstagramStoriesIcon = () => (
  <View className="w-16 h-16 rounded-full items-center justify-center">
    <Svg width="64" height="64" viewBox="0 0 64 64">
      <Defs>
        <SvgGradient id="instaGrad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#feda75" />
          <Stop offset="50%" stopColor="#fa7e1e" />
          <Stop offset="100%" stopColor="#d62976" />
        </SvgGradient>
      </Defs>
      <Circle cx="32" cy="32" r="30" fill="url(#instaGrad)" />
      <Circle cx="32" cy="32" r="26" fill="#262e3d" />
      <Circle cx="32" cy="32" r="22" stroke="white" strokeWidth="3" />
      <Path d="M30 22h4v8h8v4h-8v8h-4v-8h-8v-4h8z" fill="white" />
    </Svg>
  </View>
);
const TikTokIcon = () => (
  <View className="w-16 h-16 rounded-full bg-black items-center justify-center">
    <Svg width="36" height="36" viewBox="0 0 24 24">
      <Path
        fill="#fff"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.79 4.09 1.41 1.34 3.24 2.13 5.09 2.21v3.31c-1.92.05-3.82-.44-5.45-1.59-1.31-.93-2.31-2.22-2.93-3.67H12.5v9.82c0 1.28-.43 2.53-1.28 3.55-1.13 1.31-2.83 2.05-4.56 1.99v-3.32c.93-.06 1.84-.31 2.66-.79.6-.36 1.11-.86 1.5-1.46v-9.82H6.19v-3.31h3.02V.02h3.31z"
      />
      <Path
        fill="#25F4EE"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.79 4.09 1.41 1.34 3.24 2.13 5.09 2.21v3.31c-1.92.05-3.82-.44-5.45-1.59-1.31-.93-2.31-2.22-2.93-3.67H12.5v.01z"
      />
      <Path
        fill="#FF0050"
        d="M12.525 9.84v-3.31h-3.02v3.31H6.19v3.31h3.31v9.82c0 1.28-.43 2.53-1.28 3.55-1.13 1.31-2.83 2.05-4.56 1.99v-3.32c.93-.06 1.84-.31 2.66-.79.6-.36 1.11-.86 1.5-1.46v-9.82h3.31z"
      />
    </Svg>
  </View>
);
const FacebookIcon = () => (
  <View className="w-16 h-16 rounded-full bg-[#1877F2] items-center justify-center">
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        fill="white"
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.95c5.05-.5 9-4.76 9-9.95z"
      />
    </Svg>
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

  return (
    <View className="flex-1 bg-[#262e3d] p-5">
      <View className="absolute top-6 left-4 z-10">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="x" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center mt-10 ">
        <View className="w-[85%] h-[90%] bg-black rounded-2xl p-6 items-center justify-center">
          <Text className="text-white text-xl text-center leading-relaxed">
            Don't chase, don't beg, don't stress, don't be desperate, just
            relax. When you relax, it will come to you. Make your wants want
            you.
          </Text>
          <View className="flex-row items-center bg-white/10 rounded-full px-3 py-1 mt-6">
            <Text className="text-white font-bold text-lg mr-2">”</Text>
            <Text className="text-white/80 text-sm">motivation.app</Text>
          </View>
        </View>
      </View>

      <View className="pb-6">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          className="mb-6"
        >
          {ACTION_BUTTONS.map((action) => (
            <TouchableOpacity
              key={action.name}
              className="items-center justify-center border border-gray-600 rounded-lg py-3 px-5 flex-row mr-3"
              onPress={() => {
                if (action.name === "Add to collection") {
                  router.push("/");
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {SHARE_OPTIONS.map((option) => (
            <TouchableOpacity key={option.name} className="items-center mr-4">
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
