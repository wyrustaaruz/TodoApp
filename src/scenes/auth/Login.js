import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FirebaseStorage from "../../data/FirebaseStorage";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

function LoginScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emptyValue, setEmptyValue] = useState({
    username: false,
    firstName: false,
  });

  const handleLogin = () => {
    if (username && firstName) {
      setLoading(true);
      FirebaseStorage.onAuthStateChanged();
      if (FirebaseStorage.uid) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } else {
      const tempValueChecker = {
        username: false,
        firstName: false,
      };
      if (!username) {
        tempValueChecker.username = true;
      }
      if (!firstName) {
        tempValueChecker.firstName = true;
      }
      setEmptyValue(tempValueChecker);
    }
  };
  const handleUsernameChange = (value) => {
    setEmptyValue({ ...emptyValue, username: false });
    setUsername(value);
  };
  const handleFirstNameChange = (value) => {
    setEmptyValue({ ...emptyValue, firstName: false });
    setFirstName(value);
  };

  const Loading = () => {
    return <Text style={styles.header}>Loading...</Text>;
  };

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text style={styles.header}>Login to your account</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              placeholder="Username"
              style={[
                styles.input,
                emptyValue.username ? styles.wrongInput : null,
              ]}
              onChangeText={handleUsernameChange}
              value={username}
            />
            <Text style={styles.wrongText}>
              {emptyValue.username ? "User name is required" : ""}
            </Text>
            <TextInput
              placeholder="First Name"
              style={[
                styles.input,
                emptyValue.firstName ? styles.wrongInput : null,
              ]}
              onChangeText={handleFirstNameChange}
              value={firstName}
            />
            <Text style={styles.wrongText}>
              {emptyValue.firstName ? "First name is required" : ""}
            </Text>
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              onChangeText={setLastName}
              value={lastName}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handleLogin()}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 51,
  },
  header: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },
  inputsContainer: {
    width: "100%",
    marginVertical: 24,
  },
  input: {
    backgroundColor: "#fcfcfc",
    borderColor: "#f1f1f5",
    borderWidth: 1,
    padding: 10,
  },
  wrongText: {
    color: "#ff4545",
    fontWeight: "400",
    fontSize: 10,
    marginLeft: 16,
    marginBottom: 4,
  },
  wrongInput: {
    borderColor: "#ff4545",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#0062FF",
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
export default LoginScreen;
