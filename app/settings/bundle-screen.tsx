import { BUNDLE_APPS } from "@/constants/constants";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BundleScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#262e3d]">
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center px-4 py-2">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Feather name="chevron-left" size={28} color="white" />
            <Text className="text-white text-xl ml-1">Profile</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          <View className="items-center px-6 mt-4 max-w-sm self-center">
            <Text className="text-white text-3xl font-semibold text-center">
              Your Self-Growth Essentials bundle
            </Text>
            <Text className="text-white text-3xl font-semibold text-center mt-1 text-purple-400">
              with 50% off
            </Text>
            <Text className="text-gray-400 text-base text-center mt-4">
              The complete mental well-being and growth toolkit in one app
              bundle
            </Text>
          </View>

          <View className="rounded-2xl mx-14 mt-8 p-6 items-center relative border border-[#3a4151] max-w-md self-center">
            <View className="absolute -top-4 bg-purple-400 rounded-full px-4 py-1">
              <Text className="text-white font-bold">Just for you</Text>
            </View>

            <Text className="text-white text-lg line-through mt-4">
              ₦459,800.00
            </Text>

            <Text className="text-white text-2xl font-semibold mt-1">
              Now ₦229,900.00/year
            </Text>
          </View>

          <View className="mt-8 px-4">
            <Text className="text-white text-xl font-bold mb-4">
              Enjoy all apps in one subscription!
            </Text>
            <View className="gap-3">
              {BUNDLE_APPS.map((app) => {
                const IconComponent = app.IconLib;
                return (
                  <View
                    key={app.name}
                    className="bg-[#374051] rounded-2xl p-4 flex-row items-center"
                  >
                    <View
                      style={{ backgroundColor: app.bgColor }}
                      className="w-12 h-12 rounded-lg items-center justify-center mr-4"
                    >
                      {app.isTextIcon ? (
                        <Text
                          style={{ color: app.textColor }}
                          className="font-bold text-lg"
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
                      <Text className="text-white text-lg font-bold">
                        {app.name}
                      </Text>
                      <Text className="text-gray-400 text-sm">
                        {app.description}
                      </Text>
                    </View>
                    {app.status === "Installed" && (
                      <View className="border border-gray-500 rounded-full px-3 py-1">
                        <Text className="text-gray-400 font-semibold text-xs">
                          {app.status}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>

          <View className="items-center mt-8 px-4">
            <View className="flex-row items-center gap-4">
              <FontAwesome name="apple" size={20} color="#374051" />
              <Text className="text-gray-400 text-xs font-semibold">
                App of the Day
              </Text>
              <FontAwesome name="apple" size={20} color="#374051" />
              <Text className="text-gray-400 text-xs font-semibold">
                Editors' Choice
              </Text>
            </View>
            <View className="flex-row gap-5">
              <View className="flex-row items-center space-x-1 mt-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FontAwesome
                      key={i}
                      name="star"
                      size={16}
                      color="#374051"
                    />
                  ))}
              </View>
              <Text className="text-gray-400 text-sm mt-2">12.3K+ reviews</Text>
            </View>
            <View className="justify-center gap-6 mt-10">
              <TouchableOpacity>
                <Text className="text-gray-400 text-xl text-center">
                  Restore purchase
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-gray-400 text-xl text-center">
                  Terms & Conditions and Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View className="absolute bottom-5 left-0 right-0 p-4 bg-[#262e3d] border-t border-t-gray-700">
          <Text className="text-center text-gray-400 mb-2">
            <Text className="line-through">₦459,800.00</Text> now just{" "}
            <Text className="text-white font-bold">₦229,900.00/year</Text>
          </Text>
          <TouchableOpacity>
            <LinearGradient
              colors={["#C97EFF", "#8A2BE2"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="rounded-full py-4 items-center justify-center"
              style={{
                padding: 16,
                borderRadius: 50,
              }}
            >
              <Text className="text-white text-center text-lg font-bold">
                Claim my offer
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BundleScreen;
