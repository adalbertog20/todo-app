import { TailwindProvider } from 'tailwindcss-react-native';
import { View } from "react-native";
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={LogIn}/>
        <Stack.Screen name="signup" component={SignUp}/>
        <Stack.Screen name="forgotpassword" component={ForgotPassword}/>
        <Stack.Screen name="resetpassword" component={ResetPassword}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}