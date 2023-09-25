import { View, Text, ScrollView } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import CustomTextLink from "../components/CustomTextLink";

export default function SignUp({ navigation }) {
  return (
    <View>
      <View className="flex items-center justify-center">
        <InputField isEmail={true} />

        <InputField isName={true} />

        <InputField isPassword={true} />

        <CustomButton text="Sign Up" />
        <Text>or</Text>
        <CustomButton
          text={"Log in?"}
          onPress={() => {
            navigation.navigate("login");
          }}
        />
      </View>
    </View>
  );
}
