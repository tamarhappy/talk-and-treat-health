import React from 'react';
import './Pharm.css';

const Pharm = ({price}) => {
  return (
    <p className='price'>
      <small>$</small>
      <strong>{price}</strong>
    </p>
  )
}

export default Pharm;