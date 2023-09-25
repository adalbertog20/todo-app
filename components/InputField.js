import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

export default function InputField({ isPassword, isName, isEmail, ...props }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailInputChange = (text) => {
    setInputEmail(text);
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailValido = regex.test(text);
    setIsEmailValid(!emailValido);
    setIsEmailEmpty(text.trim() == "");
  };

  const handleNameInputChange = (text) => {
    setInputName(text);
    const regex = /\d/;
    const containsNumbers = regex.test(text);
    setIsNameValid(!containsNumbers);

    setIsNameEmpty(text.trim() == "");
  };

  const handlePasswordInputChange = (text) => {
    const rgex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    setInputPassword(text);
    const validate = rgex.test(text);
    setIsPasswordValid(!validate);
  };

  return (
    <View className="flex items-center justify-center h-screen">
      <View>
        {isEmail && (
          <View>
            <TextInput
              value={inputEmail}
              onChangeText={handleEmailInputChange}
              className="border-b-2 border-blue-400 w-44 h-10 pl-2 m-6 text-lg rounded-md "
              type="text"
              placeholder="type your email"
              {...props}
            />
            {isEmailEmpty ? (
              <Text className="text-red-600">Field empty</Text>
            ) : (
              <Text></Text>
            )}
            {isEmailValid && (
              <Text className="text-red-600">Please enter a valid email</Text>
            )}
            <Image
              className="w-6 h-6 absolute left-40 top-8"
              source={require("../assets/email.png")}
            />
          </View>
        )}
        {isName && (
          <View>
            <TextInput
              value={inputName}
              onChangeText={handleNameInputChange}
              className="border-b-2 border-blue-400 w-44 h-10 pl-2 m-6 text-lg rounded-md "
              type="text"
              placeholder="type your name"
              {...props}
            />
            <Image
              className="w-6 h-6 absolute left-40 top-8"
              source={require("../assets/user.png")}
            />
            {isNameEmpty ? (
              <Text className="text-red-600">Field empty</Text>
            ) : (
              <Text></Text>
            )}
            {!isNameValid && (
              <Text className="text-red-600">
                Field should not contain numbers
              </Text>
            )}
          </View>
        )}
        {isPassword && (
          <View>
            <TextInput
              value={inputPassword}
              secureTextEntry={true}
              onChangeText={handlePasswordInputChange}
              className="border-b-2 border-blue-400 w-44 h-10 pl-2 m-6 text-lg rounded-md "
              type="text"
              placeholder="type your password"
              {...props}
            />
            <Image
              className="w-6 h-6 absolute left-40 top-8"
              source={require("../assets/pass.png")}
            />
            {isPasswordValid && (
              <Text className="text-red-600">
                password must contain 1 digit, be at least 8 characters long, 1 uppercase and lowercase letter
              </Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
