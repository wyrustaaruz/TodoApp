import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export const CloseIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>X</Text>
    </View>
  );
};
export const AddIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#929290",
  },
  iconText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#fff",
  },
});
