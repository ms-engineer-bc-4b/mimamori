// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKE6MIRYKsIiHiXbLzmg2-kC_Asdk2OOo",
  authDomain: "mimamori-40e2d.firebaseapp.com",
  projectId: "mimamori-40e2d",
  storageBucket: "mimamori-40e2d.appspot.com",
  messagingSenderId: "268924022546",
  appId: "1:268924022546:web:b05f3ab2c7192010534dcb",
  measurementId: "G-DE99T039CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
