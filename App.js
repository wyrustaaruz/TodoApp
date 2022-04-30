import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/scenes/auth/Login";
import DashboardScreen from "./src/scenes/home/Dashboard";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          title: "Giriş Yap",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{
          title: "Giriş Yap",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
