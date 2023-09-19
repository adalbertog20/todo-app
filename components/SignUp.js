import { View, Text, ScrollView } from "react-native";
import React from "react";
import Logo from "./Logo";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import CustomTextLink from "./CustomTextLink";

export default function SignUp( {navigation}) {
    return (
        <View>
            <Logo />
            <View className="flex items-center justify-center h-screen">
                <Text className="text-3xl">Sign Up</Text>

                <InputField
                    isEmail={true}/>

                <InputField
                    isName={true}/>

                <InputField
                    isPassword={true}/>
                    
                <CustomButton text="Sign Up" />
                <Text>or</Text>
                <CustomButton text={"Log in?"} onPress={() => {
                    navigation.navigate('login')
                }} />
            </View>
        </View>
    );
}