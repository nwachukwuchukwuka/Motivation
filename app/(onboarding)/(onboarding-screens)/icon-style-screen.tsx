import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

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

const IconStyleScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedId, setSelectedId] = useState(1);

  const handleContinue = () => {
    router.push("/bundle-offer-screen");
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 60 }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Which icon style do you like most?
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Personalize your workspace with a theme that inspires you.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {ICON_STYLES.map((style) => {
            const isSelected = selectedId === style.id;
            return (
              <TouchableOpacity 
                key={style.id} 
                activeOpacity={0.9}
                onPress={() => setSelectedId(style.id)}
                className={`w-[48%] h-[160px] rounded-[32px] overflow-hidden mb-4 border-2 ${
                  isSelected ? "border-emerald-500" : "border-white/5"
                }`}
              >
                <ImageBackground
                  source={style.value} 
                  className="flex-1 items-center justify-center p-4"
                  resizeMode="cover"
                >
                  <View className="absolute inset-0 bg-black/30" />
                  
                  {style.content === "icon" ? (
                    <Text
                      style={{
                        color: style.textColor || "white",
                        fontSize: 60,
                        fontWeight: "bold",
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: { width: 0, height: 2 },
                        textShadowRadius: 10,
                      }}
                    >
                      ”
                    </Text>
                  ) : (
                    <Text
                      className="text-center font-bold tracking-tight"
                      style={{
                        color: style.textColor || "white",
                        fontSize: 16,
                      }}
                    >
                      {style.content}
                    </Text>
                  )}

                  {isSelected && (
                    <View className="absolute top-3 right-3 bg-emerald-500 w-7 h-7 rounded-full items-center justify-center shadow-lg shadow-emerald-500/50">
                      <Feather name="check" size={16} color="black" />
                    </View>
                  )}
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/90">
        <TouchableOpacity
          className="bg-emerald-500 w-full py-5 rounded-[24px] items-center justify-center shadow-lg shadow-emerald-500/30"
          onPress={handleContinue}
          activeOpacity={0.9}
        >
          <Text className="text-black text-lg font-bold tracking-tight">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IconStyleScreen;