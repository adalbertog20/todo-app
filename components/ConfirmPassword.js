import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import InputField from "./InputField";


export default function ConfirmPassword() {
    const [inputNewPass, setInputNewPass] = useState('');
    const [inputConfirmNewPass, setInputConfirmNewPass] = useState('');
    const [match, setMatch] = useState(true);
    const handlePasswordChange = (text) => {
        setInputNewPass(text);
        setMatch(text == inputConfirmNewPass);

    };
    const handleConfirmChange = (text) => {
        setInputConfirmNewPass(text);
        setMatch(text == inputNewPass);
    };
    return (
        <View>
            <Text>New Password</Text>
            <InputField 
                value={inputNewPass}
                placeholder="type your password"
                onChangeText={handlePasswordChange} isPassword={true} />
            <Text>Re type you new Password</Text>
            <InputField
                isPassword={true}
                value={inputConfirmNewPass}
                placeholder="type your password"
                onChangeText={handleConfirmChange}
            />
            {!match && <Text className="text-red-600">Passwords do not match</Text>}
        </View>
    );
}