import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";
import LoginScreen from "../scenes/auth/Login";
import DashboardScreen from "../scenes/home/Dashboard";
import LoadingScreen from "../scenes/general/Loading";

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
const LoadingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  const user = useSelector((state) => state.authReducers.user);
  const loading = useSelector((state) => state.commonReducers.loading);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Actions.authActions.Init());
  };

  React.useEffect(() => {
    init();
  }, []);
  if (loading) {
    return (
      <NavigationContainer>
        <LoadingStack />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {user === null ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
}
