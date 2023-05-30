import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {
   // function Conditions({activeProfileId, user}) {
   //    return (
   //       <nav className='sidebar'>
   //          <h2>ID: {activeProfileId}</h2><h2>User: {user}</h2>
   //       </nav>
   //    )
   // }
  return (
    <div className='dashboard'>
    <div className="sidebar">
        <h1>Category:</h1>
        <Link to={'/gastro'}>
            <div className="sidebar-item">
            <span className="material-symbols-rounded hover">gastroenterology</span>
                <span className="sidebar-text">Gastroenterology - Stomach</span>
            </div>
        </Link>
        <Link to={'/cardio'}>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">cardiology</span>
                <span className="sidebar-text">Cardiology - Heart</span>
            </div>
        </Link>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">pulmonology</span>
                <span className="sidebar-text">Pulmonology - Lungs</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">ent</span>
                <span className="sidebar-text">ENT - Ear, Nose, Throat</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">orthopedics</span>
                <span className="sidebar-text">Orthopedics - Bones</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">hematology</span>
                <span className="sidebar-text">Hematology - Blood</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">dermatology</span>
                <span className="sidebar-text">Dermatology - Skin</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">neurology</span>
                <span className="sidebar-text">Neurology - Brain, Nerves</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">stethoscope</span>
                <span className="sidebar-text">General Physician</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">ophthalmology</span>
                <span className="sidebar-text">Ophthalmology - Eyes</span>
            </div>
            <div className="sidebar-item">
            <span class="material-symbols-rounded hover">dentistry</span>
                <span className="sidebar-text">Orthodontics - Teeth</span>
            </div>
    </div>
        <div className='main_page'>
            <div className='dash_containerOne'>
                <h2>Doctors</h2>
                <h1>Community</h1>
                <img className='image_1' 
                 src='https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png' 
                 alt='' 
                />
                <img className='image_2' 
                 src='https://th.bing.com/th/id/R.4650d18e4671d23a8713ab6c837a0f6e?rik=bTrhebyrTSUHNg&pid=ImgRaw&r=0' 
                 alt='' 
                />
                <img className='image_3' 
                 src='https://www.drsmiles.co.in/img/about-2.png' 
                 alt='' 
                />
                <img className='image_4' 
                 src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png' 
                 alt='' 
                />
            </div>
            <div className='dash_containerTwo'>
                <div className='mini_nav'>
                    <h2>Patient activities</h2>
                    {/* Put date function here */}
                </div>
                <img className='data' 
                 src='https://document-export.canva.com/0swIw/DAFjKI0swIw/10/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230518%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230518T033625Z&X-Amz-Expires=27817&X-Amz-Signature=2a11c8cf906c554004bc37f0b78569f7df4064216b563e875a9ff6baff19d556&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2018%20May%202023%2011%3A20%3A02%20GMT' 
                 alt='' 
                />
            </div>
            <div className='dash_containerThree'>
                <h1>Health Progress</h1>
                <span class="material-symbols-rounded">trending_up</span>
                <span class="material-symbols-rounded">clinical_notes</span>
            </div>
            <Link to={'/consult'}>
            <div className='dash_containerFour'>
                <h1>See A Doc...</h1>
                <img className='image_5' 
                 src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png' 
                 alt='' 
                />
                <span className='material-symbols-rounded'>sms</span>
                <span className='nav_optionOne'>Consult</span>
            </div>
            </Link>
        </div>
    </div>
  );
};

export default Dashboard;