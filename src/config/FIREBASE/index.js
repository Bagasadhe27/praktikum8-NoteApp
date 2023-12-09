import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCBeDE6wdGbwTq2MN2Vl_xl_VuCySgCIzk",
    authDomain: "bagasadhe-f63ce.firebaseapp.com",
    projectId: "bagasadhe-f63ce",
    storageBucket: "bagasadhe-f63ce.appspot.com",
    messagingSenderId: "455358474308",
    appId: "1:455358474308:web:fc12dfdd5b5017318e3411"  
});

const FIREBASE = firebase;

export default FIREBASE;