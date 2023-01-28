import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SUCCESS, LOGIN, LOGIN_SUCCESS } from '../redux/action';

const BaseUrl = "https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
    try{
        const reponse =yield axios.get(BaseUrl);
        yield put ({type: FETCH_USER_SUCCESS, payload:reponse.data})    
    }
    catch(err){
        console.log("error - getUser: ", err);
    }
}

function* authSagaFun(action) {
    const user = action.payload;
    if (user.username === "admin" && user.password === "letmein") {
      yield put({ type: LOGIN_SUCCESS, payload: user });
      yield put({ type: FETCH_USER, payload: {} });
    }
  }

  export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
  }