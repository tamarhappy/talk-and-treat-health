import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Homedetails from './Homedetails';

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
          <Homedetails />
          <img
          className='home_image' 
            src='https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg' 
            alt='Home Page'
        />
        </div>
        <div className='acc'>
          <h2>Sign up today to get access to affordable healthcare</h2>
          <Link to={'/login'}>
          <button className='sign_in'>Sign Up</button>
          </Link>
        </div>
        <div className='about'>
          <h1>About :</h1>
          <p>Talk and Treat Health was founded in the year 2023 by Miss Happy Tamar in Nairobi, Kenya 
             with the help of a team of Software Developers. This app was designed and developed to 
             create easy and affordable healthcare to all Kenyans from the comfort of their homes. 
             We've collaborated with some of the best doctors out there to make this possible for most 
             if not all Kenyans to access.</p>
        </div>
    </div>
  );
};

export default Home;