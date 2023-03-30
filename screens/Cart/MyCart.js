import React from "react";
import { View, Text } from "react-native";
import Menu from "../../components/Menu/Menu";

const MyCart = ({ cartItems }) => {
  //   const total = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

  return (
    <View>
      <Text>Item quantity</Text>
      <Text>Total</Text>
    </View>
  );
};

{
  /* {cartItems.map(cartItem => (
        <Text key={cartItem.id}>{cartItem.name} x {cartItem.quantity}</Text>
      ))} */
}

/*
<View>
      {cartItems.array.forEach(cartItem => {
         <Text key={cartItem.id}>{cartItem.name} x {cartItem.quantity}</Text>
      })}
      <Text>Total: {total}</Text>
    </View> 
 */

export default MyCart;
