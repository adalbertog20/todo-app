import React, { useState } from "react";
import { View } from "react-native";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

export default function LogIn({ navigation }) {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleNameInputChange = (text) => {
    setInputName(text);
  };

  const handlePasswordInputChange = (text) => {
    setInputPassword(text);
  };

  const validCredentials = () => {
    if(inputName == 'Adalberto' && inputPassword == '1234') {
      navigation.navigate('todo');
    }
  }
  return (
    <View>
      <Logo />
      <InputField
        value={inputName}
        onChangeText={handleNameInputChange}
        isName={true}
      />
      <InputField
        onChangeText={handlePasswordInputChange}
        value={inputPassword}
        isPassword={true}
      />
      <CustomButton text="Log In" onPress={validCredentials} />
      <CustomButton
        text={"Forgot Password?"}
        onPress={() => {
          navigation.navigate("forgotpassword");
        }}
      />
      <CustomButton
        text={"Create an account?"}
        onPress={() => {
          navigation.navigate("signup");
        }}
      />
    </View>
  );
}
