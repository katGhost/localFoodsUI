import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

