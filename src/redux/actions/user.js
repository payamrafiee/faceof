import axios from 'axios';

import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL } from '../types';

export const signup = ({ email, username, password }) => async dispatch => {
  dispatch({ type: SIGNUP_USER });
  try {
    const { data } = await axios.post('http://localhost:3000/api/v1/users/signup', {
      email,
      username,
      password,
    });

    return dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({ type: SIGNUP_USER_FAIL });
  }
};
