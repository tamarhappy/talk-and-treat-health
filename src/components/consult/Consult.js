import React from 'react';
import './Consult.css';
import Consultstyle from './Consultstyle';

const Consult = () => {
  return (
    <div className='chat'>
      <h2 className='chat_head'>Best doctors near you</h2>
      <div className='chat_nav'>
        <img className='pfp_1' 
         src='https://th.bing.com/th/id/R.4650d18e4671d23a8713ab6c837a0f6e?rik=bTrhebyrTSUHNg&pid=ImgRaw&r=0' 
         alt='' 
        />
        <Consultstyle 
        id='1'
        price={99.99}
        rating={5}
        />
        <h2>Dr.Mark Vanderwaal</h2>
        <h3>Physician</h3>
        {/* <Link to={'/profile'}>
        <button className='urgent'>Urgent message</button>
        </Link> */}
      </div>
      <div className='chat_nav'>
        <img className='pfp_2' 
         src='https://www.drsmiles.co.in/img/about-2.png' 
         alt='' 
        />
        <Consultstyle 
        id='2'
        price={99.9}
        rating={5}
        />
        <h2>Dr.Aneesa Park</h2>
        <h3>Pulmonologist</h3>
        {/* <Link to={'/profile'}>
        <button className='urgent'>Urgent message</button>
        </Link> */}
      </div>
      <div className='chat_nav'>
        <img className='pfp_3' 
         src='https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png' 
         alt='' 
        />
        <Consultstyle
        id='3'
        price={99.99}
        rating={5}
        />
        <h2>Dr.Chris Martin</h2>
        <h3>Gastroenterologist</h3>
        {/* <Link to={'/profile'}>
        <button className='urgent'>Urgent message</button>
        </Link> */}
      </div>
      <div className='chat_nav'>
        <img className='pfp_4' 
         src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png' 
         alt='' 
        />
        <Consultstyle
        id='4'
        price={99.99} 
        rating={5}
        />
        <h2>Dr.Grace Sterling</h2>
        <h3>Cardiologist</h3>
        {/* <Link to={'/profile'}>
        <button className='urgent'>Urgent message</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Consult;