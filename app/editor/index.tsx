import TextControls from "@/components/TextControls";
import { COLORS } from "@/constants/constants";
import { useAppContext } from "@/context/context";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const QuoteEditorScreen = () => {
  const router = useRouter();
  const {
    themeSource,
    setThemeSource,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    textColor,
    setTextColor,
    textAlign,
    setTextAlign,
    letterCaseStyle,
    setLetterCaseStyle,
  } = useAppContext();

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  type BackgroundSource = { uri?: string; color?: string };
  const [background, setBackground] = useState<BackgroundSource>(themeSource);

  const [activeTab, setActiveTab] = useState("Background");
  const [isCustomImage, setIsCustomImage] = useState(false);
  const { quoteText, quoteAuthor } = useLocalSearchParams<{
    quoteText: string;
    quoteAuthor: string;
  }>();

  const textShadowStyle = useMemo(() => {
    switch (letterCaseStyle) {
      case "thin":
        return {
          textShadowColor: "rgba(255, 255, 255, 0.8)",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 2,
        };
      case "thick":
        return {
          textShadowColor: "rgba(255, 255, 255, 0.9)",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 8,
        };
      case "filled":
      default:
        return {};
    }
  }, [letterCaseStyle]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      setBackground({ uri: result.assets[0].uri });
      setIsCustomImage(true);
    }
  };

  useEffect(() => {
    setBackground(themeSource);

    if (typeof themeSource === "object" && themeSource.uri) {
      setIsCustomImage(true);
    }
  }, [themeSource]);

  const handleDone = () => {
    setThemeSource(background);
    router.back();
  };

  const renderBottomControls = () => {
    return (
      <>
        {isColorPickerVisible ? (
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => setIsColorPickerVisible(false)}
              className="p-1.5 bg-[#262e3d] rounded-full mr-3"
            >
              <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center bg-gray-500 mx-1">
                <Feather name="aperture" size={24} color="white" />
              </TouchableOpacity>
              {COLORS.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setBackground({ color })}
                  className="w-10 h-10 rounded-full mx-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </ScrollView>
          </View>
        ) : (
          <View className="flex-row justify-around items-center bg-[#262e3d] rounded-2xl p-4">
            <Pressable onPress={pickImage} className="items-center px-4">
              <Feather name="camera" size={28} color="white" />
            </Pressable>
            <Pressable
              onPress={() => router.push("/editor/unsplash")}
              className="items-center px-4"
            >
              <Feather name="image" size={28} color="white" />
            </Pressable>
            <Pressable
              onPress={() => setIsColorPickerVisible(true)}
              className="items-center px-4"
            >
              <Feather name="aperture" size={28} color="white" />
            </Pressable>
          </View>
        )}
      </>
    );
  };

  const MainContent = () => (
    <View className="flex-1 justify-center items-center p-8">
      <Text
        style={[
          {
            // fontFamily: "momo-signature",
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: textColor,
            textAlign: textAlign,
          },
          textShadowStyle,
        ]}
        className=" leading-relaxed"
      >
        {quoteText}
      </Text>
      {quoteAuthor && (
        <Text
          style={{
            fontFamily,
            fontSize: fontSize / 2,
            color: textColor,
            textAlign,
          }}
          className="mt-4"
        >
          {quoteAuthor}
        </Text>
      )}
    </View>
  );

  return (
    <View className="flex-1">
      {background.uri ? (
        <ImageBackground
          source={background}
          resizeMode="cover"
          className="flex-1"
        >
          <MainContent />
        </ImageBackground>
      ) : (
        <View style={{ backgroundColor: background.color }} className="flex-1">
          <MainContent />
        </View>
      )}

      <SafeAreaView className="absolute top-10 left-0 right-0 bottom-10 justify-between">
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-black/50 w-10 h-10 rounded-full items-center justify-center"
          >
            <Feather name="x" size={24} color="white" />
          </TouchableOpacity>

          {(isCustomImage || background || activeTab === "Text") && (
            <TouchableOpacity
              onPress={handleDone}
              className="bg-white rounded-full px-6 py-2"
            >
              <Text className="text-black font-bold text-base">Done</Text>
            </TouchableOpacity>
          )}
        </View>

        <View className="p-4">
          {activeTab === "Background" ? (
            renderBottomControls()
          ) : (
            <TextControls
              onFontSizeChange={setFontSize}
              initialFontSize={fontSize}
              onFontChange={setFontFamily}
              currentFont={fontFamily}
              onColorChange={setTextColor}
              currentColor={textColor}
              onAlignmentChange={setTextAlign}
              currentAlignment={textAlign}
              onLetterCaseChange={setLetterCaseStyle}
              currentLetterCase={letterCaseStyle}
            />
          )}

          <View className="flex-row items-center mt-4 rounded-full p-1 bg-[#262e3d]">
            <Pressable
              onPress={() => setActiveTab("Background")}
              className={`flex-1 py-2 rounded-full ${
                activeTab === "Background" ? "bg-[#3a4151]" : ""
              }`}
            >
              <Text className="font-bold text-center text-white">
                Background
              </Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => setActiveTab("Text")}
              className={`flex-1 py-2 rounded-full ${
                activeTab === "Text" ? "bg-[#3a4151]" : ""
              }`}
            >
              <Text className="font-bold text-center text-white">Text</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default QuoteEditorScreen;
