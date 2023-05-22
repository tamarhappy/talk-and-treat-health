import React from 'react';
import './Pharmacy.css';

const Pharmacy = () => {
  return (
    <div className='pharm'>
        <div className='pharm_pic'>
            <h2>Pharmacy</h2>
        </div>
        <div className='main'>
            <h2>Buy Medicine</h2>
        </div>
        <div className='meds'>
          <div className='med_1'>
            <img className='ibu' 
             src='https://5.imimg.com/data5/UO/ZW/RQ/GLADMIN-10823160/paroxetine-hydrochloride-500x500.jpg' 
             alt='' 
            />
            <h3>Ibuprofen</h3>
          </div>
          <div className='med_2'>
            <img className='para' 
             src='https://th.bing.com/th/id/OIP.AKkWE1hBKk7jwaKnS4XTfgHaHa?pid=ImgDet&w=1731&h=1731&rs=1' 
             alt='' 
            />
            <h3>Paracetamol</h3>
          </div>
          <div className='med_3'>
            <img className='amoxil' 
             src='https://media.istockphoto.com/vectors/vitamin-pills-icon-vector-id471039752?k=6&m=471039752&s=612x612&w=0&h=eIoVYf9HlNKWmimzJcXSWlKOWy9rE0shAvn7-e26e6U=' 
             alt='' 
            />
            <h3>Amoxicilin</h3>
          </div>
          <div className='med_4'>
            <img className='flagyl' 
             src='https://th.bing.com/th/id/R.5ad05f9824ad0d7cb313a66a84f28924?rik=BYxl3Qs7PAuyxg&riu=http%3a%2f%2fpharmavet.com.ar%2fwp-content%2fuploads%2f2019%2f04%2fAntidiarreicos-Oralesc.jpg&ehk=LncC1jckzz6h7LvtAGELi%2fAM3PiKw4n%2fTKR%2bE750GHU%3d&risl=&pid=ImgRaw&r=0' 
             alt='' 
            />
            <h3>Flagyl</h3>
          </div>
        </div>
        <div className='prescribe'>
            {/* prescribe here */}
        </div>
    </div>
  )
};

export default Pharmacy;