import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const NameScreen = () => {
  const [name, setName] = useState("");

  const router = useRouter();

  return (
    <View className="flex-1 justify-between px-5 pt-24 bg-[#262e3d]">
      <View>
        <Text className="text-white text-3xl font-semibold text-center  mb-6">
          What do you want to be called?
        </Text>
        <TextInput
          className="bg-[#3a4151] text-white rounded-full px-5 h-[50px] w-full "
          placeholder="Your name"
          placeholderTextColor="#969da8"
          value={name}
          onChangeText={setName}
          selectionColor="white"
        />
      </View>

      <TouchableOpacity
        className="bg-white w-full py-4 rounded-full items-center justify-center "
        onPress={() => router.push("/gender-screen")}
      >
        <Text className="text-black text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameScreen;
