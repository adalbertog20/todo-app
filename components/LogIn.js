import React from 'react';
import { View } from "react-native";
import Logo from "./Logo";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import CustomTextLink from "./CustomTextLink";

export default function LogIn() {
  return (
    <View>
      <Logo />
      <InputField placeholder="Username" />
      <InputField placeholder="Password" secureTextEntry={true} />
      <CustomButton text="Log In" />
      <CustomTextLink text={"Forgot Password?"} />
    </View>
  );
}
