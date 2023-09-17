import { Image, View, Text } from "react-native";
import React from 'react';

export default function Logo() {
  return (
    <View className="flex items-center justify-center h-screen">
      <Image
        className="ml-20 w-1/2 h-1/2"
        source={require('../assets/logo.png')} />
        <Text
        className="text-3xl">Todo App</Text>
    </View>

  );
}
