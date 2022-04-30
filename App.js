import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import LoginScreen from "./src/scenes/auth/Login";
import DashboardScreen from "./src/scenes/home/Dashboard";
import { store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          title: "",
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
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: "#464646" }}>
        <NavigationContainer>
          <HomeStack />
          {/* <AuthStack /> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
