import { View, Text } from "react-native-web";
import React, { useState } from 'react';
import Logo from './Logo';
import CustomTextLink from "./CustomTextLink";
import InputField from "./InputField";
import CustomButton from "./CustomButton";

const miComp = () => {
    const [email, setEmail] = useState('');
    const handleEmail = (newEmail) => {
        setEmail(newEmail);
    }
    const showEmail = () => {
        alert(`email: ${email}`);
    } 
}

export default function ForgotPassword() {
    return (
        <View>
            <Logo />
            <Text className="flex items-center justify-center h-screen p-6">Forgot Password</Text>
            <InputField 
                placeholder="email"
                value={email}
                onChangeText={handleEmail} />
            <CustomButton onPress={showEmail}/>
            <CustomTextLink text={"Login"} />

        </View>
    );
}