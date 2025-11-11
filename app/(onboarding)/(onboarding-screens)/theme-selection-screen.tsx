import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const THEMES = [
  {
    id: 1,
    value: {
      uri: "https://images.unsplash.com/photo-1549488344-cbb6c14cf08b?q=80&w=800",
    },
    isVideo: false,
  },
  {
    id: 2,
    value: {
      uri: "https://images.unsplash.com/photo-1528824652433-2a625a2ad817?q=80&w=800",
    },
    isVideo: true,
  },
  {
    id: 3,
    value: {
      uri: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800",
    },
    isVideo: true,
  },
  {
    id: 4,
    value: {
      uri: "https://images.unsplash.com/photo-1517511529138-198555893a73?q=80&w=800",
    },
    isVideo: false,
  },
  {
    id: 5,
    value: {
      uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800",
    },
    textColor: "black",
    isVideo: false,
  },
  {
    id: 6,
    value: {
      uri: "https://images.unsplash.com/photo-1447014421976-7f4415b8e863?q=80&w=800",
    },
    isVideo: false,
  },
];

const CheckIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24">
    <Path
      fill="black"
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
    />
  </Svg>
);
const PlayIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth="1.5"
      fill="none"
    />
    <Path d="M10 8l6 4-6 4V8z" fill="white" fillOpacity="0.8" />
  </Svg>
);

const ThemeSelectionScreen = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(1);

  const handleContinue = () => {
    router.push("/welcome-message-screen");
  };

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <View className="items-center">
        <Text className="text-white text-3xl font-semibold text-center mb-8">
          Which theme would you like to start with?
        </Text>
        <View className="flex-row flex-wrap justify-center mt-36">
          {THEMES.map((theme) => (
            <View key={theme.id} className="p-2 w-1/3">
              <TouchableOpacity onPress={() => setSelectedId(theme.id)}>
                <ImageBackground
                  source={theme.value}
                  className="h-44 w-full rounded-2xl items-center justify-center relative overflow-hidden"
                  resizeMode="cover"
                >
                  <View className="absolute inset-0 bg-black/10" />

                  {selectedId === theme.id ? (
                    <View className="bg-white/90 rounded-full w-8 h-8 items-center justify-center">
                      <CheckIcon />
                    </View>
                  ) : (
                    <Text
                      style={{
                        color: theme.textColor || "white",
                        fontSize: 24,
                        opacity: 0.8,
                      }}
                    >
                      Aa
                    </Text>
                  )}
                  {theme.isVideo && selectedId !== theme.id && (
                    <View className="absolute top-2 left-2">
                      <PlayIcon />
                    </View>
                  )}
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
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
