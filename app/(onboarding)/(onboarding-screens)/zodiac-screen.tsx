import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const IconProps = {
  width: 24,
  height: 24,
  stroke: "#969da8",
  strokeWidth: 1.5,
};

const CapricornIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0v10m0 -5h4m12 0a2 2 0 1 0 -4 0a2 2 0 0 0 4 0v-5h-4" />
  </Svg>
);
const AquariusIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M3 12l3 -2l3 4l3 -4l3 4l3 -2m-12 5l3 -2l3 4l3 -4l3 4l3 -2" />
  </Svg>
);
const PiscesIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M5 3a21 21 0 0 1 0 18m14 0a21 21 0 0 1 0 -18m-14 9h14" />
  </Svg>
);
const AriesIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M12 5a5 5 0 1 0 -4 8m4 -8a5 5 0 0 1 4 8m0 0v8m-8 -8v8" />
  </Svg>
);
const TaurusIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M6 3a6 6 0 0 0 12 0m-6 15a6 6 0 1 0 0 -12a6 6 0 0 0 0 12z" />
  </Svg>
);
const GeminiIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M3 7l18 0m-15 10l12 0m-11 -14l0 18m10 -18l0 18" />
  </Svg>
);
const CancerIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M6 6a3 3 0 0 1 -3 3v6a3 3 0 0 0 3 3m12 -12a3 3 0 0 1 3 3v6a3 3 0 0 0 -3 3m-4 3a3 3 0 0 1 -3 -3v-6a3 3 0 0 0 3 -3m-4 -3a3 3 0 0 1 3 3v6a3 3 0 0 0 -3 3" />
  </Svg>
);
const LeoIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M13 17a4 4 0 1 0 8 0m-17 0a4 4 0 1 0 8 0m-4 -14a4 4 0 0 0 4 4h4" />
  </Svg>
);
const VirgoIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M3 4h4v16h4m4 0a2 2 0 1 0 4 0v-3a2 2 0 1 0 -4 0m0 -11v-2a2 2 0 1 1 4 0" />
  </Svg>
);
const LibraIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M5 20h14m-12 -4h10a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1z" />
  </Svg>
);
const ScorpioIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M3 4h4v16h4m4 0a2 2 0 1 0 4 0v-3a2 2 0 1 0 -4 0m-1 -7l3 3l3 -3" />
  </Svg>
);
const SagittariusIcon = () => (
  <Svg {...IconProps} viewBox="0 0 24 24">
    <Path d="M4 20l16 -16m-7 0h7v7m-11 5l5 5" />
  </Svg>
);

const ZODIAC_OPTIONS = [
  { name: "Capricorn", Icon: CapricornIcon },
  { name: "Aquarius", Icon: AquariusIcon },
  { name: "Pisces", Icon: PiscesIcon },
  { name: "Aries", Icon: AriesIcon },
  { name: "Taurus", Icon: TaurusIcon },
  { name: "Gemini", Icon: GeminiIcon },
  { name: "Cancer", Icon: CancerIcon },
  { name: "Leo", Icon: LeoIcon },
  { name: "Virgo", Icon: VirgoIcon },
  { name: "Libra", Icon: LibraIcon },
  { name: "Scorpio", Icon: ScorpioIcon },
  { name: "Sagittarius", Icon: SagittariusIcon },
];

const ZodiacScreen = () => {
  const router = useRouter();
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedZodiac(option);

    setTimeout(() => {
      router.push("/motivation-source-screen");
    }, 400);
  };

  return (
    <View className="flex-1 px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center mb-6">
          What's your Zodiac sign?
        </Text>

        <View>
          {ZODIAC_OPTIONS.map(({ name, Icon }) => {
            const isSelected = selectedZodiac === name;

            return (
              <TouchableOpacity
                key={name}
                className={`flex-row justify-between items-center rounded-full px-6 py-4 my-2 border ${
                  isSelected
                    ? "bg-[#333b4f] border-gray-300"
                    : "bg-transparent border-[#3a4151]"
                }`}
                onPress={() => handleSelect(name)}
              >
                <View className="flex-row items-center">
                  <Icon />
                  <Text
                    className={`ml-4 text-lg ${
                      isSelected
                        ? "text-white font-semibold"
                        : "text-[#969da8]"
                    }`}
                  >
                    {name}
                  </Text>
                </View>
                <View
                  className={`w-6 h-6 rounded-full ${
                    isSelected
                      ? "border-[3px] border-gray-300"
                      : "border-[2px] border-[#969da8]"
                  }`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ZodiacScreen;
