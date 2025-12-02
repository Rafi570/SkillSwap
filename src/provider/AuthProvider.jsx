import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingg, setLoadingg] = useState(true);

  // Email/Password Sign Up
  const createUser = (email, password) => {
    setLoadingg(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email/Password Sign In
  const signIn = (email, password) => {
    setLoadingg(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign In
  const signInWithGoogle = () => {
    setLoadingg(true);
    return signInWithPopup(auth, googleProvider);
  };
  const resetPassword = (email) => {
    setLoadingg(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Update User Profile
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // Log Out
  const logOut = () => {
    return signOut(auth);
  };

  // Listen Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingg(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    loadingg,
    createUser,
    updateUser,
    logOut,
    signIn,
    signInWithGoogle,
    setLoadingg,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
