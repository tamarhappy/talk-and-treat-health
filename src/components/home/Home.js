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
        <div className='content'>
          <h1>Reviews:</h1>
          <div className="feedback-box">
                <p>
                    Sheeky Salon is the best place to go to when you need a cool haircut or hollywood worthy hair. Not only do they create a professional look, but they are also quite affordable.
                </p>
                <div className="author">
                    <img className="imagine"
                     src="https://bonaventureogeto.github.io/Sample-Sheeky/@Ressources/images/profile-1.jpg" 
                     alt='' />
                    <p>
                        "Azim Yamani"
                        <span>Patient</span>
                    </p>
                </div>
            </div>
            <div className="feedback-box">
                <p>
                    I love using my art to create amazing modern haircuts for both men and women. It is a passion of mine, having to put a smile on a clients face after their hairdo is an amazing feeling.
                </p>
                <div className="author">
                    <img className="imagine" 
                     src="https://bonaventureogeto.github.io/Sample-Sheeky/@Ressources/images/profile-2.jpg" 
                     alt='' />
                    <p>
                        "Coby Miller"
                        <span>Patient</span>
                    </p>
                </div>
            </div>
            <div className="feedback-box">
                <p>
                    My goal at the end of the day is to use this profession to enhance the crown that rests on everyone's very head. It is unique for each and everyone thus must be treated differently.
                </p>
                <div className="author">
                    <img className="imagine" 
                     src="https://bonaventureogeto.github.io/Sample-Sheeky/@Ressources/images/profile-3.jpg" 
                     alt='' />
                    <p>
                        "Cassie Shore"
                        <span>Patient</span>
                    </p>
                </div>
          </div>
        </div>
    </div>
  );
};

export default Home;