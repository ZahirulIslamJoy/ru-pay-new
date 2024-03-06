import { createContext, useEffect, useState } from "react";
import app from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  const auth = getAuth(app);
  const createUserWithEmailPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignOut=()=>{
    return signOut(auth)
}

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser)
        const email=loggedUser?.email;
        const sendingEmail={email}
        if(loggedUser){
          axios.post(`http://localhost:7000/jwt`,sendingEmail)
              .then(res=>{
                 const token=res.data.token;
                 localStorage.setItem("access-token",token)
                 setLoading(false)
              })
          }
          else{
              localStorage.removeItem("access-token")
              setLoading(false)
          }

      });
      return ()=>{
       unSubscribe();
      }
  },[])

  const authShare = {
    createUserWithEmailPass,
    signInWithEP,
    user,
    loading,
    handleSignOut
  };

  return (
    <AuthContext.Provider value={authShare}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
