import React from "react";
import { Pressable, View, Text } from 'react-native';

export default function CustomButton({ text, ...props }) {
    return (
        <View
            className="flex items-center justify-center h-screen">
            <Pressable
                className="w-40 border rounded" {...props}>
                <Text
                    className="text-base h-auto text-center p-1 font-bold">{ text }</Text>
            </Pressable>
        </View>
    );
}
