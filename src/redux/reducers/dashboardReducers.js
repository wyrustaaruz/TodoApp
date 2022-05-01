const initialState = {
  taskList: [],
};

const dashboardReducers = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_LIST":
      return {
        ...state,
        taskList: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducers;
