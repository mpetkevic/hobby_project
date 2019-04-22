import * as types from '../actions/types';

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}