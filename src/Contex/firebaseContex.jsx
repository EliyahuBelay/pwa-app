import { createContext, useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import {getAuth} from "firebase/auth";
import "firebase/compat/auth";
import firebaseConfig from "../firebase.js";
import {useAuthState} from 'react-firebase-hooks/auth';



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create an auth firebase object
const firebaseAuth = firebase.auth();

// Create a contex
export const FirebaseContext = createContext();

const FirebaseProvider = ({children})=>{
    // Create firebase user
  const [user] = useAuthState(firebaseAuth);
  
  const [auth,setAuth] = useState(null);
  useEffect(()=>{
    setAuth(firebaseAuth)
  },[])

    return(
        <FirebaseContext.Provider value={{user,auth}}>
            {children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseProvider;



