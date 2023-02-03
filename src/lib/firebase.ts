import firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
 apiKey: "AIzaSyBaZrxnM2rZ28ViSoKIAoUe-Y3yOpzY4hw",
 authDomain: "gs-chat-f17ab.firebaseapp.com",
 projectId: "gs-chat-f17ab",
 storageBucket: "gs-chat-f17ab.appspot.com",
 messagingSenderId: "1037835110407",
 appId: "1:1037835110407:web:910a4f9e39e1d9494dc2a2"
};

firebase.initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const popup = signInWithPopup;
export const auth = getAuth();

export const db = firebase.firestore;