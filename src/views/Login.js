import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import ReactLogoAnimation from '../components/ReactLogoAnimation';
import './Form.scss'

const Login = ({ login, error, errorMessage, loader }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const [email, password] = [emailRef.current.value, passwordRef.current.value]
    login(email, password)
  }

  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        {
          loader ? <Loader /> : <>
            <h2 className='text-center mb-4 text-info'>Login</h2>
            <form className="form">
              <input type="email" ref={emailRef} className='form-control form-control-lg' placeholder="Enter Email Id / Username" required />
              <input type="password" ref={passwordRef} className='form-control form-control-lg' placeholder="Enter Password" required />
              <button type="submit" onClick={ e => onSubmit(e) } className="btn btn-info px-4 fw-bold btn-lg text-uppercase">Login</button>
              
              <Link className='forget_password d-inline-block' href to="/forgot-password">Forgot Password?</Link>
            </form>
          </>
        }
      </div>
      <p className='mt-4 text-secondary text-center'>
        Don't have an Account?
        <br />
        <Link to="/register" className='btn btn-outline-info mt-3 px-4 btn-sm'>Register</Link>
      </p>

    </div>
  );
}

export default Login;
