import { View, Text } from "react-native";
import React from "react";
import list from "../CategoriesList/list";

const CategoryItem = ({data, index}) => {

  return (
    <View className="mx-2">
      <View className="border-2 border-#2A2B4B rounded-3xl px-2">
        <Text className="text-xl font-semibold text-center text-#2A2B4B mb-1">{data.name}</Text>
      </View>
    </View>
  );
};

export default CategoryItem;
