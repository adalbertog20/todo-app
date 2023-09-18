import { TailwindProvider } from 'tailwindcss-react-native';
import { View } from "react-native";
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';

export default function App() {
  return (
    <TailwindProvider>
      <View>
      <ResetPassword />
      </View>
    </TailwindProvider>
  );
}