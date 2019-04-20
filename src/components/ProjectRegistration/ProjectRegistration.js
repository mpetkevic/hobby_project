import React, {Component} from 'react';
import './ProjectRegistration.scss';
import { DatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';

class ProjectRegistration extends Component {
  state = {
    startDate: new Date()
  }
  onFormSubmit = (e) => {
    e.preventDefault();
  }
  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div className='ProjectForm'>
        <h2>Please Register Your Hobby</h2>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name='username' placeholder='Please enter your name'/>
          <input type="text" name='hobby-name' placeholder='Please enter your hobby name'/>
          <input type="email" name='email' placeholder='Please enter your email'/>
          <textarea name="description" rows="5" placeholder='Please describe yours hobby'></textarea>
          <input type="number" name='amount' placeholder='Please enter amount for yours needs'/>
          <DatePicker
            onChange={this.handleChange}
            selected={this.state.startDate}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProjectRegistration;