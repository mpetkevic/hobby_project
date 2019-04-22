import React, {Component} from 'react';
import './ProjectRegistration.scss';
import Loader from '../Loader/Loader';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class ProjectRegistration extends Component {
  state = {
    startDate: null,
    loading: false,
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: !this.state.loading})
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
          <input type="text" name='hobbyName' placeholder='Please enter your hobby name'/>
          <input type="email" name='email' placeholder='Please enter your email'/>
          <textarea name="description" rows="5" placeholder='Please describe yours hobby'></textarea>
          <input type="number" name='amount' placeholder='Please enter amount for yours needs'/>
          <DatePicker
            onChange={this.handleChange}
            selected={this.state.startDate}
            placeholderText="Select project end date"
            dateFormat="yyyy MM dd"
          />
          <button className="form-submit" type="submit">
            {this.state.loading ? <Loader color={'#fff'} h={15} /> : 'Sign In'}
          </button>
        </form>
      </div>
    );
  }
}

export default ProjectRegistration;