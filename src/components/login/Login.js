import React from 'react';
//import { Link } from 'react-router-dom';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth => {history.push('/');
  })
    .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if(auth) {
        history.push('/');
      }
    })
    .catch(error => alert(error.message));
  };

  return (
    <div className='login' >
      <img
       className='login_logo'
       src='https://document-export.canva.com/yTBHA/DAFi-JyTBHA/17/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T013033Z&X-Amz-Expires=63609&X-Amz-Signature=0b5a059b2037f2fa38fb4fc614e24e2a32f625bb1ae1d6a3e87080366a48766f&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2015%20May%202023%2019%3A10%3A42%20GMT' 
       alt='Talk and Treat Logo'  
      />
      <div className='login_container' >
          <h1>Sign-in</h1>
          <form>
              <h5>E-mail</h5>
              <input type='text' value={email} onChange={e =>setEmail(e.target.value)} />
              <h5>Password</h5>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
              <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
          </form>
          <p>By continuing, you agree to Talk and Treat 
                Privacy Terms and Conditions.
          </p>
          <button className='login_registerButton' onClick={register}>Create Account</button>
      </div>
    </div>
  );
};

export default Login;