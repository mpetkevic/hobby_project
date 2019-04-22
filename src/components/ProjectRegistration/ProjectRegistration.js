import React, {Component} from 'react';
import './ProjectRegistration.scss';
import Loader from '../Loader/Loader';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as actions from '../../actions/projectRegisterActions';


class ProjectRegistration extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const {
      username,
      hobbyName,
      email,
      description,
      amount,
      endDate,
      loading,
      error
    } =this.props.projectRegister;
    const {onInputChange, onDateChange} = this.props
    return (
      <div className='ProjectForm'>
        <h2>Please Register Your Hobby</h2>
        {error ? <p style={{
          color: 'red',
          textAlign: 'center'
        }}>{error}</p> : null}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name='username'
            value={username}
            onChange={onInputChange}
            placeholder='Please enter your name'/>
          <input
            type="text"
            name='hobbyName'
            value={hobbyName}
            onChange={onInputChange}
            placeholder='Please enter your hobby name'/>
          <input
            type="email"
            name='email'
            value={email}
            onChange={onInputChange}
            placeholder='Please enter your email'/>
          <textarea
            name="description"
            rows="5"
            value={description}
            onChange={onInputChange}
            placeholder='Please describe yours hobby'/>
          <input
            type="number"
            name='amount'
            value={amount}
            onChange={onInputChange}
            placeholder='Please enter amount for yours needs'/>
          <DatePicker
            onChange={onDateChange}
            selected={endDate}
            placeholderText="Select project end date"
            dateFormat="yyyy MM dd"
          />
          <button className="form-submit" type="submit">
            {loading ? <Loader color={'#fff'} h={15} /> : 'Sign In'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectRegister: state.projectRegister
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(actions.onInputChange(e)),
  onDateChange: (date) => dispatch(actions.onDateChange(date)),
});
export default connect(mapStateToProps,mapDispatchToProps)(ProjectRegistration);