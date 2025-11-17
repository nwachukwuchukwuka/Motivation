import { userItems } from "@/constants/constants";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const UserItemsGrid = () => {
  return (
    // 2. THE JSX for the grid is moved here.
    // <View className="flex-row flex-wrap px-4 mb-6">
    //   {userItems.map((item) => (
    //     <Pressable
    //       key={item.name}
    //       className="w-1/2 p-2"
    //       onPress={item.onPress} // The onPress is now defined in the data
    //     >
    //       <View className="bg-[#3a4151] rounded-2xl p-4 h-24 justify-between">
    //         <Text className="text-white font-semibold">{item.name}</Text>
    //         <View className="items-end">
    //           <Feather name={item.icon as any} size={24} color="#969da8" />
    //           {item.isLocked && (
    //             <Feather
    //               name="lock"
    //               size={12}
    //               color="#969da8"
    //               style={{ position: "absolute", bottom: -2, right: -2 }} // Use style for positioning icons
    //             />
    //           )}
    //         </View>
    //       </View>
    //     </Pressable>
    //   ))}
    // </View>
    <View className="flex-row flex-wrap px-4 mb-6">
      {userItems.map((item, index) => (
        <Pressable key={item.name} className="w-1/2 p-2" onPress={item.onPress}>
          <View className="bg-[#3a4151] rounded-2xl p-4 h-24 justify-between">
            <Text className="text-white font-semibold">{item.name}</Text>
            <View className="items-end">
              <Feather name={item.icon as any} size={24} color="#969da8" />
              {item.isLocked && (
                <Feather
                  name="lock"
                  size={12}
                  color="#969da8"
                  className="absolute -bottom-1 -left-1"
                />
              )}
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default UserItemsGrid;
