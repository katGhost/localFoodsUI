import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import data from "./data";

const Menu = ({ data, index }) => {
  const onButtonPress = () => {
    console.warn("View this item");
  };

  return (
    <Pressable
      onPress={onButtonPress}
      className="border-2 border-gray-400 py-4 px-4 rounded-xl items-center mx-2 bg-gray-700"
    >
      <Image source={data.image} className="w-32 h-36 rounded-xl mb-4" />
      {/* Title */}
      <Text className="text-lg font-semibold mb-2 capitalize text-gray-100">
        {data.title}
      </Text>
      {/* Price */}
      <Text className="text-lg text-gray-100 font-bold">R {data.price}</Text>
    </Pressable>
  );
};

export default Menu;
