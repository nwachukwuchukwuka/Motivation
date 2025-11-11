import { Stack } from "expo-router";

export default function ExploreTopicsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="explore-topics-screen" />
      <Stack.Screen name="user-item-screen" />
      <Stack.Screen name="topics-follow-screen" />
      <Stack.Screen name="topic-details-screen" />

    </Stack>
  );
}
