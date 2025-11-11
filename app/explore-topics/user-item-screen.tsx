import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CollectionsEmpty from "../../components/CollectionsEmpty";
import FavoritesEmpty from "../../components/FavoritesEmpty";

const UserItemScreen = () => {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category: string }>();



  const renderContent = () => {
    switch (category) {
      case "Favorites":
        return <FavoritesEmpty />;
      case "My collections":
        return <CollectionsEmpty />;
      case "My own quotes":
        return null;

      default:
        return <Text className="text-white">Content not found</Text>;
    }
  };

  const getTitle = () => {
    if (category === "My own quotes") return "Your own quotes";
    return category;
  };

  return (
    <SafeAreaView className="flex-1 bg-[#262e3d]">
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={28} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-2xl font-bold">{getTitle()}</Text>

        {category === "My collections" && (
          <TouchableOpacity>
            <Text className="text-white text-base">Add new</Text>
          </TouchableOpacity>
        )}
        {category === "My own quotes" && (
          <TouchableOpacity>
            <Text className="text-white text-base">Add</Text>
          </TouchableOpacity>
        )}
        {(category === "Favorites" || !category) && <View className="w-12" />}
      </View>

      {renderContent()}
    </SafeAreaView>
  );
};

export default UserItemScreen;
