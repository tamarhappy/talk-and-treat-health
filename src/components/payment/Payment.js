import React, { useContext, useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import FeeContext from '../context/feeContext';
import CheckoutProduct from '../checkout/CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';
import { db } from '../../firebase';


const Payment = () => {
    const feeContext = useContext(FeeContext);
    const { basket, user, getBasketTotal, emptyBasket } = feeContext;

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Generate the special stripe secret which will allow us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket, getBasketTotal]);
    console.log("The secret is => ", clientSecret);

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true)

        const payload =  stripe.confirmCardPayment(clientSecret, {
            payment_method: {card: elements.getElement(CardElement) },
        }).then(({paymentIntent}) => {
            //Payment intent = payment conservation
            db.collection("user")
              .doc(user?.uid)
              .collection("orders")
              .doc(paymentIntent.id)
              .set({ 
                basket: basket, 
                amount: paymentIntent.amount, 
                created: paymentIntent.created 
              });
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            //Empty the basket
            emptyBasket();
            //Redirect the user to the order page
            history.push('/orders');
        });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error? 'e.error.message': '');
    };

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout <Link to='/checkout'></Link>
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Patient's Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>Delta, Riverside Gardens Road</p>
                    <p>Nairobi, KE</p>
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review consultation fee</h3>
                </div>
                <div className='payment_items'>
                    {basket.map((item)=> (
                      <CheckoutProduct 
                        key={item.id} 
                        id={item.id} 
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    {/* Stripe code will go here */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment_price_container'>
                            <CurrencyFormat 
                            renderText={(value) => <h3>Consultation Total: {value}</h3>}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Payment;