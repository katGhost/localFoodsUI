import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import megaburger from "../../assets/megaburger.jpg";
import data from "../Menu/data";
import Menu from "../Menu/Menu";

const Dashboard = () => {
  return (
    <SafeAreaView className="py-6 my-3 items-center">
      <FlatList
        data={data}
        renderItem={({ item }) => <Menu data={item} index={item} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </SafeAreaView>
  );
};

export default Dashboard;
