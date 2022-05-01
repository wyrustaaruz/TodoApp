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
        dispatch({ type: "TODO_LIST", payload: _.toArray(snapshot.val()) });
      });
  };
};

const dashboardActions = {
  TasksList,
};

export default dashboardActions;
