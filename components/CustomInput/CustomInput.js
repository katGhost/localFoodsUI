import { View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
   <View className="px-6 mt-6">
   <TextInput
     placeholder={placeholder}
     value={value}
     onChangeText={setValue}
     secureTextEntry={secureTextEntry}
     className="px-6 border-b-2 border-[#2A2B4B] py-4 items-center text-start"
   />
 </View>
  )
}

export default CustomInput