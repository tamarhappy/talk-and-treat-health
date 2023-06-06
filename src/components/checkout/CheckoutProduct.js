import React,{useContext} from 'react';
import FeeContext from '../context/feeContext';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, rating, price, hideButton }) => {
    const feeContext = useContext(FeeContext);
    const { removeFromBasket } = feeContext;

    const removeFromBasketHandler = () => {
        removeFromBasket({id: id});
    };
  return (
    <div className='checkout_product'>
        <div className='checkout_product_info'>
            <div className='checkout_product_rating'>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i} >⭐</p>
                  ))}
            </div>
            <p className='checkout_product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {!hideButton && (
            <button onClick=
            {removeFromBasketHandler}>Remove From Basket</button>
            )}
        </div>
    </div>
  );
};

export default CheckoutProduct;