import { handleActions } from "redux-actions";
import * as types from "./types";
import appState from "../../appState";

// const authReducer = handleActions(
//   {
//     [types.LOGIN_SUCCESS]: (state, { payload }) => {
//       return {
//         ...state,
//         userIsLogin: true
//       };
//     },
//     [types.LOGIN_SUCCESS]: (state, { payload }) => {
//       return {
//         ...state,
//         userIsLogin: false,
//         userSuccess: true,
//         userError: false,
//         user: payload
//       };
//     },
//     [types.LOGIN_ERROR]: (state, { payload }) => {
//       return {
//         ...state,
//         userIsLogin: false,
//         userSuccess: false,
//         userError: true,
//         user: {}
//       };
//     },
//     [types.LOGOUT]: (state, { payload }) => {
//       return initialState;
//     }
//   },
//   initialState
// );

// export default authReducer;

const authReducer = (state = appState, action) => {
  //console.log("vvvvvvvvvvv", action);
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        userIsLogin: true
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        userIsLogin: false,
        userSuccess: false,
        userError: true,
        user: {}
      };
    case types.LOGOUT:
      return appState;
    default:
      return state;
  }
};

export default authReducer;
