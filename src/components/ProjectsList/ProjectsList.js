import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProjectsList.scss';

class ProjectsList extends Component {
  render() {
    return (
      <div className='ProjectsList'>
        <p>Projects will be soon...</p>
        <p>If you have a project, please{' '}
          <Link className='Link' to='/project-registration'>Register</Link>
          {' '}your project(hobby).
        </p>
      </div>
    );
  }
}

export default ProjectsList;