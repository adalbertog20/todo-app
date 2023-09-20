import {
  View,
  TextInput,
  Pressable,
  Text,
  Modal,
  FlatList,
  ScrollView,
  Image,
} from "react-native";

import React, { useState } from "react";

export default function Todo({ navigation }) {
  const [inputTodo, setInputTodo] = useState("");
  const [inputLongTodo, setInputLongTodo] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [todos, seTodos] = useState([
    {
      title: "tarea",
      longTitle: "hacer tarea de ap",
    },
    {
      title: "eslekuersear",
      longTitle: "hay que ser papues",
    },
  ]);

  const saveTodo = () => {
    setModalVisible(!modalVisible);
    todos.push({ title: inputTodo, longTitle: inputLongTodo });
  };

  const goBack = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <ScrollView>
        <View className="flex flex-row m-2 w-full">
          <View className="w-64">
            <TextInput
              onChangeText={(value) => setInputTodo(value)}
              className="appearence-none bg-transparent border-b border-teal-500 py-2"
              placeholder="enter note hore"
            />
          </View>
          <View className="ml-6">
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className="bg-blue-500 hover:bg-blue-400 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <Text className="font-bold text-white">Add note</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <View className="m-2 flex flex-row">
                <View className="w-72">
                  <Text className="font-extrabold">{item.title}</Text>
                  <Text>{item.longTitle}</Text>
                </View>
                <View className="mr-4">
                  <Pressable className="">
                    <Image
                      className="w-8 h-8"
                      source={require("../assets/borrar.png")}
                    />
                  </Pressable>
                </View>
                <View>
                  <Pressable className="">
                    <Image
                      className="w-8 h-8"
                      source={require("../assets/editar.png")}
                    />
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>
        <Modal animationType="slide" visible={modalVisible}>
          <View className="m-10 rounded-xl p-5">
            <Text className="font-extrabold"> {inputTodo} </Text>
            <TextInput
              onChangeText={(text) => setInputLongTodo(text)}
              className="text-black border-blue-500 border-b-4"
              placeholder="insert long description"
              multiline={true}
            />
            <Pressable
              onPress={saveTodo}
              className="bg-blue-500 hover:bg-blue-800 rounded-md p-2 mt-4"
            >
              <Text className="text-white font-bold">Add</Text>
            </Pressable>
            <Pressable
              onPress={goBack}
              className="bg-red-500 rounded-md p-2 mt-4"
            >
              <Text className="text-white">Cancel</Text>
            </Pressable>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
