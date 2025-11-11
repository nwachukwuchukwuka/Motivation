import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ICON_STYLES = [
  {
    id: 1,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=800" },
    content: "icon",
  },
  {
    id: 2,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800" },
    content: "icon",
  },
  {
    id: 3,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1506220926950-6365b206772b?q=80&w=800" },
    content: "icon",
  },
  {
    id: 4,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1588621412235-3359b418a29a?q=80&w=800" },
    content: "icon",
  },
  {
    id: 5,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1554034483-04aff2358e72?q=80&w=800" },
    content: "icon",
    textColor: "black",
  },
  {
    id: 6,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800" },
    content: "Do not quit",
  },
  {
    id: 7,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1599232857413-a44283804828?q=80&w=800" },
    content: "icon",
  },
  {
    id: 8,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800" },
    content: "Chase your dreams",
  },
  {
    id: 9,
    type: "image",
    value: { uri: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800" },
    content: "Be you. Do you. For you.",
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

const IconStyleScreen = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(1);

  const handleContinue = () => {
    router.push("/bundle-offer-screen");
  };

  return (
    <View className="flex-1 justify-between p-6 pt-24 bg-[#262e3d]">
      <View className="items-center">
        <Text className="text-white text-3xl font-semibold text-center mb-8">
          Which icon style do you like the most?
        </Text>
        <View className="flex-row flex-wrap justify-center mt-32">
          {ICON_STYLES.map((style) => (
            <View key={style.id} className="p-2 w-1/3">
              <TouchableOpacity onPress={() => setSelectedId(style.id)}>
                <ImageBackground
                  source={style.value} 
                  className="h-24 w-full rounded-2xl items-center justify-center p-2 relative overflow-hidden"
                  resizeMode="cover"
                >
                  <View className="absolute inset-0 bg-black/20" />
                  
                  {style.content === "icon" ? (
                    <Text
                      style={{
                        color: style.textColor || "white",
                        fontSize: 48,
                        fontWeight: "bold",
                      }}
                    >
                      ”
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: style.textColor || "white",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {style.content}
                    </Text>
                  )}
                  {selectedId === style.id && (
                    <View className="absolute inset-0 bg-black/30 border-2 border-white rounded-2xl items-end p-1">
                      <View className="bg-white rounded-full w-5 h-5 items-center justify-center">
                        <CheckIcon />
                      </View>
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

export default IconStyleScreen;