import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import FirebaseStorage from "../../data/FirebaseStorage";
import Actions from "../../redux/actions";
import { headerLeft, headerRight } from "../../components/header";
import { TaskItem } from "../../components/TaskItem";
import { AddIcon } from "../../components/Icons";

function DashboardScreen() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const tasks = useSelector((state) => state.dashboardReducers.taskList);

  useEffect(() => {
    dispatch(Actions.dashboardActions.TasksList());
  }, []);

  const user = useSelector((state) => state.authReducers.user);
  const handleLogout = () => {
    dispatch(Actions.authActions.Logout());
  };
  const handleAddTask = () => {
    const task = {
      user,
      text: message,
    };
    FirebaseStorage.send([task]);
    setMessage("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {headerLeft(user.firstName)}
        {headerRight(handleLogout)}
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a task"
            onChangeText={setMessage}
            value={message}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <AddIcon />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Tasks</Text>
        </View>
        <View style={styles.tasksContainer}>
          {!_.isEmpty(tasks) ? (
            <FlatList
              data={tasks}
              renderItem={({ item }) => {
                return <TaskItem item={{ title: item.text, id: item._id }} />;
              }}
            />
          ) : (
            <>
              <Text style={styles.noTasks}>:(</Text>
              <Text style={styles.noTasks}>There is no task yet!</Text>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
    color: "#171725",
    textAlign: "center",
  },
  tasksContainer: {
    marginTop: 32,
  },
  noTasks: {
    fontSize: 14,
    textAlign: "center",
    color: "#7000ff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
    borderColor: "#f1f1f5",
    borderWidth: 1,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginBottom: 32,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fcfcfc",
    color: "#424242",
    fontFamily: "poppins-regular",
  },
});

export default DashboardScreen;
