import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Background from "./src/Background";
import Btn from "./src/Btn";
import Signup from "./src/Signup";
import Login from "./src/Login";
import Mainscreen from "./src/Mainscreen";
import Mapscreen from "./src/Mapscreen";
import Map from "./src/Map";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Mainscreen" component={Mainscreen} />
        <Stack.Screen name="Mapscreen" component={Mapscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
