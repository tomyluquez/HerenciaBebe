// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSgimPGru4jP_nmcluJLH-TL0sSB4ao1I",
  authDomain: "herencia-ba784.firebaseapp.com",
  projectId: "herencia-ba784",
  storageBucket: "herencia-ba784.appspot.com",
  messagingSenderId: "423448734982",
  appId: "1:423448734982:web:2e48ae4f985023fbb94287",
  measurementId: "G-LR21M5BZ9J",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
