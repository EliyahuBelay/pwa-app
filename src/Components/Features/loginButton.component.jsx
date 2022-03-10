import React, { useContext } from "react";
import { FirebaseContext } from "../../Contex/firebaseContex";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";



function LoginButton() {
    const { user,auth } = useContext(FirebaseContext);
    // console.log(auth);
    const signInWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider);
        // const provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('profile');
        // provider.addScope('email');
        // firebase.auth().signInWithPopup(provider)
    }
    return (
        <>
        {user?.displayName}
        <button onClick={signInWithGoogle}>Login With Google Account</button>
        
        </>
        )
    }

    export default LoginButton;