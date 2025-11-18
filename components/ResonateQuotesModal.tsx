import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, {
  Defs,
  Path,
  Stop,
  LinearGradient as SvgGradient,
} from "react-native-svg";

const GradientHeartIcon = () => (
  <Svg width="100" height="100" viewBox="0 0 24 24">
    <Defs>
      <SvgGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0%" stopColor="#C97EFF" />
        <Stop offset="100%" stopColor="#F5A1BE" />
      </SvgGradient>
    </Defs>
    <Path
      fill="url(#heartGradient)"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </Svg>
);

export type ResonateQuotesModalRef = BottomSheetModal;

const ResonateQuotesModal = forwardRef<ResonateQuotesModalRef>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

  const handleGotIt = () => {
    if (ref && "current" in ref) {
      ref.current?.dismiss();
    }
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      animateOnMount={true}
      backgroundStyle={{ backgroundColor: "#262e3d" }}
      handleIndicatorStyle={{ backgroundColor: "gray" }}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      )}
    >
      <BottomSheetView
        style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 40 }}
      >
        <View className="flex-1 justify-center items-center mt-12">
          <GradientHeartIcon />
          <Text className="text-white text-3xl font-semibold text-center mt-8">
            Get quotes that resonate with you
          </Text>
          <Text className="text-gray-300 text-lg text-center mt-4">
            Personalize your feed by adding at least 5 quotes to favorites
          </Text>
        </View>
        <View className="w-full mt-6">
          <TouchableOpacity
            className="bg-white w-full py-4 rounded-full items-center justify-center"
            onPress={handleGotIt}
          >
            <Text className="text-black text-lg font-bold">Got it!</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default ResonateQuotesModal;
