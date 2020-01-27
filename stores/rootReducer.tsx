import { combineReducers } from "redux";
import auth from "./modules/auth/reducer";

const rootReducer = combineReducers({
  auth
});
export default rootReducer;
