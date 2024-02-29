/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import Auth from '../network/auth';
import { auth } from '../utils/firebase';

const AuthContext = createContext()

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = async ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const register = async (email, password) => {
    return await Auth.register({
      email: email,
      password: password
    })
  }

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscriber
  }, [])
  

  const value = {
    currentUser,
    register
  }

  return ( 
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider }
 