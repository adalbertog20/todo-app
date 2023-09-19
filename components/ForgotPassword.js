import { View, Text } from "react-native";
import React, { useState } from 'react';
import Logo from './Logo';
import CustomTextLink from "./CustomTextLink";
import InputField from "./InputField";
import CustomButton from "./CustomButton";

export default function ForgotPassword( { navigation } ) {
    return (
        <View 
        className="p-10">
            <Logo />
            <View className="flex items-center justify-center h-screen">
                <Text className="text-3xl">Forgot Password</Text>
            </View>
            <InputField isEmail={true}/>
            <CustomButton text={"enviar"} />
            <CustomButton text={"Log In"} onPress={() => {
                navigation.navigate('login')
            }} />
        </View>
    );
}