import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhnVflxj1dyGLovm1WFcJdd4AptVNmVuk",
  authDomain: "clone-react-9f042.firebaseapp.com",
  databaseURL: "https://clone-react-9f042.firebaseio.com",
  projectId: "clone-react-9f042",
  storageBucket: "clone-react-9f042.appspot.com",
  messagingSenderId: "668420722008",
  appId: "1:668420722008:web:5c3e6e2c41ebc50d2b692d",
  measurementId: "G-HLXFB129ST",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
