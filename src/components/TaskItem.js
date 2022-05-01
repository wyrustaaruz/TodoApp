import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { CloseIcon } from "./Icons";
export const TaskItem = ({ item }) => {
  const { title, id } = item;
  const [editable, setEditable] = useState(false);
  const [task, setTask] = useState(title);
  const handleItemChange = () => {
    setEditable(false);
  };
  return (
    <View key={id} style={styles.editableAreaContainer}>
      <TouchableWithoutFeedback onPress={() => setEditable(true)}>
        {editable ? (
          <TextInput
            placeholder={title}
            style={styles.input}
            onChangeText={setTask}
            value={task}
            onSubmitEditing={handleItemChange}
          />
        ) : (
          <Text>{title}</Text>
        )}
      </TouchableWithoutFeedback>
      <CloseIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fcfcfc",
    borderColor: "#f1f1f5",
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
  editableAreaContainer: {
    backgroundColor: "#f1f1f5",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
