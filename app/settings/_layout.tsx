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
      <Stack.Screen name="streak-screen" />
      <Stack.Screen name="profile-settings" />

      <Stack.Screen name="subscription-screen" />
      <Stack.Screen name="content-preferences-screen" />
      <Stack.Screen name="gender-identity-screen" />
      <Stack.Screen name="muted-content-screen" />
      <Stack.Screen name="add-muted-content-screen" />
      <Stack.Screen name="name-screen" />
      <Stack.Screen name="sound-screen" />
      <Stack.Screen name="voice-screen" />
      <Stack.Screen name="siri-shortcuts-screen" />
      <Stack.Screen name="sign-in-screen" />
      <Stack.Screen name="monkey-taps-screen" />
    </Stack>
  );
}
