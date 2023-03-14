import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text }) => {

  return (
    <Pressable onPress={onPress} className="bg-orange-400 px-10 py-3 items-center justify-center">
      <Text className="text-xl text-black font-semibold uppercase">{text}</Text>
    </Pressable>
  )
}

export default CustomButton