import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogoAnimation from '../components/ReactLogoAnimation';
import './Form.scss'

const Login = () => {
  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        <h2 className='text-center mb-4 text-info'>Login</h2>
        <form className="form">
          <input type="email" name="" id="" className='form-control form-control-lg' placeholder="Enter Email Id / Username" />
          <input type="password" name="" id="" className='form-control form-control-lg' placeholder="Enter Password" />
          <button type="submit" className="btn btn-info px-4 fw-bold btn-lg text-uppercase">Login</button>
          <Link className='forget_password d-inline-block  mt-3' href to="/forgot-password">Forgot Password?</Link>
        </form>
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
