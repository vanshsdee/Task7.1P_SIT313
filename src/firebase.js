// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDti6QvKmryniHjC33NVUEmSvyJ55iSuLk",
    authDomain: "fir-react-ff843.firebaseapp.com",
    projectId: "fir-react-ff843",
    storageBucket: "fir-react-ff843.firebasestorage.app",
    messagingSenderId: "819701572469",
    appId: "1:819701572469:web:e1d8afb376261fcb22293c",
    measurementId: "G-CBGM1LRHQ4"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);