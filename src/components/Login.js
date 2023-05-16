import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  
  const signIn = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => 
      {history.push('/');
    })
    .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      (auth) => {
        if(auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='login' >
        <Link to='' >
            <img 
            src='https://document-export.canva.com/yTBHA/DAFi-JyTBHA/12/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T065436Z&X-Amz-Expires=16856&X-Amz-Signature=50ec432d433453ce59de509555ae5ec0b61a4a2a1425276ea9f933c3fe0754ba&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2015%20May%202023%2011%3A35%3A32%20GMT' 
            alt='Talk and Treat Logo' 
            className='login_logo' 
            />
        </Link>
        <div className='login_container' >
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' className='login_signInButton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Talk and Treat 
                Privacy Terms and Conditions.
            </p>
            <button className='login_registerButton' onClick={register} >Create Account</button>
        </div>
    </div>
  );
};

export default Login;