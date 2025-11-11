import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen name="topics-screen" />
      <Stack.Screen name="reminders-screen" />
    </Stack>
  );
}
