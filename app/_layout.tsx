import { Stack } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AppProvider } from "@/context/context";
import { MenuProvider } from "react-native-popup-menu";
import "./globals.css";

export default function RootLayout() {
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
            </Stack>
          </KeyboardAvoidingView>
        </AppProvider>
      </MenuProvider>
    </GestureHandlerRootView>
  );
}
