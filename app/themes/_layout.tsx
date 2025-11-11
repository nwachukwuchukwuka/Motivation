import { Stack } from "expo-router";

export default function ThemesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="themes-screen" />
      <Stack.Screen name="theme-mixes-screen" />
    </Stack>
  );
} 