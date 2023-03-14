import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");

  // use layoutEffect to close and hide headers
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onLoginPress = () => {
    console.warn("login Pressed");
  };
  const onSignUpPress = () => {
    console.warn("sign up pressed");
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Ionicons name="fast-food" size={28} color="#FB923C" />
        </View>
        <Text className="text-[#2A2B4B] font-semibold text-3xl">
          localfastfood
        </Text>
      </View>

      {/* Welcome message, Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-6xl font-semibold text-black">Welcome Back!</Text>
        <Text className="text-2xl font-light text-[#2A2B4B] mb-8">
          We've missed you, now you can enjoy browsing all the best food places
          around you.
        </Text>
      </View>

      {/* Authentication section, inputs */}
      <View>
        {/* email */}
        <CustomInput
          placeholder={"email"}
          value={value}
          onChangeText={setValue}
        />
        {/* password */}
        <CustomInput
          placeholder={"password"}
          value={value}
          onChangeText={setValue}
          secureTextEntry={true}
        />

        {/* button Section,  login button to navigate to homepage*/}
        <View className="px-6 mt-6">
          <CustomButton onPress={onLoginPress} text={"Login"} />
        </View>

        {/* sign up button */}
        <View className="px-6 mt-6 items-center justify-center space-x-4">
         <Pressable onPress={onSignUpPress} className="items-center text-center"><Text className="text-lg font-light text-[#2A2B4B]">Don't have an account? Sign up</Text></Pressable>
         <Pressable onPress={onSignUpPress} className="items-center text-center mt-2"><Text className="text-lg font-light text-[#2A2B4B]">Forgot password?</Text></Pressable>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
