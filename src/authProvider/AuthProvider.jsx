/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/forebase.config";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const axiosPublic = useAxiosPublic();

  // create user

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user

  const updateUser = (name, photoUrl) => {
    setLoading(true)
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // sign in with email and password

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google signIn

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //   github signIn

  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  // twitter signIN

  const twitterSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, twitterProvider);
  };

  //   facebook signIn

  const facebookSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider);
  };

  // logOut User

  const logOut = () => {
    setLoading(true)
    axiosPublic.get('/logout', {
      withCredentials:true
    })
    return signOut(auth);
  };

  // reset password

  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };

  //   manage user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const userInfo = { email: user?.email };
        const res = await axiosPublic.post(
          "/jwt",
          userInfo,{
            withCredentials:true
          }
        );
        console.log(res.data);
      }

      setLoading(false);
      console.log("user is: ", user);
    });

    return () => unSubscribe();
  }, [axiosPublic]);

  const info = {
    user,
    loading,
    createUser,
    signInUser,
    updateUser,
    googleSignIn,
    githubSignIn,
    twitterSignIn,
    facebookSignIn,
    logOut,
    resetPassword,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
