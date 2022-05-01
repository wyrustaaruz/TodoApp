import { Text, View, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
  },
});
