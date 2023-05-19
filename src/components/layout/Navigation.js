//import { Link } from 'react-router-dom';
//import Conditions from '../conditions/Conditions';
import './Navigation.css';
//import { auth } from '../../firebase';

const Navigation = () => {
  // function Navigation({activeProfileId, user, checkup, message, call}) {
  //   return (
  //     <Conditions {...{activeProfileId, user}} />
  //   )
  // }

  return (
    <div className='nav'>
        <img className='nav_logo' 
         src='https://document-export.canva.com/yTBHA/DAFi-JyTBHA/17/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T013033Z&X-Amz-Expires=63609&X-Amz-Signature=0b5a059b2037f2fa38fb4fc614e24e2a32f625bb1ae1d6a3e87080366a48766f&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2015%20May%202023%2019%3A10%3A42%20GMT' 
         alt='Nav Logo' 
        />
        <div className='nav_search'>
            <input className='nav_input' type='text' />
            <span className='material-symbols-rounded'>search</span>
        </div>
        <div className='nav_options'>
          <div className='nav_option'>
              <span className="material-symbols-rounded">account_circle</span>
              <span className='nav_optionOne'>User</span>
          </div>
          <div className='nav_option'>
              <span className='material-symbols-rounded'>ecg_heart</span>
              <span className='nav_optionOne'>Checkup</span>
          </div>
          <div className='nav_option'>
              <span className='material-symbols-rounded'>account_circle</span>
              <span className='nav_optionOne'>User</span>
          </div>
          <div className='nav_option'>
              <span className='material-symbols-rounded'>call</span>
          </div>
        </div>
    </div>
  );
};

export default Navigation;