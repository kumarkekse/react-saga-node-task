import { all } from 'redux-saga/effects'
import { watchRegisterUser, 
         watchLoginUser, 
         watchLogoutUser, 
         watchCurrentUser,
         watchFilteredUsers,
         watchUsers,
         watchNewUser,
         watchDeleteUser,
         watchUpdateUser, } from './user' 

function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchLoginUser(),
    watchLogoutUser(),
    watchCurrentUser(),
    watchFilteredUsers(),
    watchUsers(),
    watchNewUser(),
    watchDeleteUser(),
    watchUpdateUser(),
  ])
}

export default rootSaga