import { Href, Stack, useRouter, useSegments } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ONBOARDING_ROUTES = [
  "welcome-screen",
  "survey-screen",
  "customize-screen",
  "age-screen",
  "name-screen",
  "gender-screen",
  "relationship-screen",
  "religious-screen",
  "beliefs-screen",
  "zodiac-screen",
  "motivation-source-screen",
  "consistency-struggle-screen",
  "unmotivated-actions-screen",
  "achievement",
  "daily-habit",
  "daily-routine-screen",
  "notification-settings-screen",
  "icon-style-screen",
  "bundle-offer-screen",
  "theme-selection-screen",
  "welcome-message-screen",
  "personalization-intro-screen",
  "inspiring-quotes-screen",
];

export default function OnboardingLayout() {
  const router = useRouter();
  const segments = useSegments();

  const currentRoute = segments[segments.length - 1];

  const noSkipScreens = [
    "survey-screen",
    "achievement",
    "welcome-screen",
    "customize-screen",
    "gender-screen",
    "icon-style-screen",
    "personalization-intro-screen",
    "free-trial-offer-screen",
    "trial-detail-screen",
    "widget-install-screen",
    "notification-settings-screen",
    "daily-routine-screen",
  ];

  const shouldShowSkip = !noSkipScreens.includes(currentRoute);

  const handleSkip = () => {
    const currentIndex = ONBOARDING_ROUTES.indexOf(currentRoute);

    if (currentIndex !== -1 && currentIndex < ONBOARDING_ROUTES.length - 1) {
      const nextScreen = ONBOARDING_ROUTES[currentIndex + 1];

      const nextRoute = `/${nextScreen}` as Href;
      console.log("nextRoute", nextRoute);

      router.push(nextRoute);
    } else {
      console.log("cannot skip");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="survey-screen"
          options={{
            animation: "fade",
            animationDuration: 800,
          }}
        />
        <Stack.Screen
          name="customize-screen"
          options={{
            animation: "fade",
            animationDuration: 800,
          }}
        />
      </Stack>

      {shouldShowSkip && (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 80,
            right: 24,
            zIndex: 10,
          }}
          onPress={handleSkip}
        >
          <Text style={{ color: "#969da8", fontSize: 16 }}>Skip</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
