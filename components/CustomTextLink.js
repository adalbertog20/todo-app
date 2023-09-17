import React from "react";
import { View, Text } from 'react-native';

export default function CustomTextLink({ text }) {
  return (
    <View
      className="flex items-center justify-center h-screen p-6">
      <Text
        className="text-sky-600 font-bold underline">{text}</Text>
    </View>
  );
}
