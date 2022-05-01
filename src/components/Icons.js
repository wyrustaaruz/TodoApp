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
    <View style={[styles.iconContainer, styles.activeColor]}>
      <Text style={styles.iconText}>X</Text>
    </View>
  );
};
export const AddIcon = ({ active = true }) => {
  return (
    <View
      style={[
        styles.iconContainer,
        active ? styles.activeColor : styles.deactiveColor,
      ]}
    >
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
  },
  activeColor: {
    backgroundColor: "#929290",
  },
  deactiveColor: {
    backgroundColor: "#eeeeee",
  },
  iconText: {
    fontFamily: "poppins-semibold",
    color: "#fff",
  },
});
