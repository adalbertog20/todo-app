import React, { useState } from "react";
import { View, Text } from "react-native";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import CustomTextLink from "../components/CustomTextLink";
import ConfirmPassword from "../components/ConfirmPassword";

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