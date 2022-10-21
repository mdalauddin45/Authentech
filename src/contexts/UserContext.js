import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();

function UserContext() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  //1. Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Google Signin
  const singinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    createUser,
    singinWithGoogle,
  };
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
}

export default UserContext;
