import { COLORS } from "@/constants/constants";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

const FONTS = [
  { displayName: "Gordita-Black", fontFamily: "Kalam-Bold" },
  { displayName: "Mainsail", fontFamily: "serif" },
  { displayName: "System", fontFamily: "sans-serif" },
];

export type LetterCaseStyle = "filled" | "thin" | "thick";

type TextControlsProps = {
  onFontSizeChange: (size: number) => void;
  initialFontSize: number;
  onFontChange: (font: string) => void;
  currentFont: string;
  onColorChange: (color: string) => void;
  currentColor: string;
  onAlignmentChange: (alignment: "center" | "left" | "right") => void;
  currentAlignment: "center" | "left" | "right";
  onLetterCaseChange: (style: LetterCaseStyle) => void;
  currentLetterCase: LetterCaseStyle;
};

const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 48;
const SLIDER_HEIGHT = 200;

const TextControls = ({
  onFontSizeChange,
  initialFontSize,
  onFontChange,
  currentFont,
  onColorChange,
  currentColor,
  onAlignmentChange,
  currentAlignment,
  onLetterCaseChange,
  currentLetterCase,
}: TextControlsProps) => {
  const [activeControl, setActiveControl] = useState<"main" | "font" | "color">(
    "main"
  );

  const initialY =
    ((initialFontSize - MIN_FONT_SIZE) / (MAX_FONT_SIZE - MIN_FONT_SIZE)) *
    SLIDER_HEIGHT;
  const translateY = useSharedValue(initialY);
  const startY = useSharedValue(initialY);
  const panGesture = Gesture.Pan()
    .onStart(() => {
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      let newY = startY.value + event.translationY;
      newY = Math.max(0, Math.min(newY, SLIDER_HEIGHT));
      translateY.value = newY;
      const newSize =
        MIN_FONT_SIZE +
        (newY / SLIDER_HEIGHT) * (MAX_FONT_SIZE - MIN_FONT_SIZE);
      runOnJS(onFontSizeChange)(newSize);
    });
  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleAlignmentToggle = () => {
    if (currentAlignment === "center") onAlignmentChange("right");
    else if (currentAlignment === "right") onAlignmentChange("left");
    else onAlignmentChange("center");
  };

  const handleLetterCaseToggle = () => {
    if (currentLetterCase === "filled") onLetterCaseChange("thin");
    else if (currentLetterCase === "thin") onLetterCaseChange("thick");
    else onLetterCaseChange("filled");
  };

  const LetterCaseIcon = () => {
    switch (currentLetterCase) {
      case "thin":
        return (
          <Text
            style={{
              fontSize: 28,
              color: "white",
              fontWeight: "300",
              textShadowColor: "white",
              textShadowRadius: 1,
            }}
          >
            A
          </Text>
        );
      case "thick":
        return (
          <Text
            style={{
              fontSize: 28,
              color: "white",
              fontWeight: "bold",
              textShadowColor: "white",
              textShadowRadius: 3,
            }}
          >
            A
          </Text>
        );
      case "filled":
      default:
        return (
          <Text style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>
            A
          </Text>
        );
    }
  };
  const alignmentIcon = {
    center: "format-align-center",
    left: "format-align-left",
    right: "format-align-right",
  }[currentAlignment] as any;

  if (activeControl === "font") {
    return (
      <View className="flex-row justify-around gap-4 py-4">
        <Pressable
          onPress={() => setActiveControl("main")}
          className="p-2 bg-[#262e3d] rounded-full"
        >
          <Feather name="chevron-left" size={24} color="white" />
        </Pressable>
        <Pressable className="p-2 bg-[#262e3d] rounded-full">
          <Feather name="more-horizontal" size={24} color="white" />
        </Pressable>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FONTS.map((font) => (
            <Pressable
              key={font.fontFamily}
              onPress={() => onFontChange(font.fontFamily)}
              className={`rounded-full px-4 py-2 mx-1.5 justify-center bg-[#262e3d]  ${
                currentFont === font.fontFamily ? "border" : ""
              }`}
            >
              <Text
                style={{ fontFamily: font.fontFamily }}
                className="text-lg text-white "
              >
                {font.displayName}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  }

  if (activeControl === "color") {
    return (
      <View className="flex-row items-center p-2">
        <TouchableOpacity
          onPress={() => setActiveControl("main")}
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
              onPress={() => onColorChange(color)}
              className="w-10 h-10 rounded-full mx-2"
              style={{ backgroundColor: color }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <>
      <View className="flex-row justify-around items-center bg-[#262e3d] rounded-2xl p-4">
        <TouchableOpacity onPress={() => setActiveControl("font")}>
          <MaterialCommunityIcons name="format-font" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveControl("color")}>
          <Feather name="aperture" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAlignmentToggle}>
          <MaterialCommunityIcons
            name={alignmentIcon}
            size={28}
            color="white"
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <MaterialCommunityIcons
            name="format-letter-case"
            size={28}
            color="white"
          />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleLetterCaseToggle}>
          <LetterCaseIcon />
        </TouchableOpacity>
      </View>

      <View
        style={{ height: SLIDER_HEIGHT }}
        className="absolute right-4 bottom-48 w-1.5 bg-white rounded-full items-center"
      >
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={animatedKnobStyle}
            className="w-6 h-6 -ml-2.5 bg-gray-400 rounded-full border-2 border-white"
          />
        </GestureDetector>
      </View>
    </>
  );
};

export default TextControls;
