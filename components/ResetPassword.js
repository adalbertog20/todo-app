import React, { useState } from "react";
import { View, Text } from "react-native";
import Logo from "./Logo";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import CustomTextLink from "./CustomTextLink";
import ConfirmPassword from "./ConfirmPassword";

export default function ResetPassword() {
    return (
        <View>
            <Logo />
            <View className="flex items-center justify-center h-screen">
                <Text className="text-3xl">Sign Up</Text>
                <InputField isPassword={true}/>
                <ConfirmPassword />
                <CustomButton text={"Reset"}/>
                <CustomTextLink text={"Log In"} />
            </View>
        </View>
    );
}