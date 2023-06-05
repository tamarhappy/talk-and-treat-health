import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile_1'>
            <img className='profile' 
             src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d2629105341497.5f770032e210d.png' 
             alt='' 
            />
            <h1>How Are You Feeling Today?</h1>
        </div>
        <div className='profile_2'>
            <h1>Profile</h1>
            <h3>Name:<input className='name' type='text' placeholder='Sarah Olsen' /></h3>
            <h3>Age:<input className='age' type='number' placeholder='20' /></h3>
            <h3>Gender:<input className='gender' type='gender' placeholder='Male/Female' /></h3>

            <h1>Conditions</h1>
            <h3>Asthma</h3>
            <h3>Ulcers</h3>

            <h1>Your Doctors</h1>
            <img className='doc_1' 
             src='https://www.drsmiles.co.in/img/about-2.png' 
             alt='' 
            />
            <h3>Dr.Suli Nirvana - Respiratory Specialist</h3>

            <img className='doc_2' 
             src='https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png'
             alt='' 
            />
            <h3>Dr.Nicholas Cole - Gastroenterologist</h3>

        <div className='profile_3'>
            <div className='sub_one'>
                <h3><a href='https://calendly.com/talkandtreathealth/15min?month=2023-06'>Book an appointment</a></h3>
                <span class="material-symbols-rounded">notifications</span>
            </div>
            <div className='sub_two'>
                <h3>Lab test</h3><h3>5 June, 8:00am</h3>
            </div>
        </div>
        <Link to={'/pharmacy'}>
        <div className='direct_pharm'>
            <button className='pharms'>Pharmacy</button>
        </div>
        </Link>
        </div>
    </div>
  );
};

export default Profile;