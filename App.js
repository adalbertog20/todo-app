import { TailwindProvider } from "tailwindcss-react-native";
import { View } from "react-native";
import LogIn from "./screens/LogIn";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp";
import ResetPassword from "./screens/ResetPassword";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Todo from "./screens/Todo";

const Stack = createStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="todo"
          screenOptions={{
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "blue" },
          }}
        >
          <Stack.Screen
            name="login"
            component={LogIn}
            options={{
              title: "Log In",
            }}
          />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="forgotpassword" component={ForgotPassword} />
          <Stack.Screen name="resetpassword" component={ResetPassword} />
          <Stack.Screen
            name="todo"
            component={Todo}
            options={{ title: "Todo" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
