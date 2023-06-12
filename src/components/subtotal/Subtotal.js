import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import FeeContext from '../context/feeContext';


const Subtotal = () => {
  const history = useHistory();
  const feeContext = useContext(FeeContext);
  const { basket, getBasketTotal } = feeContext;
  
  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value) => <>
        <p>
            Subtotal ({basket.length} items): 
            <strong>{value}</strong>
        </p>
        {/* <small className='subtotal_gift'>
            <input type='checkbox'/>This order contains a gift
        </small> */}
        </>
        }
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        prefix={'$'}
        />
        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;