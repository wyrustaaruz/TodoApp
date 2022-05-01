import { combineReducers } from "redux";
import authReducers from "./authReducers";
import commonReducers from "./commonReducers";
import dashboardReducers from "./dashboardReducers";

const reducers = combineReducers({
  authReducers,
  commonReducers,
  dashboardReducers,
});

export default reducers;
