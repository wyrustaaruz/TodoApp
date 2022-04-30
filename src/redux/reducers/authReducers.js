const initialState = {
  authToken: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};

export default authReducers;
