// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzEd3S1Z2_Ee_W7eKS6w35b9L5kmEt-M0",
  authDomain: "journal-app-638ed.firebaseapp.com",
  projectId: "journal-app-638ed",
  storageBucket: "journal-app-638ed.appspot.com",
  messagingSenderId: "649130048061",
  appId: "1:649130048061:web:1eed1548711aa0cac80854"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
