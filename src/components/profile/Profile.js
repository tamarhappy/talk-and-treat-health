import React from 'react';
//import { Link } from 'react-router-dom';
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
            <h3>Name: Lima Akinyi</h3>
            <h3>Age: 18</h3>
            <h3>Gender: female</h3>

            <h1>Conditions</h1>
            <span class="material-symbols-rounded">check_circle</span><h2>Asthma</h2>
            <span class="material-symbols-rounded">check_circle</span><h2>Ulcers</h2>

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
        </div>
        <div className='profile_3'>
            <div className='sub_one'>
                <h3>Visit schedule</h3>
                <span class="material-symbols-rounded">notifications</span>
            </div>
            <div className='sub_two'>
                <img className='lab' src='' alt='' />
                <h2>Lab test</h2><h2>5 June</h2>
                <h3>Schedule the visit</h3><h3>08.00am</h3>
            </div>
        </div>

        <div className='direct_pharm'>
            <button className='pharm'>Pharmacy</button>
        </div>
    </div>
  );
};

export default Profile;