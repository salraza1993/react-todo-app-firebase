import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import ReactLogoAnimation from '../components/ReactLogoAnimation';

const Register = ({ registerUser, errorMessage, error, loader, profileCreated }) => {

  
  const nameRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault();
    const [ userName, firstName, lastName, email, password ] = [
      nameRef.current.value,
      firstNameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
    ];
    registerUser(userName, firstName, lastName, email, password);
    
    if (!error) resetFormValue()
  }
  
  const resetFormValue = () => {
    nameRef.current.value = '';
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        {
          loader ? <Loader /> : <>
            <h2 className='text-center mb-4 text-info'>Register</h2>
            <form className="form">
              <input 
                type="text" 
                ref={nameRef} 
                className={error ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} 
                placeholder="Enter name" 
                required />

              <input 
                type="text" 
                ref={firstNameRef} 
                className={error ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} 
                placeholder="Enter Frist Name" 
                required />

              <input 
                type="text" 
                ref={lastNameRef} 
                className={error ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} 
                placeholder="Enter Last Name" 
                required />

              <input 
                type="email" 
                ref={emailRef} 
                className={error ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} 
                placeholder="Enter Email Id" 
                required />

              <input 
                type="password" 
                ref={passwordRef} 
                className={error ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} 
                placeholder="Enter Password" 
                required />

              
              <button disabled={loader} onClick={e => onSubmit(e)} type="submit" className="btn btn-info px-4 fw-bold btn-lg text-uppercase">Login</button>
              
              <div className={error ? "alert alert-danger" : "d-none"} role="alert">{errorMessage}</div>
              <div className={profileCreated ? 'alert alert-success' : 'd-none'}>
                Your profile has been created successfully. Please login with your email address and password.
              </div>
              
              <Link className='forget_password d-inline-block' href to="/forgot-password">Forgot Password?</Link>
            </form>
          </>          
        }
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
