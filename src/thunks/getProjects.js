import {getProjects} from '../actions/projectsAction';
import axios from 'axios'

export const setProjectList = () => (dispatch) => {
  const projectList = axios.get('https://hobby-api.herokuapp.com/api')
    .then((res) => dispatch(getProjects(res.data)))
    .catch((error) => console.log(error))
  return projectList;
}