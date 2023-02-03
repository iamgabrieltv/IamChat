import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
var firebaseConfig = {
 apiKey: "AIzaSyBaZrxnM2rZ28ViSoKIAoUe-Y3yOpzY4hw",
 authDomain: "gs-chat-f17ab.firebaseapp.com",
 projectId: "gs-chat-f17ab",
 storageBucket: "gs-chat-f17ab.appspot.com",
 messagingSenderId: "1037835110407",
 appId: "1:1037835110407:web:910a4f9e39e1d9494dc2a2"
};

const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const popup = signInWithPopup;
export const auth = getAuth();

export const db = getFirestore(app);