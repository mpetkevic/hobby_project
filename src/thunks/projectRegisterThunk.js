import * as actions from '../actions/projectRegisterActions';

export const onProjectRegisterFormSubmit = (projectInfo, history) => (dispatch) => {
  dispatch(actions.onProjectRegisterFormLoading());
  if(projectInfo.username === '' || projectInfo.hobbyName === '' || projectInfo.email === '' ||
  projectInfo.description === '' || projectInfo.amount === '' || projectInfo.date === null) {
    return dispatch(actions.onProjectRegisterFormError('Please fill all fields'))
  }
  dispatch(actions.onProjectRegisterFormSubmit(projectInfo));
  console.log(projectInfo);
  history.push('/projects');
}