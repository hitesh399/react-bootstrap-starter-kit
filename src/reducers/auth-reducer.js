import { GET_USER_PROFILE } from '../actions/auth-action';

export const authReducer = (state = {}, action) => {
  if (GET_USER_PROFILE === action.type) {
    state = action.payload.user;
  }
  return state;
};