import { BUNDLE_APPS } from "@/constants/constants";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BundleScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#050505]">
      {/* Header Area */}
      <View className="px-8 pt-6 flex-row justify-between items-center mb-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-white/5 items-center justify-center border border-white/10"
        >
          <Feather name="chevron-left" size={24} color="#94A3B8" />
        </TouchableOpacity>
        <View className="w-10 h-1" />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <View className="mb-12">
          <Text className="text-[#E2E8F0] text-4xl font-bold tracking-tighter leading-tight">
            Self-Growth Essentials
          </Text>
          <View className="flex-row items-center mt-2">
            <Text className="text-emerald-500 text-xl font-bold tracking-tight">50% off bundle offer</Text>
            <View className="ml-3 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <Text className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">Limited</Text>
            </View>
          </View>
          <Text className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            The complete mental well-being and growth toolkit in one unified subscription.
          </Text>
          <View className="w-12 h-1 bg-emerald-500 mt-6" />
        </View>

        {/* Exclusive Offer Pod */}
        <View className="bg-[#111111] rounded-[32px] p-8 border border-white/5 relative overflow-hidden mb-12">
          <View className="absolute top-0 right-0 bg-emerald-500 px-4 py-1.5 rounded-bl-2xl">
            <Text className="text-black text-[10px] font-bold uppercase tracking-widest">Just for you</Text>
          </View>
          
          <Text className="text-[#52525b] text-lg line-through font-medium tracking-tight">
            ₦459,800.00
          </Text>
          <Text className="text-white text-3xl font-bold mt-1 tracking-tighter">
            Now ₦229,900.00<Text className="text-lg text-[#52525b]">/year</Text>
          </Text>
          
          <View className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
        </View>

        {/* Bundle Apps Architecture */}
        <View className="mb-12">
          <Text className="text-white text-xl font-bold tracking-tight mb-6">
            Everything included
          </Text>
          <View className="gap-4">
            {BUNDLE_APPS.map((app) => {
              const IconComponent = app.IconLib;
              return (
                <View
                  key={app.name}
                  className="bg-[#111111] rounded-[24px] p-5 border border-white/5 flex-row items-center"
                >
                  <View
                    style={{ backgroundColor: app.bgColor }}
                    className="w-14 h-14 rounded-2xl items-center justify-center mr-4 shadow-sm"
                  >
                    {app.isTextIcon ? (
                      <Text
                        style={{ color: app.textColor }}
                        className="font-bold text-xl"
                      >
                        {app.icon}
                      </Text>
                    ) : IconComponent ? (
                      <IconComponent
                        name={app.icon as any}
                        size={28}
                        color={app.textColor || "white"}
                      />
                    ) : (
                      <Text
                        style={{ color: app.textColor || "white" }}
                        className="text-3xl font-bold"
                      >
                        {app.icon}
                      </Text>
                    )}
                  </View>
                  <View className="flex-1">
                    <Text className="text-white text-base font-bold tracking-tight">
                      {app.name}
                    </Text>
                    <Text className="text-[#94A3B8] text-xs leading-relaxed mt-0.5">
                      {app.description}
                    </Text>
                  </View>
                  {app.status === "Installed" && (
                    <View className="bg-white/5 rounded-full px-3 py-1 border border-white/10">
                      <Text className="text-[#52525b] font-bold text-[10px] uppercase tracking-widest">
                        {app.status}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        {/* Social Proof Section */}
        <View className="items-center px-4 mb-10">
          <View className="flex-row items-center gap-6 opacity-40 mb-6">
            <View className="flex-row items-center">
              <FontAwesome name="apple" size={16} color="#E2E8F0" />
              <Text className="text-[#E2E8F0] text-[10px] font-bold uppercase tracking-widest ml-2">App of the Day</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome name="apple" size={16} color="#E2E8F0" />
              <Text className="text-[#E2E8F0] text-[10px] font-bold uppercase tracking-widest ml-2">Editor's Choice</Text>
            </View>
          </View>
          
          <View className="flex-row items-center gap-3">
            <View className="flex-row gap-1">
              {Array(5).fill(0).map((_, i) => (
                <Ionicons key={i} name="star" size={14} color="#10b981" />
              ))}
            </View>
            <Text className="text-[#52525b] text-sm font-medium">12.3K+ reviews</Text>
          </View>
        </View>

        {/* Legal Footer */}
        <View className="gap-4 items-center">
          <TouchableOpacity><Text className="text-[#3f3f46] text-xs font-medium">Restore purchase</Text></TouchableOpacity>
          <TouchableOpacity><Text className="text-[#3f3f46] text-xs font-medium text-center">Terms & Conditions and Privacy Policy</Text></TouchableOpacity>
        </View>
      </ScrollView>

      {/* Primary Conversion Area */}
      <View className="absolute bottom-0 left-0 right-0 p-8 bg-[#050505]/95 border-t border-white/5">
        <View className="flex-row justify-center items-center mb-4 gap-2">
          <Text className="text-[#52525b] text-xs line-through">₦459,800.00</Text>
          <Text className="text-white text-xs font-bold">Now ₦229,900.00/year</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          className="w-full py-5 rounded-[24px] bg-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/30"
        >
          <Text className="text-black text-lg font-bold tracking-tight">
            Claim my offer
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BundleScreen;
