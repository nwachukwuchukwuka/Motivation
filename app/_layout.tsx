import { SplashScreen, Stack } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AppProvider } from "@/context/context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { MenuProvider } from "react-native-popup-menu";
import "./globals.css";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    "momo-signature": require("../assets/fonts/MomoSignature-Regular.ttf"),
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
    "Caveat-VariableFont_wght": require("../assets/fonts/Caveat-VariableFont_wght.ttf"),
    "DancingScript-VariableFont_wght ": require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    "IBMPlexMono-Bold": require("../assets/fonts/IBMPlexMono-Bold.ttf"),
    "IndieFlower-Regular": require("../assets/fonts/IndieFlower-Regular.ttf"),
    "LibreBaskerville-Bold": require("../assets/fonts/LibreBaskerville-Bold.ttf"),
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
    "MomoSignature-Regular": require("../assets/fonts/MomoSignature-Regular.ttf"),
    "ShadowsIntoLight-Regular": require("../assets/fonts/ShadowsIntoLight-Regular.ttf"),
    "Sixtyfour-Regular-VariableFont_BLED,SCAN": require("../assets/fonts/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf"),
    "SourceCodePro-Italic-VariableFont_wght": require("../assets/fonts/SourceCodePro-Italic-VariableFont_wght.ttf"),
    "SourceCodePro-VariableFont_wght": require("../assets/fonts/SourceCodePro-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MenuProvider>
        <AppProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              {/* <Stack.Screen name="(tabs)" /> */}
              <Stack.Screen
                name="free-trial-details-screen"
                options={{
                  presentation: "modal",
                }}
              />

              <Stack.Screen
                name="explore-topics"
                options={{
                  presentation: "modal",
                }}
              />

              <Stack.Screen
                name="themes"
                options={{
                  presentation: "modal",
                }}
              />
              <Stack.Screen
                name="settings"
                options={{
                  presentation: "modal",
                }}
              />
              <Stack.Screen
                name="share-quote-modal"
                options={{
                  presentation: "modal",
                }}
              />
              <Stack.Screen
                name="editor"
                options={{
                  presentation: "fullScreenModal",
                  animation: "fade_from_bottom",
                }}
              />

              <Stack.Screen
                name="edit-reminder"
                options={{
                  presentation: "modal",
                }}
              />
            </Stack>
          </KeyboardAvoidingView>
        </AppProvider>
      </MenuProvider>
    </GestureHandlerRootView>
  );
}
