import * as types from "./types";
import { createAction } from "redux-actions";

// export const login = () => dispatch => {
//   console.log("wwwwwwwwww");
//   return dispatch({ type: types.LOGIN });
// };
export const login = createAction(types.LOGIN);

// export const logout = () => dispatch => {
//   console.log("fffffffff");
//   return dispatch({ type: types.LOGOUT });
// };
export const logout = createAction(types.LOGOUT);
export const loginProceed = () => dispatch => {
  return dispatch({ type: types.LOGIN_PROCESS });
};

export const loginSucceed = () => dispatch => {
  return dispatch({ type: types.LOGIN_SUCCESS });
};
