import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className='contacts'>
      <img className='contact_logo' 
       src='https://document-export.canva.com/yTBHA/DAFi-JyTBHA/17/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T013033Z&X-Amz-Expires=63609&X-Amz-Signature=0b5a059b2037f2fa38fb4fc614e24e2a32f625bb1ae1d6a3e87080366a48766f&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2015%20May%202023%2019%3A10%3A42%20GMT' 
       alt='' 
      />
      <div className='e_container'>
        <h1>Emergency Contacts</h1>
        <h2>Red-Cross: +254722000111</h2>
        <h2>St.John Ambulance: +254701777897</h2>
      </div>
    </div>
  )
}

export default Contacts;