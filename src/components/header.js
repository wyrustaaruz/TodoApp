import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const headerLeft = () => {
  return <HeaderLeftText />;
};

const HeaderLeftText = () => {
  return <Text style={styles.text}>Welcome, #firstname#</Text>;
};
export const headerRight = () => {
  return <HeaderRightButton />;
};

const HeaderRightButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => console.log("Logout")}
    >
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
    fontFamily: "Poppins_400Regular",
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "600",
    fontSize: 14,
    height: 45,
    color: "#FCFCFC",
    textAlign: "center",
    padding: 12,
  },
});
