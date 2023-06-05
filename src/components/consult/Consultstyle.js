import React from 'react';
import './Consultstyle.css';

const Consultstyle = ({rating, price}) => {
  return (
    <div className='rating'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
          <p className='price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
    </div>
  )
}

export default Consultstyle;