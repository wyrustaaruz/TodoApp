const LoadingTrue = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_TRUE",
    });
  };
};
const LoadingFalse = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_FALSE",
    });
  };
};

const commonActions = {
  LoadingTrue,
  LoadingFalse,
};

export default commonActions;
