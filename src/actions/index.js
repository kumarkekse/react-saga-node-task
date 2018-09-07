export const listUser = payload => ({ type:"LIST_USERS", payload });

export const currentUser = payload => ({ type:"CURRENT_USER", payload });

export const fetchCurrentUser = payload => ({ type:"FETCH_CURRENT_USER", payload });

export const fetchRegisterUser = payload => ({ type:"FETCH_REGISTER_USER", payload});

export const fetchLoginUser = payload => ({ type:"FETCH_LOGIN_USER", payload});

export const fetchLogoutUser = payload => ({ type:"FETCH_LOGOUT_USER", payload});

export const createNewUser = payload => ({ type:"CREATE_USER", payload });

export const fetchNewUser = payload => ({ type:"FETCH_CREATE_USER", payload });

export const deleteUser = payload => ({ type:"DELETE_USER", payload });

export const fetchDeleteUser = payload => ({ type:"FETCH_DELETE_USER", payload });

export const filterUser = payload => ({ type:"FILTER_USERS", payload});

export const fetchFilteredUsers = payload => ({ type:"FETCH_FILTERED_USERS", payload });

export const fetchUsers = payload => ({ type:"FETCH_USERS", payload });

export const fetchUpdateUser = payload => ({ type:"FETCH_UPDATE_USER", payload });