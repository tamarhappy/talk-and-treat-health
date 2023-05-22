import React from 'react';
import './Consult.css';

const Consult = () => {
  return (
    <div className='chat'>
      <div className='chat_nav'>
        <img className='pfp' 
         src='https://th.bing.com/th/id/R.4650d18e4671d23a8713ab6c837a0f6e?rik=bTrhebyrTSUHNg&pid=ImgRaw&r=0' 
         alt='' 
        />
        <h2>Dr.Mark Vyn</h2>
        <h3>Physician</h3>
      </div>
      <div className='chat_box'>
        <h3>Hello...</h3>
      </div>
      <div className='chat_text'>
        <input className='text' 
         value='text' 
         placeholder='Text...' 
        />
      </div>
    </div>
  );
};

export default Consult;