import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen name="reminders-screen" />
      <Stack.Screen name="topics-screen" />
      <Stack.Screen name="app-icon" />
      <Stack.Screen name="watch-screen" />
      <Stack.Screen name="bundle-screen" />
      <Stack.Screen name="widgets-screen" />

    </Stack>
  );
}
