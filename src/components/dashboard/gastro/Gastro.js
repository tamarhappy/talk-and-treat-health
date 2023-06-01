import React from 'react';
import { Link } from 'react-router-dom';
import './Gastro.css';
import Consultstyle from '../../consult/Consultstyle'; 

const Gastro = () => {
  return (
    <div className='gastro'>
        <div className='gastro_head'>
            <img className='stomach' 
             src='https://qph.fs.quoracdn.net/main-qimg-a6268c2aa1227bca0d64dfc95e0b8032' 
             alt='' 
            />
            <h1>Gastroenterology</h1>
            <h2>Our team</h2>
        </div>
        <div className='gas_main'>
            <img className='gas_img' 
             src='https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png' 
             alt='' 
            />
            <Consultstyle 
            rating={5}
            />
            <h2>Dr.Chris Martin</h2>
            <h3>Gastroenterologist</h3>
            <Link to={'/chat'}>
            <button className='urgent'>Urgent message</button>
            </Link>
        </div>
    </div>
  )
}

export default Gastro;