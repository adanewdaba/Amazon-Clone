import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTvhzVyEojZ67zIO5a9rvfwPYbhkt3OYY",
  authDomain: "oct-269d5.firebaseapp.com",
  projectId: "oct-269d5",
  storageBucket: "oct-269d5.appspot.com",
  messagingSenderId: "642434977831",
  appId: "1:642434977831:web:d4b1f4d3e76b15dc5fbe02",
  measurementId: "G-R6VDLMKRJP"
};

//Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };






