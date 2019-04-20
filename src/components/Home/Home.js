import React from 'react';
import {Link} from "react-router-dom";
import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <p>This is place for yours hobby projects.</p>
      <p>If you have account please
        <Link className='Link' to='/login'> Sing In</Link>
      </p>
      <p>If you don't have account please
        <Link className='Link' to='/register'> Sing Up</Link>
      </p>
    </div>
  );
};

export default Home;