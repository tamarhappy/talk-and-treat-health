import React, { useContext } from 'react';
import './Consultstyle.css';
import { Link } from 'react-router-dom';
import FeeContext from '../context/feeContext';

const Consultstyle = ({id, rating, price}) => {
  const feeContext = useContext(FeeContext);
  const { addToBasket } = feeContext;

  const addToBasketHandler = () => {
    addToBasket({item: { id, rating, price }});
  };

  return (
    <div className='consult' key={id}>
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
      <Link to='/profile'>
      <button className='urgent' onClick={addToBasketHandler}>Urgent message</button>
      </Link>
    </div>
  )
}

export default Consultstyle;