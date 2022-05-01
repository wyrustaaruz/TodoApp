import { combineReducers } from "redux";
import authReducers from "./authReducers";
import commonReducers from "./commonReducers";

const reducers = combineReducers({
  authReducers,
  commonReducers,
});

export default reducers;
