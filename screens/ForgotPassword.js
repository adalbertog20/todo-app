import { View, Text } from "react-native";
import React, { useState } from "react";
import Logo from "../components/Logo";
import CustomTextLink from "../components/CustomTextLink";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

export default function ForgotPassword({ navigation }) {
  return (
    <View className="p-10">
      <Logo />
      <InputField isEmail={true} />
      <CustomButton text={"enviar"} />
      <CustomButton
        text={"Log In"}
        onPress={() => {
          navigation.navigate("login");
        }}
      />
    </View>
  );
}
