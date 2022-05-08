import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// imports from firebase
import { auth } from './firebase_config';
import {
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
  // updateProfile,
  // signInWithEmailAndPassword,
  // signOut,
  // sendPasswordResetEmail
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from './firebase_config';



// importing Components
import Navigation from './components/Navigation';
import TodoApp from './components/TodoApp';
import Login from './views/Login';
import Register from './views/Register';

import './App.scss'

function App() {

  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [profileCretaed, setProfileCretaed] = useState(false);
  
  const registerUser = async (userName, firstName, lastName, email, password) => {
    if (userName !== '' && firstName !== '' && lastName !== '' && email !== '' && password) {
      try {
        const { user = {} } = await createUserWithEmailAndPassword(auth, email, password);
        if (user.uid) {
          setLoader(true)
          await setDoc(doc(db, "users", user.uid), {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          })
        }
        setLoader(false)
        setError(false)
        setErrorMessage('')
        setProfileCretaed(true)
        if (!loader) {
          setTimeout(() => {
            setProfileCretaed(false);
          }, 10000);
        }
      }
      catch (error) {
        setLoader(false);  
        setError(true);
        setErrorMessage(error.message)
      }
    } else {
      setLoader(false);
      setError(true);
      setErrorMessage('All Fields are required')
    }
  }
    

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<TodoApp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={
          <Register
            registerUser={registerUser} 
            loader={loader}
            error={error}
            errorMessage={errorMessage}
            profileCretaed={profileCretaed}
          />
        } />
      </Routes>
    </>
  );
}

export default App;
