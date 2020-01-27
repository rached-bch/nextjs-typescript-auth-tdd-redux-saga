import { all, takeLatest, put } from "redux-saga/effects";
import * as types from "./types";
import * as authActions from "./actions";

export function* login({ payload: { username, password } }) {
  // call(yourcall)
  yield put(authActions.loginProceed());
  yield put(authActions.loginSucceed({ username }));
}

export default function* rootSaga() {
  yield all([takeLatest(types.LOGIN, login)]);
}
