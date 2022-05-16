import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Loading from '../Components/Loading';
import Success from '../Components/Success';
import Error from '../Components/Error';

export default function Loginscreen() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-5 mt-2 text-start shadow-lg p-3 mb-5 bg-body rounded'>
          <h2 className='text-center' style={{ fontSize: '35px' }}>
            Login
          </h2>
        {loading && (<Loading/>)}
        {error && (<Error error='Invalid Credentials'/>)}
          <div>
            <input
              type='text'
              placeholder='email'
              className='form-control'
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type='password'
              placeholder='password'
              className='form-control'
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button className='btn btn-danger mt-3 mb-3' onClick={login}>
              LOGIN
            </button>
            <br/>
            <a style={{color:'black'}} className="mt-2" href='/register'>
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}