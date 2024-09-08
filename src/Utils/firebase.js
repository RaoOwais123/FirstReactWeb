import { initializeApp } from "firebase/app";

import {signInWithEmailAndPassword, createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, signOut, onAuthStateChanged,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCXFzDjbJanVONhSwj61FwXGEFBVdGZuEk",
  authDomain: "e-commerce-b81fa.firebaseapp.com",
  projectId: "e-commerce-b81fa",
  storageBucket: "e-commerce-b81fa.appspot.com",
  messagingSenderId: "47384369307",
  appId: "1:47384369307:web:3b95ad187785b9e5430e3e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    app,
    auth
}