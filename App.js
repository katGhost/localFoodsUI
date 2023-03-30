import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'
import MyCart from "./screens/Cart/MyCart";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Cart" component={MyCart} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

