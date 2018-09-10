import { takeEvery, call, put } from 'redux-saga/effects'
import api from '../utility/query'

export function* watchRegisterUser(){
  yield takeEvery("FETCH_REGISTER_USER", getUser);
}

function* getUser(data){
  const payload = yield call(api.create,"/users/register", data.payload);
  
  if(payload && payload.auth){
    window.localStorage.clear();
    window.localStorage.setItem("token", payload.token);
  }

  yield put({ type: 'CURRENT_USER', payload });
}

export function* watchLoginUser(){
  yield takeEvery("FETCH_LOGIN_USER" , getLoginUser);
}

function* getLoginUser(data){
  const payload = yield call(api.create,"/users/login", data.payload);

  if(payload && payload.auth){
    window.localStorage.clear();
    window.localStorage.setItem("token", payload.token);
  }

  yield put({ type: 'CURRENT_USER', payload });
}

export function* watchLogoutUser(){
  yield takeEvery("FETCH_LOGOUT_USER" , getLogoutUser);
}

function* getLogoutUser(data){
  const payload = yield call(api.get,"/users/logout", data.payload);
  yield put({ type: 'CURRENT_USER', payload });
}

export function* watchCurrentUser(){
  yield takeEvery("FETCH_CURRENT_USER" , getCurrentUser);
}

function* getCurrentUser(){
  const payload = yield call(api.get,"/users/getuser/currentUser");
  yield put({ type: 'CURRENT_USER', payload });
}

export function* watchFilteredUsers(){
  yield takeEvery("FETCH_FILTERED_USERS" , getFilteredUsers);
}

function* getFilteredUsers(data){
  const payload = yield call(api.get,`/users/filter/${data.payload}`);
  yield put({ type: 'LIST_USERS', payload });
}

export function* watchUsers(){
  yield takeEvery("FETCH_USERS" , getUsers);
}

function* getUsers(){
  const payload = yield call(api.get,"/users/");
  yield put({ type: 'LIST_USERS', payload });
}

export function* watchNewUser(){
  yield takeEvery("FETCH_CREATE_USER" , getNewUser);
}

function* getNewUser(data){
  const payload = yield call(api.create,'/users/register',data.payload);
  yield put({ type: 'CREATE_USER', payload });
  window.alert(payload.message);
}

export function* watchDeleteUser(){
  yield takeEvery("FETCH_DELETE_USER" , getDeleteUser);
}

function* getDeleteUser(data){
  const payload = yield call(api.remove,`/users/${data.payload}`);
  payload.id = data.payload;
  yield put({ type: 'DELETE_USER', payload });
}

export function* watchUpdateUser(){
  yield takeEvery("FETCH_UPDATE_USER" , getUpdateUser);
}

function* getUpdateUser(data){
  const payload = yield call(api.put,`/users/${data.payload.id}`, data.payload);
  window.alert(payload.message);
}

