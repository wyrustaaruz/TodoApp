import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const headerLeft = (userFirstName) => {
  return <Text style={styles.text}>Welcome, {userFirstName}</Text>;
};

export const headerRight = (callback) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => callback()}>
      <Text style={styles.buttonText}>LOGOUT</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#0062FF",
  },
  text: {
    fontSize: 14,
    color: "#171725",
    fontFamily: "poppins-regular",
  },
  buttonText: {
    fontFamily: "poppins-semibold",
    fontWeight: "600",
    fontSize: 14,
    height: 45,
    color: "#FCFCFC",
    textAlign: "center",
    padding: 12,
  },
});
