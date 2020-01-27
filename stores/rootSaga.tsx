import {
  fork,
  takeEvery,
  takeLatest,
  call,
  put,
  all
} from "redux-saga/effects";
import * as types from "./modules/auth/types";
import authSaga from "./modules/auth/sagas";

export default function* rootSaga() {
  //yield sagas.map(saga => fork(saga));
  yield all([...authSaga]);
}
