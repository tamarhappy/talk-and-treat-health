import React, { useContext } from 'react';
import './Checkout.css';
import FeeContext from '../context/feeContext';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const feeContext = useContext(FeeContext);
  const { basket, user } = feeContext;

  return (
    <div className='checkout'>
        <div className='checkout_add'>
            <img className='add' 
             src='https://th.bing.com/th/id/R.d3ad5d29e151292ddfd91b8ea94ce5fc?rik=29PXJuAhuctOwg&riu=http%3a%2f%2fwww.hospitalinformationsystem.com%2fwp-content%2fuploads%2f2016%2f02%2fFAM-head.png&ehk=65gN0wC17oH3CjA%2fBDv%2fWtnQGnePkDh49oHn0h0%2fypI%3d&risl=&pid=ImgRaw&r=0' 
             alt='' 
            />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Total consultation fee</h2>

                {basket.map(item => ( <CheckoutProduct 
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  rating={item.rating}
                />
                ))}
            </div>
        </div>
        <div className='checkout_right'><Subtotal /></div>
    </div>
  )
};

export default Checkout;