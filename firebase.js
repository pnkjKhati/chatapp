// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvHE5bpFtGJFv0sRSWDxekGtmMUoKUJ-M",
  authDomain: "gifted-chatt-app.firebaseapp.com",
  projectId: "gifted-chatt-app",
  storageBucket: "gifted-chatt-app.appspot.com",
  messagingSenderId: "984046418432",
  appId: "1:984046418432:web:cd0be7fefcef1d3060f6e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };