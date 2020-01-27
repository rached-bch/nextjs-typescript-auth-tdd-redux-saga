import { combineReducers } from "redux";
import auth from "./modules/auth/reducer";

export default history =>
  combineReducers({
    auth
  });
