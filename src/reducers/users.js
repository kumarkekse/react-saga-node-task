
const users = (state = [], action) => {
  switch (action.type) {
    case "LIST_USERS":
      if (!action.payload.success) return state;
        return action.payload.user;

    case "CREATE_USER":
      if (!action.payload.auth) return state;
        let createtemp = [ ...state ];
        createtemp.push(action.payload.currentUser);
        state = createtemp;
        createtemp = null;
        return state;

    case "DELETE_USER":
      let deletetemp = [ ...state ];
      let index = deletetemp.map(x => {
        return x._id;
      }).indexOf(action.payload.id);
      deletetemp.splice(index, 1);
      state = deletetemp;
      deletetemp = null;
      return state;
      
    default:
      return state
  }
}

export default users;