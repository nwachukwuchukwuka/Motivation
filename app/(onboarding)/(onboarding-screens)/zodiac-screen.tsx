import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const getIconProps = (isSelected: boolean) => ({
  width: 24,
  height: 24,
  stroke: isSelected ? "#10b981" : "#52525b",
  strokeWidth: 1.5,
  fill: "none",
});

const CapricornIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0v10m0 -5h4m12 0a2 2 0 1 0 -4 0a2 2 0 0 0 4 0v-5h-4" />
  </Svg>
);
const AquariusIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M3 12l3 -2l3 4l3 -4l3 4l3 -2m-12 5l3 -2l3 4l3 -4l3 4l3 -2" />
  </Svg>
);
const PiscesIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M5 3a21 21 0 0 1 0 18m14 0a21 21 0 0 1 0 -18m-14 9h14" />
  </Svg>
);
const AriesIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M12 5a5 5 0 1 0 -4 8m4 -8a5 5 0 0 1 4 8m0 0v8m-8 -8v8" />
  </Svg>
);
const TaurusIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M6 3a6 6 0 0 0 12 0m-6 15a6 6 0 1 0 0 -12a6 6 0 0 0 0 12z" />
  </Svg>
);
const GeminiIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M3 7l18 0m-15 10l12 0m-11 -14l0 18m10 -18l0 18" />
  </Svg>
);
const CancerIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M6 6a3 3 0 0 1 -3 3v6a3 3 0 0 0 3 3m12 -12a3 3 0 0 1 3 3v6a3 3 0 0 0 -3 3m-4 3a3 3 0 0 1 -3 -3v-6a3 3 0 0 0 3 -3m-4 -3a3 3 0 0 1 3 3v6a3 3 0 0 0 -3 3" />
  </Svg>
);
const LeoIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M13 17a4 4 0 1 0 8 0m-17 0a4 4 0 1 0 8 0m-4 -14a4 4 0 0 0 4 4h4" />
  </Svg>
);
const VirgoIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M3 4h4v16h4m4 0a2 2 0 1 0 4 0v-3a2 2 0 1 0 -4 0m0 -11v-2a2 2 0 1 1 4 0" />
  </Svg>
);
const LibraIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M5 20h14m-12 -4h10a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1z" />
  </Svg>
);
const ScorpioIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
    <Path d="M3 4h4v16h4m4 0a2 2 0 1 0 4 0v-3a2 2 0 1 0 -4 0m-1 -7l3 3l3 -3" />
  </Svg>
);
const SagittariusIcon = ({ isSelected }: { isSelected: boolean }) => (
  <Svg {...getIconProps(isSelected)} viewBox="0 0 24 24">
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
  const insets = useSafeAreaInsets();
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedZodiac(option);

    setTimeout(() => {
      router.push("/motivation-source-screen");
    }, 400);
  };

  return (
    <View className="flex-1 bg-[#050505]" style={{ paddingTop: insets.top + 40 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            What's your Zodiac sign?
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {ZODIAC_OPTIONS.map(({ name, Icon }) => {
            const isSelected = selectedZodiac === name;

            return (
              <TouchableOpacity
                key={name}
                activeOpacity={0.8}
                onPress={() => handleSelect(name)}
                className={`w-[48%] h-[120px] rounded-[28px] border-2 transition-all justify-center items-center mb-1 ${isSelected
                  ? "bg-[#111111] border-emerald-500"
                  : "bg-[#111111] border-white/5"
                  }`}
              >
                <View className="absolute top-3 right-3">
                  {isSelected ? (
                    <View className="w-5 h-5 rounded-full bg-emerald-500 items-center justify-center">
                      <Feather name="check" size={10} color="black" />
                    </View>
                  ) : (
                    <View className="w-5 h-5 rounded-full border-2 border-white/10" />
                  )}
                </View>

                <View className="mb-2">
                  <Icon isSelected={isSelected} />
                </View>

                <Text
                  className={`text-[12px] tracking-widest uppercase text-center ${isSelected ? "text-white" : "text-[#52525b]"
                    }`}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ZodiacScreen;
