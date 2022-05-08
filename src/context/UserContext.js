import { createContext, useState, useEffect } from "react"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase_config"


const userContext = createContext({});

export const useUserContext = () => userContext(userContext)

export const UserContextProvider = ({ children }) => {  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(res => {
      res ? setUser(res) : setUser(null)
      setError('')
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const registerUser = (userName, firstName, lastName, email, password) => {
    setLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`
      })
      }).then(res => {
        console.log(res);
      }).catch(err => {
        setError(err.message)
        console.log(err.message);
      }).finally(() => {
        setLoading(false)
      })

  }

  const login = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  const logOut = () => {
    signOut(auth)
  }

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const contextValue = {
    user,
    loading,
    error,
    registerUser,
    login,
    logOut,
    forgetPassword
  }
  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  )
};

