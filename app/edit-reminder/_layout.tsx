import { Stack } from "expo-router";

export default function EditReminderLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sound" />
    </Stack>
  );
}
