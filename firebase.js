// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa1Mzvk95X0KEvRF-kfpweVyc9CccZ0Y0",
  authDomain: "instagram-2-be47a.firebaseapp.com",
  projectId: "instagram-2-be47a",
  storageBucket: "instagram-2-be47a.appspot.com",
  messagingSenderId: "31858544986",
  appId: "1:31858544986:web:ec379eb90e03b98ed12363"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };