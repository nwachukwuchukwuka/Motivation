import { THEMES } from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemeSelectionScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { setThemeSource } = useAppContext();

  const [selectedId, setSelectedId] = useState(THEMES[0].id);

  const handleContinue = () => {
    const selectedTheme = THEMES.find(theme => theme.id === selectedId);

    if (selectedTheme) {
      let source;
      if (selectedTheme.type === 'image') {
        source = selectedTheme.video ? { uri: selectedTheme.video } : selectedTheme.value;
      } else {
        source = { color: selectedTheme.value };
      }
      setThemeSource(source);
    }

    router.push("/welcome-message-screen");
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
            Which theme would you like to start with?
          </Text>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Choose a visual atmosphere that resonates with your focus.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {THEMES.map((theme) => {
            const isSelected = selectedId === theme.id;

            return (
              <TouchableOpacity 
                key={theme.id} 
                activeOpacity={0.9}
                onPress={() => setSelectedId(theme.id)}
                className={`w-[48%] h-[180px] rounded-[32px] overflow-hidden mb-4 border-2 ${
                  isSelected ? "border-emerald-500" : "border-white/5"
                }`}
              >
                {theme.type === 'image' ? (
                  <ImageBackground
                    source={theme.video ? { uri: theme.video } : theme.value}
                    className="flex-1 items-center justify-center relative"
                    resizeMode="cover"
                  >
                    <View className="absolute inset-0 bg-black/20" />
                    
                    <Text 
                      className="font-medium opacity-80"
                      style={{ color: theme.textColor || "white", fontSize: 32 }}
                    >
                      Aa
                    </Text>

                    {theme.video && (
                      <View className="absolute top-4 left-4">
                        <MaterialCommunityIcons name="motion-play-outline" size={20} color="white" />
                      </View>
                    )}

                    {isSelected && (
                      <View className="absolute top-4 right-4 bg-emerald-500 w-7 h-7 rounded-full items-center justify-center shadow-lg shadow-emerald-500/50">
                        <Feather name="check" size={16} color="black" />
                      </View>
                    )}
                  </ImageBackground>
                ) : (
                  <View
                    style={{ backgroundColor: theme.value }}
                    className="flex-1 items-center justify-center relative"
                  >
                    <Text 
                      className="font-medium opacity-80"
                      style={{ color: theme.textColor || "white", fontSize: 32 }}
                    >
                      Aa
                    </Text>

                    {isSelected && (
                      <View className="absolute top-4 right-4 bg-emerald-500 w-7 h-7 rounded-full items-center justify-center shadow-lg shadow-emerald-500/50">
                        <Feather name="check" size={16} color="black" />
                      </View>
                    )}
                  </View>
                )}
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

export default ThemeSelectionScreen;