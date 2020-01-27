import { fork } from "redux-saga/effects";

import authSaga from "./modules/auth/sagas";

const sagas = [authSaga];

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}
