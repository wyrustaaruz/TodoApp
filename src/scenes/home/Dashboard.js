import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { headerLeft, headerRight } from "../../components/header";

function DashboardScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {headerLeft()}
        {headerRight()}
      </View>
      <View style={styles.container}>
        <Text>dashboard Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});

export default DashboardScreen;
