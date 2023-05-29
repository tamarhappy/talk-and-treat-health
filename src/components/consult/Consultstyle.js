import React from 'react';
import './Consultstyle.css';

const Consultstyle = ({rating}) => {
  return (
    <div className='rating'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
    </div>
  )
}

export default Consultstyle;