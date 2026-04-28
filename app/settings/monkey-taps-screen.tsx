import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MORE_MOTIVATION = [
  {
    name: "Apple TV",
    Icon: () => <FontAwesome name="apple" size={24} color="white" />,
  },
  {
    name: "Alexa",
    Icon: () => <FontAwesome name="amazon" size={24} color="white" />,
  },
  {
    name: "Slack",
    Icon: () => <FontAwesome name="slack" size={24} color="white" />,
  },
];

const YOU_MAY_LIKE = [
  {
    name: "I am - Positive affirmations",
    icon: "I am",
    bgColor: "#F2D7E7",
    isTextIcon: true,
    textColor: "black",
  },
  {
    name: "Facts - Learn every day",
    icon: "key-outline",
    IconLib: Ionicons,
    bgColor: "#D6B8FF",
  },
  {
    name: "Vocabulary - Learn new wo...",
    icon: "text",
    IconLib: Feather,
    bgColor: "#FFFFFF",
    textColor: "black",
  },
  {
    name: "Moodlight - mood tracker",
    icon: "moon-outline",
    IconLib: Ionicons,
    bgColor: "#424874",
  },
  {
    name: "Loving Kindness",
    icon: "lotus-outline",
    IconLib: Ionicons,
    bgColor: "#F2D7E7",
  },
  {
    name: "Bible Widgets",
    icon: "book-outline",
    IconLib: Ionicons,
    bgColor: "#ADD8E6",
    textColor: "black",
  },
];

const MonkeyTapsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      {/* Premium Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-[#111111] rounded-full items-center justify-center border border-white/5"
          style={styles.cardShadow}
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center mr-10">
          <Text className="text-white text-xl font-bold tracking-tight">
            Ecosystem
          </Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 mt-8">
          <Text className="text-white text-4xl font-bold tracking-tighter leading-tight">
            Beyond the app
          </Text>
          <Text className="text-zinc-500 text-base mt-4 font-medium leading-relaxed">
            Expand your motivational journey across all your favorite platforms and discover new tools for growth.
          </Text>
        </View>

        <View className="px-6 mt-12">
          <View className="flex-row items-center mb-6">
            <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
            <Text className="text-zinc-500 text-[10px] font-bold tracking-tight">More motivation</Text>
          </View>

          <View
            className="bg-[#111111] rounded-[32px] border border-white/5 overflow-hidden"
            style={styles.cardShadow}
          >
            {MORE_MOTIVATION.map((item, index) => (
              <TouchableOpacity
                key={item.name}
                className={`flex-row items-center p-5 ${index !== MORE_MOTIVATION.length - 1 ? "border-b border-white/[0.03]" : ""
                  }`}
              >
                <View className="w-10 h-10 bg-white/5 rounded-xl items-center justify-center mr-4 border border-white/5">
                  <item.Icon />
                </View>
                <Text className="text-white text-lg font-bold tracking-tight flex-1">{item.name}</Text>
                <Feather name="external-link" size={16} color="#3f3f46" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="px-6 mt-12">
          <View className="flex-row items-center mb-6">
            <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
            <Text className="text-zinc-500 text-[10px] font-bold tracking-tight">You may also like</Text>
          </View>

          <View
            className="bg-[#111111] rounded-[32px] border border-white/5 overflow-hidden"
            style={styles.cardShadow}
          >
            {YOU_MAY_LIKE.map((app, index) => {
              const IconComponent = app.IconLib;
              return (
                <TouchableOpacity
                  key={app.name}
                  className={`flex-row items-center p-5 ${index !== YOU_MAY_LIKE.length - 1 ? "border-b border-white/[0.03]" : ""
                    }`}
                >
                  <View
                    style={{ backgroundColor: app.bgColor }}
                    className="w-12 h-12 rounded-2xl items-center justify-center mr-4 shadow-sm"
                  >
                    {app.isTextIcon ? (
                      <Text
                        style={{ color: app.textColor }}
                        className="font-bold text-sm"
                      >
                        {app.icon}
                      </Text>
                    ) : IconComponent ? (
                      <IconComponent
                        name={app.icon as any}
                        size={24}
                        color={app.textColor || "white"}
                      />
                    ) : null}
                  </View>
                  <View className="flex-1">
                    <Text className="text-white text-lg font-bold tracking-tight">{app.name}</Text>
                    <Text className="text-zinc-500 text-xs font-medium mt-0.5">App Store</Text>
                  </View>
                  <Feather name="chevron-right" size={18} color="#3f3f46" />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  }
});

export default MonkeyTapsScreen;
