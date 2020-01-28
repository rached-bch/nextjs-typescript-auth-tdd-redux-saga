import * as types from "./types";
import { createAction } from "redux-actions";

//export const login = createAction(types.LOGIN);
export const login = () => {
  return { type: types.LOGIN };
};
export const loginFormError = () => {
  return { type: types.LOGIN_FORM_ERROR };
};
export const logout = () => {
  return { type: types.LOGOUT };
};
export const loginProceed = () => {
  return { type: types.LOGIN_PROCESS };
};
export const loginHideFormErrors = () => {
  return { type: types.LOGIN_HIDE_FORM_ERRORS };
};
export const loginSucceed = user => {
  return { type: types.LOGIN_SUCCESS, user };
};
