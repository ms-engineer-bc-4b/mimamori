// firebaseConfig.ts
import firebase from 'firebase/app';
import 'firebase/auth';
// import  initializeApp, getApps  from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

/* 見守りコピー
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAm1AATpadU76hb9cpCWvbizsjqpi2SBTg",
  //   authDomain: "mimamori-copy.firebaseapp.com",
  //   projectId: "mimamori-copy",
  //   storageBucket: "mimamori-copy.appspot.com",
  //   messagingSenderId: "595025756434",
  //   appId: "1:595025756434:web:241d8e7df202d0b45fb3cb",
  //   measurementId: "G-JZSE1FZ8KL"
  // };
*/

const firebaseConfig = {
  apiKey: "AIzaSyCKE6MIRYKsIiHiXbLzmg2-kC_Asdk2OOo",
  authDomain: "mimamori-40e2d.firebaseapp.com",
  projectId: "mimamori-40e2d",
  storageBucket: "mimamori-40e2d.appspot.com",
  messagingSenderId: "268924022546",
  appId: "1:268924022546:web:b05f3ab2c7192010534dcb",
  measurementId: "G-DE99T039CN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebaseConfig

// Configファイルはどこに書いてもいい


/*
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx',
  projectId: 'xxx',
  storageBucket: 'xxx',
  messagingSenderId: 'xxx',
  appId: 'xxx',
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();

*/ 