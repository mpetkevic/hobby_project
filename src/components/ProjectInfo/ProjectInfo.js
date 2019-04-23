import React from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

const ProjectInfo = (props) => {
  const projectInfo = props.projects.filter(project => {
    if(project.id.toString() === props.match.params.id) {
      return project;
    }
    return null;
  }).map((project, i) => {
    return (
      <div className='Project-item' key={i}>
        <h4>{project.title}</h4>
        <span className='Project-item__span'>Hobby Author: {project.username}</span>
        <span className='Project-item__span'>Hobby Description: {project.description}</span>
        <span className='Project-item__span'>Hobby Amount: {project.amount}&euro;</span>
        <span className='Project-item__span'>Hobby Contact: {project.email}</span>
      </div>
    )
  })
  return (
    <div>
      <Link className='Link' to='/projects'>Back to projects</Link>
      {projectInfo}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

export default connect(mapStateToProps)(ProjectInfo);