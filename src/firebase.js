// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGKMMHDVmOffBbHCK66WmvRzyaazW29Ag",
  authDomain: "tiendadebebidassofia.firebaseapp.com",
  projectId: "tiendadebebidassofia",
  storageBucket: "tiendadebebidassofia.appspot.com",
  messagingSenderId: "328293926256",
  appId: "1:328293926256:web:38557e4ab8c2789ef13bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//data base
const db = getFirestore(app)

export default db