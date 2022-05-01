import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import Actions from "../redux/actions";
import { CloseIcon } from "./Icons";
export const TaskItem = ({ item }) => {
  const dispatch = useDispatch();
  const { title, id } = item;
  const [editable, setEditable] = useState(false);
  const [task, setTask] = useState(title);
  const handleItemChange = () => {
    dispatch(Actions.dashboardActions.TaskEdit(id, task));
    setEditable(false);
  };

  const handleDeleteTask = () => {
    dispatch(Actions.dashboardActions.TaskDelete(id));
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
      <TouchableOpacity
        onPress={() => {
          handleDeleteTask(id);
        }}
      >
        <CloseIcon />
      </TouchableOpacity>
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
