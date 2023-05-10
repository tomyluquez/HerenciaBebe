// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const isLocal = process.env.NODE_ENV !== "Production";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = isLocal
  ? {
      apiKey: "AIzaSyDSgimPGru4jP_nmcluJLH-TL0sSB4ao1I",
      authDomain: "herencia-ba784.firebaseapp.com",
      projectId: "herencia-ba784",
      storageBucket: "herencia-ba784.appspot.com",
      messagingSenderId: "423448734982",
      appId: "1:423448734982:web:2e48ae4f985023fbb94287",
      measurementId: "G-LR21M5BZ9J",
    }
  : {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
