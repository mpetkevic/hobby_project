import * as types from '../actions/types';

const initialState = {
  username: '',
  hobbyName: '',
  email: '',
  description: '',
  amount: '',
  projectEndDate: '',
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}