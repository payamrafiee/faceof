import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL } from '../types';

const initialState = {
  isLogged: false,
  isLoading: false,
  token: null,
  info: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
