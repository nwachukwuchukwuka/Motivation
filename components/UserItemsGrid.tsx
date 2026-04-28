import { userItems } from "@/constants/constants";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const UserItemsGrid = () => {
  return (
    <View className="px-3 mb-6">
      {userItems.map((item, index) => (
        <Pressable key={item.name} className="w-full p-2" onPress={item.onPress}>
          <View className="bg-[#111111] border border-[#222222] rounded-[24px] p-4 h-20 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-11 h-11 bg-emerald-500/10 rounded-xl items-center justify-center border border-emerald-500/20">
                <Feather name={item.icon as any} size={20} color="#10b981" />
              </View>
              <Text className="text-zinc-200 font-bold text-base ml-4">{item.name}</Text>
            </View>
            <View className="flex-row items-center">
              {item.isLocked && (
                <View className="mr-3">
                   <Feather name="lock" size={14} color="#52525b" />
                </View>
              )}
              <Feather name="chevron-right" size={18} color="#3f3f46" />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default UserItemsGrid;
