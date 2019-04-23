import * as actions from '../actions/projectRegisterActions';
import axios from 'axios';

export const onProjectRegisterFormSubmit = (projectInfo, history) => (dispatch) => {
  dispatch(actions.onProjectRegisterFormLoading());
  if(projectInfo.username === '' || projectInfo.hobbyName === '' || projectInfo.email === '' ||
  projectInfo.description === '' || projectInfo.amount === '' || projectInfo.date === null) {
    return dispatch(actions.onProjectRegisterFormError('Please fill all fields'))
  }
  const json = JSON.stringify({
    "title": projectInfo.hobbyName,
    "description": projectInfo.description,
    "amount": projectInfo.amount,
    "email": projectInfo.email,
    "username": projectInfo.username
});
  axios.post('https://hobby-api.herokuapp.com/api',json)
    .then(res=>{
      dispatch(actions.onProjectRegisterFormSubmit(res));
    })
    .catch(error => console.log(error))

  history.push('/');
}