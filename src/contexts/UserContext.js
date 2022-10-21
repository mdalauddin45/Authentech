import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  //1. create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //2. Update Name
  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  //3. Email Verify
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //4. Google Sign in Popup
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = { user, createUser, updateName, verifyEmail, googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
