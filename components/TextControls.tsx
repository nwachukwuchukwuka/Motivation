import { COLORS } from "@/constants/constants";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";


const FONTS = [
  { displayName: "momo-signature", fontFamily: "momo-signature" },
  { displayName: "BebasNeue-Regular", fontFamily: "BebasNeue-Regular" },
  {
    displayName: "Caveat-VariableFont_wght",
    fontFamily: "Caveat-VariableFont_wght",
  },
  {
    displayName: "DancingScript-VariableFont_wght",
    fontFamily: "DancingScript-VariableFont_wght",
  },
  { displayName: "IBMPlexMono-Bold", fontFamily: "IBMPlexMono-Bold" },
  { displayName: "IndieFlower-Regular", fontFamily: "IndieFlower-Regular" },
  { displayName: "LibreBaskerville-Bold", fontFamily: "LibreBaskerville-Bold" },
  { displayName: "Lobster-Regular", fontFamily: "Lobster-Regular" },
  { displayName: "MomoSignature-Regular", fontFamily: "MomoSignature-Regular" },
  {
    displayName: "ShadowsIntoLight-Regular",
    fontFamily: "ShadowsIntoLight-Regular",
  },
  {
    displayName: "Sixtyfour-Regular-VariableFont_BLED,SCAN",
    fontFamily: "Sixtyfour-Regular-VariableFont_BLED,SCAN",
  },
  {
    displayName: "SourceCodePro-Italic-VariableFont_wght",
    fontFamily: "SourceCodePro-Italic-VariableFont_wght",
  },
  {
    displayName: "SourceCodePro-VariableFont_wght",
    fontFamily: "SourceCodePro-VariableFont_wght",
  },
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
              fontSize: 24,
              color: "#10b981",
              fontWeight: "300",
              textShadowColor: "#10b981",
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
              fontSize: 24,
              color: "#10b981",
              fontWeight: "bold",
              textShadowColor: "#10b981",
              textShadowRadius: 4,
            }}
          >
            A
          </Text>
        );
      case "filled":
      default:
        return (
          <Text style={{ fontSize: 24, color: "#10b981", fontWeight: "bold" }}>
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
      <View className="flex-row items-center py-2">
        <TouchableOpacity
          onPress={() => setActiveControl("main")}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center mr-3 border border-white/10"
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FONTS.map((font) => (
            <TouchableOpacity
              key={font.fontFamily}
              onPress={() => onFontChange(font.fontFamily)}
              className={`rounded-2xl px-5 py-2.5 mx-1.5 justify-center bg-[#111111] border ${currentFont === font.fontFamily ? "border-emerald-500" : "border-white/5"
                }`}
            >
              <Text
                style={{ fontFamily: font.fontFamily }}
                className={`text-base ${currentFont === font.fontFamily ? "text-emerald-500" : "text-white"}`}
              >
                {font.displayName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  if (activeControl === "color") {
    return (
      <View className="flex-row items-center py-2">
        <TouchableOpacity
          onPress={() => setActiveControl("main")}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center mr-3 border border-white/10"
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center bg-[#111111] mx-1 border border-emerald-500/30">
            <Feather name="aperture" size={20} color="#10b981" />
          </TouchableOpacity>
          {COLORS.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onColorChange(color)}
              className={`w-10 h-10 rounded-full mx-2 border ${currentColor === color ? 'border-emerald-500 border-2' : 'border-white/10'}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View>
      <View className="flex-row justify-around items-center bg-[#0a0a0a] rounded-[24px] p-2 border border-white/5">
        <TouchableOpacity
          onPress={() => setActiveControl("font")}
          className="p-4 items-center"
        >
          <MaterialCommunityIcons name="format-font" size={26} color="white" />
          <View className="w-1 h-1 rounded-full bg-emerald-500 mt-1 opacity-50" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveControl("color")}
          className="p-4 items-center"
        >
          <Feather name="aperture" size={26} color="white" />
          <View className="w-1 h-1 rounded-full bg-emerald-500 mt-1 opacity-50" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleAlignmentToggle}
          className="p-4 items-center"
        >
          <MaterialCommunityIcons
            name={alignmentIcon}
            size={26}
            color="white"
          />
          <View className="w-1 h-1 rounded-full bg-emerald-500 mt-1 opacity-50" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLetterCaseToggle}
          className="p-4 items-center"
        >
          <LetterCaseIcon />
          <View className="w-1 h-1 rounded-full bg-emerald-500 mt-1 opacity-50" />
        </TouchableOpacity>
      </View>

      <View
        style={{ height: SLIDER_HEIGHT }}
        className="absolute right-4 bottom-48 w-1 bg-[#111111] rounded-full items-center border border-white/5"
      >
        <View className="absolute inset-0 bg-emerald-500/20 rounded-full" />
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[animatedKnobStyle]}
            className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#050505] shadow-lg shadow-emerald-500/40"
          />
        </GestureDetector>
      </View>
    </View>
  );
};

export default TextControls;
