import { Stack } from "expo-router";

export default function ExploreTopicsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="explore-topics-screen" />
      <Stack.Screen name="topics-follow-screen" />
      <Stack.Screen name="topic-details-screen" />
      <Stack.Screen name="show-all-in-feed" />

      <Stack.Screen
        name="collections-screen"
        options={({ route }) => {
          const params = route.params as { presentation?: string };
          if (params.presentation === "modal") {
            return {
              presentation: "modal",
            };
          }
          return {
            presentation: "card",
          };
        }}
      />

      <Stack.Screen name="add-quote" />
    </Stack>
  );
}
