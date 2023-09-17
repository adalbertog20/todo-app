import React from "react";
import { View, TextInput, Image} from "react-native";

export default function InputField({...props}) {
    return (
      <View
        className="flex items-center justify-center h-screen">
        <View
          className="">
          <TextInput
          className="border-b-2 border-blue-400 w-40 h-10 pl-2 m-6 text-lg rounded-md "
          type="text"
          {...props}/>
        <Image
          className="w-6 h-6 absolute left-40 top-8"
          source={require('../assets/user.png')}/>
        </View>
      </View>
    );
}
