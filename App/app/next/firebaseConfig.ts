// firebaseConfig.ts
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAm1AATpadU76hb9cpCWvbizsjqpi2SBTg",
  authDomain: "mimamori-copy.firebaseapp.com",
  projectId: "mimamori-copy",
  storageBucket: "mimamori-copy.appspot.com",
  messagingSenderId: "595025756434",
  appId: "1:595025756434:web:241d8e7df202d0b45fb3cb",
  measurementId: "G-JZSE1FZ8KL"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebaseConfig

// Configファイルはどこに書いてもいい