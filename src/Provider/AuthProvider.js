"use client"

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import app from "../utils/firebase";

// import useAxiosPublic from "../Hooks/useAxiosPublic.jsx";
export const AuthContext = createContext(null)

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);

    const [loading , setLoading]= useState(true)
    // const axiosPublic = useAxiosPublic();


    const createUser =(email, password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const signIn = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    
    const provider = new GoogleAuthProvider();


    const googleRegister = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        googleRegister,
        googleSignIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;