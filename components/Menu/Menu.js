import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import data from "./data";
import MyCart from "../../screens/Cart/MyCart";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// { data, index }

const Menu = ({ index }) => {

  //use navigation to navigate to the cart page
  // by clicking the actual food Card
  const navigation = useNavigation();

  // we use the useState state and pass an array into it
  // for multiple calls / renders
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {

    // we create a copy of the array items... over the old ones
    const newCartItems = [...cartItems];

    //check if an item is in the array alreaddy or call it to the cart
    const existingItemIndex = newCartItems.findIndex(cartItem => cartItem.id === item.id);

    if(existingItemIndex >= 0) {
      newCartItems[existingItemIndex].quantity += 1;
    } else {
      newCartItems.push({
        ...item,
        quantity: 1
      })
    }

    //update the state variable in the cart item with the nwe one
    setCartItems[newCartItems];
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Cart");
      }}
      className="border-2 border-gray-400 py-4 px-4 rounded-xl items-center mx-2 bg-gray-700"
    >
      <Image source={data.image} className="w-32 h-36 rounded-xl mb-4" />
      {/* Title */}
      <Text className="text-lg font-semibold mb-2 capitalize text-gray-100">
        {data.title}
      </Text>
      {/* Price and the add to cart button */}
      <View className="flex-row space-x-6 items-center">
        <Text className="text-lg text-gray-100 font-bold">R {data.price}</Text>
        {/* if an item is already in cart, do not add that item any longer and
          filter the cart Icon in the button to a 'remove cart' Icon.
         */}
        {cartItems.includes(item) ? (
          <Pressable
            onPress={() => {setCartItems(cartItems.filter((e) => e.id !== item.id))}}
            className="bg-gray-900 px-4 rounded-md"
          >
            <Text className="text-lg text-gray-100 font-bold">
            <MaterialCommunityIcons name="cart-remove" size={20} color="white" />
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => addToCart(setCartItems([...cartItems, item]))}
            className="bg-gray-900 px-4 rounded-md"
          >
            <Text className="text-lg text-gray-100 font-bold">
              <MaterialIcons name="add-shopping-cart" size={20} color="white" />
            </Text>
          </Pressable>
        )}


      </View>
    </Pressable>
  );
};

export default Menu;
