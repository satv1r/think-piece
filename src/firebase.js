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
export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a referece to the place where a user profile might be
  const userRef = firestore.doc(`/users/${user.uid}`);

  // Go and fetch document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export default firebase;
