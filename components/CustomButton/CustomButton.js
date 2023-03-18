import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text }) => {

  return (
    <Pressable onPress={onPress} className="bg-gray-900 px-10 py-3 items-center justify-center">
      <Text className="text-xl text-[#94A3B8] font-semibold uppercase">{text}</Text>
    </Pressable>
  )
}

export default CustomButton