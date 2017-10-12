import * as types from "../constants/actionTypes";

export function saveUserSuccess(user) {
  return { type: types.SAVE_USER_SUCCESS, user };
}

export function deleteUserSuccess(id) {
  return { type: types.DELETE_USER_SUCCESS, id };
}

// example of a thunk using the redux-thunk middleware
export function saveUser(user) {
  return function(dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch(saveUserSuccess(user));
  };
}

export function deleteUser(id) {
  return function(dispatch) {
    // Assume API call is made here before calling dispatch...
    return dispatch(deleteUserSuccess(id));
  };
}
