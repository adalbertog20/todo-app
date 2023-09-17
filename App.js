import { TailwindProvider } from 'tailwindcss-react-native';
import { View } from "react-native";
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';

export default function App() {
  return (
    <TailwindProvider>
      <View>
      <ForgotPassword />
      </View>
    </TailwindProvider>
  );
}