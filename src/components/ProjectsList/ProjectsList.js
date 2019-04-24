import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProjectsList.scss';
import {setProjectList} from '../../thunks/getProjects';
import {connect} from "react-redux";
import moment from 'moment';

class ProjectsList extends Component {

  componentDidMount() {
    this.props.onGetProjectsList();

  }

  render() {
    const {projects} =this.props;

    let projectsList;
    if(projects.length !== 0) {
      projectsList = projects && projects.map((project, i) => {
        const endDate = moment(project.end_date).format('YYYY-MM-DD');
        console.log(endDate)
        return (
          <div className='Project-item' key={i}>
            <h4>{project.title}</h4>
            <span className='Project-item__span'>Hobby Author: {project.username}</span>
            <span className='Project-item__span'>Hobby Description: {project.description}</span>
            <span className='Project-item__span'>Hobby Amount: {project.amount}&euro;</span>
            <span className='Project-item__span'>Hobby Contact: {project.email}</span>
            <span className='Project-item__span'>Hobby EndDate: {endDate}</span>
            <Link className='Link' to={`/project/${project.id}`}>See more info</Link>
          </div>
        )
      })
    } else {
      projectsList = <p>Projects will be soon...</p>
    }
    return (
      <div className='ProjectsList'>
        {projectsList}
        <p>If you have a project, please{' '}
          <Link className='Link' to='/project-registration'>Register</Link>
          {' '}your project(hobby).
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetProjectsList: () => dispatch(setProjectList())
});
export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList);