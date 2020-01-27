import * as types from "./types";
import { createAction } from "redux-actions";

export const logout = createAction(types.LOGOUT);
export const login = createAction(types.LOGIN);
export const loginProceed = createAction(types.LOGIN_PROCESS);
export const loginSucceed = createAction(types.LOGIN_SUCCESS);
