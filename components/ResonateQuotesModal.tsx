import { Feather } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type ResonateQuotesModalRef = BottomSheetModal;

const ResonateQuotesModal = forwardRef<ResonateQuotesModalRef>((props, ref) => {
  const snapPoints = useMemo(() => ["65%"], []);

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
      backgroundStyle={{ backgroundColor: "#050505" }}
      handleIndicatorStyle={{ backgroundColor: "#27272a", width: 32 }}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.8}
        />
      )}
    >
      <BottomSheetView
        style={{ flex: 1, paddingHorizontal: 28, paddingTop: 20, paddingBottom: 40 }}
      >
        <View className="flex-row justify-between items-start mb-8">
          <View className="flex-1 pr-4">
            <Text className="text-white text-5xl font-semibold tracking-tighter leading-[1.1]">
              Resonate
            </Text>
            <Text className="text-emerald-500 text-lg font-semibold tracking-tight mt-1">
              Your Daily Feed
            </Text>
          </View>
          <View
            className="w-20 h-20 bg-white/5 rounded-[28px] items-center justify-center border border-white/10"
            style={styles.obsidianShadow}
          >
            <Feather name="heart" size={32} color="#10b981" />
          </View>
        </View>

        <Text className="text-zinc-500 text-lg leading-relaxed font-medium mb-10">
          Personalize your feed by adding at least 5 quotes to favorites. We'll learn from your taste to curate the perfect motivation.
        </Text>

        <View
          className="bg-[#111111] rounded-[32px] p-6 border border-white/5 mb-10"
          style={styles.progressShadow}
        >
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white font-bold tracking-tight">Curation Milestone</Text>
            <Text className="text-emerald-500 font-bold">0/5</Text>
          </View>
          <View className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <View className="w-[10%] h-full bg-emerald-500 rounded-full" />
          </View>
          <View className="flex-row items-center mt-4">
            <Feather name="activity" size={14} color="#71717a" />
            <Text className="text-zinc-600 text-xs font-bold ml-2">Waiting for your first heart</Text>
          </View>
        </View>

        <TouchableOpacity
          className="bg-zinc-900 border border-emerald-500/30 w-full py-4 rounded-2xl items-center justify-center"
          onPress={handleGotIt}
          style={styles.buttonShadow}
        >
          <Text className="text-white text-base font-bold tracking-tight">Got it, thanks!</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  obsidianShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  progressShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 20,
  },
  buttonShadow: {
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  }
});

export default ResonateQuotesModal;
