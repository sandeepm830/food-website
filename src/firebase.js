// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCpXY6cpHbf6wtJyDO2qrmEKxgTH-dBxo",
  authDomain: "food-delivery-app-b214a.firebaseapp.com",
  projectId: "food-delivery-app-b214a",
  storageBucket: "food-delivery-app-b214a.firebasestorage.app",
  messagingSenderId: "235025343521",
  appId: "1:235025343521:web:7d1a84f69b2781ccd2af60",
  measurementId: "G-YEYJKXTV69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("Firebase initialized sucessfully");