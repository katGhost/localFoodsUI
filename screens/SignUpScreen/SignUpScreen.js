import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return (
    <SafeAreaView className="bg-white px-6 flex-1 relative">
      <CustomInput
        placeholder={"email"}
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder={"email"}
        value={emailRepeat}
        onChangeText={setEmailRepeat}
      />
      <CustomInput
        placeholder={"email"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder={"email"}
        value={passwordRepeat}
        onChangeText={setPasswordRepeat}
        secureTextEntry={true}
      />

      <View className="px-6 mt-10">
        <CustomButton text={"Sign Up"} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
