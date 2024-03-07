import { createContext, useEffect, useState } from "react";
import app from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const createUserWithEmailPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (loggedUser) => {
        if(loggedUser){
            setUser(loggedUser)
        }
      });
      return ()=>{
       unSubscribe();
      }
  },[])

  const authShare = {
    createUserWithEmailPass,
    signInWithEP,
    user
  };

  return (
    <AuthContext.Provider value={authShare}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
