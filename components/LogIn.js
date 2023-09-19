import React from 'react';
import { View } from "react-native";
import Logo from "./Logo";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import CustomTextLink from "./CustomTextLink";

export default function LogIn({ navigation }) {
  return (
    <View>
      <Logo />
      <InputField isName={true} />
      <InputField isPassword={true} />
      <CustomButton text="Log In" />
      <CustomButton text={"Forgot Password?"}
        onPress={() => {
          navigation.navigate('forgotpassword')
        }} />
      <CustomButton text={"Already have an account?"}
        onPress={() => {
          navigation.navigate('signup')
        }} />
    </View>
  );
}
