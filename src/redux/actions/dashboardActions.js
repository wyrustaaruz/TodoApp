import firebase from "firebase/compat";
import _ from "lodash";

const TasksList = () => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRUE",
    });
    firebase
      .database()
      .ref(`messages`)
      .limitToLast(50)
      .on("value", (snapshot) => {
        dispatch({
          type: "LOADING_FALSE",
        });
        const obj = snapshot.val();
        const array = Object.keys(obj).map((key) => ({ id: key, ...obj[key] }));
        dispatch({ type: "TODO_LIST", payload: array });
      });
  };
};

const TaskEdit = (taskId, text) => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRUE",
    });
    firebase
      .database()
      .ref(`messages`)
      .child(`${taskId}`)
      .set({ text })
      .then(() => {
        dispatch({
          type: "LOADING_FALSE",
        });
      });
  };
};

const TaskDelete = (taskId) => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRUE",
    });
    firebase
      .database()
      .ref(`messages/${taskId}`)
      .remove()
      .then((item) => {
        dispatch({
          type: "LOADING_FALSE",
        });
      });
  };
};

const dashboardActions = {
  TasksList,
  TaskEdit,
  TaskDelete,
};

export default dashboardActions;
