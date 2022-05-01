import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { headerLeft, headerRight } from "../../components/header";
import { TaskItem } from "../../components/TaskItem";
import { AddIcon } from "../../components/Icons";

function DashboardScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const [task, setTask] = useState("");
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a task"
            onChangeText={setTask}
            value={task}
            underlineColorAndroid="transparent"
          />
          <AddIcon />
        </View>
        <View>
          <Text style={styles.title}>Tasks</Text>
        </View>
        <View style={styles.tasksContainer}>
          {true ? (
            <ScrollView style={{ marginBottom: 90 }}>
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
              <TaskItem item={{ title: "I need a bottle of water!", id: 1 }} />
            </ScrollView>
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
    fontFamily: "Poppins_600SemiBold",
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
    fontFamily: "Poppins_400Regular",
  },
});

export default DashboardScreen;
