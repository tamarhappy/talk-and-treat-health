import React from 'react';
import './Home.css';
import Homedetails from './Homedetails';

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
          <img
          className='home_image' 
            src='https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg' 
            alt='Home Page' 
        />
        <Homedetails />
        </div>
    </div>
  );
};

export default Home;