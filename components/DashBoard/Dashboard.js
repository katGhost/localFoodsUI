import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import megaburger from "../../assets/megaburger.jpg";

const Dashboard = ({ onPress }) => {
  const onButtonPress = () => {
    console.warn("View this item");
  };

  return (
    <View className="py-6 mx-3 ">
      {/* pressable will contain an image and text details */}
      <Pressable
        onPress={onButtonPress}
        className="bg-orange-400 p-3 items-center rounded-3xl"
      >
        <Image
          source={megaburger}
          resizeMode="cover"
          className="rounded-xl w-36 h-36 backdrop:{blur}"
        />
        <Text className="text-lg font-medium mt-1 mb-2 capitalize text-gray-900">regular burger</Text>
         {/* price */}
          <Text className="text-xl text-gray-900 font-bold">R{" "}39.99</Text>
      </Pressable>
    </View>
  );
};

export default Dashboard;
