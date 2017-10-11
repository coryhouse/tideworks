import { SAVE_USER, DELETE_USER } from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function userReducer(state = initialState.users, action) {
  let users;

  switch (action.type) {
    case SAVE_USER:
      if (action.user.id) {
        users = [...state.filter(u => u.id !== action.user.id), action.user];
      } else {
        action.user.id = Math.random();
        users = [...state, action.user];
      }
      return users;

    case DELETE_USER:
      users = state.filter(user => user.id !== action.id);
      return users;

    default:
      return state;
  }
}
