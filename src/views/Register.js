import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogoAnimation from '../components/ReactLogoAnimation';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        <h2 className='text-center mb-4 text-info'>Register</h2>
        <form className="form">
          <input type="text" name="" id="" className='form-control form-control-lg' placeholder="Enter Username" />
          <input type="text" name="" id="" className='form-control form-control-lg' placeholder="Enter Frist Name" />
          <input type="text" name="" id="" className='form-control form-control-lg' placeholder="Enter Last Name" />
          <input type="email" name="" id="" className='form-control form-control-lg' placeholder="Enter Email Id / Username" />
          <input type="password" name="" id="" className='form-control form-control-lg' placeholder="Enter Password" />
          <button type="submit" className="btn btn-info px-4 fw-bold btn-lg text-uppercase">Login</button>
          <Link className='forget_password d-inline-block  mt-3' href to="/forgot-password">Forgot Password?</Link>
        </form>
      </div>
      <p className='mt-4 text-secondary text-center'>
        Already have an Account?
        <br />
        <Link to="/login" className='btn btn-outline-info mt-3 px-4 btn-sm'>Login</Link>
      </p>

    </div>
  );
};

export default Register;
