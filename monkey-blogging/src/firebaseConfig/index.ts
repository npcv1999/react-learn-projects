// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB4-QbTh7FGNaY4-2hbESj7TrvjAiq5Rss",
  authDomain: "monkey-blogging-9bd2f.firebaseapp.com",
  projectId: "monkey-blogging-9bd2f",
  storageBucket: "monkey-blogging-9bd2f.appspot.com",
  messagingSenderId: "208980377634",
  appId: "1:208980377634:web:3be65214209fa497e00a7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
