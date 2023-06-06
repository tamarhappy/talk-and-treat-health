import { Link } from 'react-router-dom';
import './Navigation.css';
import FeeContext from '../context/feeContext';
import { auth } from '../../firebase';
import { useContext } from 'react';

const Navigation = () => {
  const feeContext = useContext(FeeContext);
  const { basket, user } = feeContext;

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  };

  return (
    <div className='nav'>
      <Link to='/'>
        <img className='nav_logo' 
         src='https://document-export.canva.com/yTBHA/DAFi-JyTBHA/17/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T013033Z&X-Amz-Expires=63609&X-Amz-Signature=0b5a059b2037f2fa38fb4fc614e24e2a32f625bb1ae1d6a3e87080366a48766f&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2015%20May%202023%2019%3A10%3A42%20GMT' 
         alt='Nav Logo' 
        />
      </Link>

        <div className='nav_search'>
            <span className='material-symbols-rounded'>search</span>
            {/* <SearchBar /> */}
        </div>
        <div className='nav_options'>
          <Link to={!user && '/login'}>
          <div className='nav_option' onClick={handleAuthentication}>
              <span className='nav_optionOne'>
                Hello, {!user ? 'Guest' : user.email}
              </span>
          </div>
          </Link>
          <Link to={'/dashboard'}>
          <div className='nav_option'>
              <span className='material-symbols-rounded'>ecg_heart</span>
              <span className='nav_optionOne'>Checkup</span>
          </div>
          </Link>
          <Link to={'/profile'}>
            <div className='nav_option'>
                <span className="material-symbols-rounded">account_circle</span>
                <span className='nav_optionOne'>Profile</span>
            </div>
          </Link>
          <Link to={'/checkout'}>
            <div className='nav_option'>
                <span className="material-symbols-rounded">credit_score</span>
                <span className='nav_optionOne'>Checkout</span>
            </div>
          </Link>
          <Link to='/checkout'>
            <div className='header_optionBasket'>
                      <span className='header_optionTwo header_basketCount'>
                        {basket?.length}
                      </span>
            </div>
          </Link>
          {/* <Link to={'/contacts'}>
          <div className='nav_option'>
              <span className='material-symbols-rounded'>call</span>
          </div>
          </Link> */}
        </div>
        {/* <Dashboard {...{user}} /> */}
    </div>
  );
};

export default Navigation;