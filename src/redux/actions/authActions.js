import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat";
import FirebaseStorage from "../../data/FirebaseStorage";

const Init = () => {
  return async (dispatch) => {
    let user = await AsyncStorage.getItem("user");
    if (user !== null) {
      dispatch({
        type: "LOGIN",
        payload: JSON.parse(user),
      });
    }
  };
};

const MakeLogin = (username, firstName, lastName = "") => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOADING_TRUE",
      });
      const uid = FirebaseStorage.onAuthStateChanged();
      if (uid) {
        const user = {
          uid,
          username,
          firstName,
          lastName,
        };
        AsyncStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: "LOADING_FALSE",
        });
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      } else {
        dispatch({
          type: "LOADING_FALSE",
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
};

const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};

const authActions = {
  Init,
  MakeLogin,
  Logout,
};

export default authActions;
