import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2LEbu-Av0mp_hafyaXav7HJgCuXCkUjg",
  authDomain: "think-piece-fem-4e5eb.firebaseapp.com",
  databaseURL: "https://think-piece-fem-4e5eb.firebaseio.com",
  projectId: "think-piece-fem-4e5eb",
  storageBucket: "think-piece-fem-4e5eb.appspot.com",
  messagingSenderId: "416201354761",
  appId: "1:416201354761:web:45bcce3747784ef35192d8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

window.firebase = firebase;

export default firebase;
