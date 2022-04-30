const Init = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: "",
    });
  };
};

const MakeLogin = (email, password) => {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: token,
    });
  };
};

const authActions = {
  Init,
  MakeLogin,
};

export default authActions;
