import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import friesandburger from "../../assets/friesandburger.jpg";
import Dashboard from "../../components/DashBoard/Dashboard";

const HomeScreen = () => {
  const [value, setValue] = useState("");
  return (
    <ScrollView className="bg-white flex-1 relative">
      {/* Top section, search, menu icon  and profile icon */}
      <View className="flex-row justify-between items-center px-6 mt-8 py-4">
        <View>
          <Ionicons name="ios-menu" size={30} color="#2A2B4B" />
        </View>
        <View className="border-2 rounded-3xl border-[#2A2B4B] flex-row justify-between items-center px-4 py-2 w-60">
          <TextInput
            placeholder="search"
            value={value}
            onChangeText={setValue}
            className="text-sm"
          />
          <Ionicons name="search" size={20} color="#2A2B4B" />
        </View>
        <View>
          <FontAwesome name="user-circle" size={30} color="#2A2B4B" />
        </View>
      </View>

      {/* Second section, Ad */}
      <View className="mt-8 px-6">
        <View className="flex-row justify-around items-center bg-gray-900 rounded-2xl py-1">
          <Image
            source={friesandburger}
            resizeMode="center"
            className="w-32 h-32 rounded-full"
          />
          <Text className="text-4xl text-center font-bold text-gray-100 uppercase">
            50% off!
          </Text>
        </View>
      </View>

      {/* Third section, categories in horizontal flatlist */}
      <CategoriesList />

      {/* Main section */}
      <View className="px-3 bg-gray-900 flex-1 rounded-t-2xl mt-4 pb-4">
        <Dashboard />

        <View className="flex-row justify-around bg-gray-700 rounded-xl py-4">
          <AntDesign name="message1" size={24} color="#F1F5F9" />
          <Text className="text-md font-medium capitalize text-gray-100"> send feedback</Text>
          <SimpleLineIcons name="arrow-right" size={24} color="#F1F5F9" />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
