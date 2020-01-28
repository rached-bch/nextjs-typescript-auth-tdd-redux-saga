import { handleActions } from "redux-actions";
import * as types from "./types";
import authState from "./state";

const authReducer = (state = authState, action) => {
  console.log("action", action.type);
  switch (action.type) {
    case types.LOGIN_FORM_ERROR:
      return {
        ...state,
        userFormError: true,
        userError: false,
        userSuccess: false
      };
    case types.LOGIN_HIDE_FORM_ERRORS:
      return {
        ...state,
        userFormError: false,
        userError: false,
        userSuccess: false
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        userError: false,
        userFormError: false,
        userSuccess: true,
        user: action.user
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        userFormError: false,
        userSuccess: false,
        userError: true,
        user: {}
      };
    case types.LOGOUT:
      return authState;
    default:
      return state;
  }
};

export default authReducer;
