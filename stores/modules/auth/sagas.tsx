import { all, takeLatest, put, call } from "redux-saga/effects";
import * as types from "./types";
import * as authActions from "./actions";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* login() {
  console.log("xxxxxxxxx");
  yield call(delay, 1000);

  yield put({ type: types.LOGIN_PROCESS });
  yield put({ type: types.LOGIN_SUCCESS });
}

const authSaga = [takeLatest(types.LOGIN, login)];

export default authSaga;
