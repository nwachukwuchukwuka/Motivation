import { userItems } from "@/constants/constants";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const UserItemsGrid = () => {
  return (
    <View className="flex-row flex-wrap px-4 mb-6">
      {userItems.map((item, index) => (
        <Pressable key={item.name} className="w-1/2 p-2" onPress={item.onPress}>
          <View className="bg-[#3a4151] rounded-2xl p-4 h-24 justify-between">
            <View className="flex-row justify-between">
              <Text className="text-white font-semibold">{item.name}</Text>
              <Feather name={item.icon as any} size={24} color="#969da8" />
            </View>
            <View className="flex-row justify-end">
              {item.isLocked && (
                <Feather name="lock" size={18} color="#969da8" />
              )}
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default UserItemsGrid;
