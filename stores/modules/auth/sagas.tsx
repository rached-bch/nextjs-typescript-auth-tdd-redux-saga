import { all, takeLatest, put, call } from "redux-saga/effects";
import * as types from "./types";
import * as authActions from "./actions";
import { gql } from "apollo-boost";
import client from "../../../api/apiClient";
import { resolve } from "url";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* login({ username, password }) {
  //console.log("loginnnn");
  // yield call(() => {
  //   client
  //     .query({
  //       query: gql`
  //         {
  //           user(id: 1) {
  //             id
  //             name
  //           }
  //         }
  //       `
  //     })
  //     .then(result => {
  //       if(result.data.user) {

  //       }
  //     });
  // });
  // yield put({ type: types.LOGIN_SUCCESS });

  try {
    // let user = yield call(() => {
    //   client
    //     .query({
    //       query: gql`
    //         {
    //           user(id: 1) {
    //             id
    //             name
    //           }
    //         }
    //       `
    //     })
    //     .then(result => {
    //       if (result.data.user) {
    //         return result.data.user;
    //       }
    //       return false;
    //     });
    // });
    let user: any = false;
    yield client
      .query({
        query: gql`
          {
            user(id: 1) {
              id
              name
            }
          }
        `
      })
      .then(result => {
        if (result.data.user) {
          user = result.data.user;
          user.token = Math.floor(Math.random() * Math.floor(100)); // set random id (this could be replaced by jwt token)
        }
      });
    if (user !== false) {
      yield put({ type: types.LOGIN_SUCCESS, user });
    } else {
      yield put({ type: types.LOGIN_ERROR });
    }
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR });
  }
}

const authSaga = [takeLatest(types.LOGIN, login)];

export default authSaga;
