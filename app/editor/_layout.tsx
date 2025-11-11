import { Stack } from "expo-router";

export default function EditorLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen
        name="unsplash"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
