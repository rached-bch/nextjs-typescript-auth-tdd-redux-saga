import { handleActions } from "redux-actions";
import * as types from "./types";

const initialState = {
  userError: false,
  userSuccess: false,
  userIsLogin: false,
  user: {}
};

const authReducer = handleActions(
  {
    [types.LOGIN_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        userIsLogin: true
      };
    },
    [types.LOGIN_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        userIsLogin: false,
        userSuccess: true,
        userError: false,
        user: payload
      };
    },
    [types.LOGIN_ERROR]: (state, { payload }) => {
      return {
        ...state,
        userIsLogin: false,
        userSuccess: false,
        userError: true,
        user: {}
      };
    },
    [types.LOGOUT]: (state, { payload }) => {
      return initialState;
    }
  },
  initialState
);

export default authReducer;
