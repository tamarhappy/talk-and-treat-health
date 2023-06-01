import React from 'react';
import { Link } from 'react-router-dom';
import './Cardio.css';
import Consultstyle from '../../consult/Consultstyle';

const Cardio = () => {
  return (
    <div className='cardio'>
        <div className='cardio_head'>
            <img className='card' 
             src='https://img.freepik.com/free-vector/red-human-heart-internal-organ-isolated-background_284092-203.jpg?size=664&ext=jpg' 
             alt='' 
            />
            <h1>Cardiology</h1>
            <h2>Our team</h2>
        </div>
        <div className='cardio_main'>
            <img className='cardio_img' 
             src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png' 
             alt='' 
            />
            <Consultstyle 
            rating={5}
            />
            <h2>Dr.Grace Sterling</h2>
            <h3>Cardiologist</h3>
            <Link to={'/chat'}>
            <button className='urgent'>Urgent message</button>
            </Link>
        </div>
    </div>
  )
}

export default Cardio;