import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyD3sm05f5uhBb1foXOV2voWFd7cH4Dao5w",
  authDomain: "clothes-db-13060.firebaseapp.com",
  projectId: "clothes-db-13060",
  storageBucket: "clothes-db-13060.appspot.com",
  messagingSenderId: "757749655835",
  appId: "1:757749655835:web:f602b9b72ea9c9b4ee4bbe",
  measurementId: "G-VDN6CWWV34",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
