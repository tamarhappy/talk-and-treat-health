import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout_add'>
            <img className='add' 
             src='https://th.bing.com/th/id/R.d3ad5d29e151292ddfd91b8ea94ce5fc?rik=29PXJuAhuctOwg&riu=http%3a%2f%2fwww.hospitalinformationsystem.com%2fwp-content%2fuploads%2f2016%2f02%2fFAM-head.png&ehk=65gN0wC17oH3CjA%2fBDv%2fWtnQGnePkDh49oHn0h0%2fypI%3d&risl=&pid=ImgRaw&r=0' 
             alt='' 
            />
            <div>
                <h3>Hello, email</h3>
                <h2 className='checkout_title'>Your medicine</h2>
            </div>
            <h2 className='checkout_title'>Total consultation</h2>
        </div>
    </div>
  )
};

export default Checkout;