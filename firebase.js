
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWik1tkLmPo9boHFD59SSKZwqBXrlIfuI",
  authDomain: "inventory-managment-57ce2.firebaseapp.com",
  projectId: "inventory-managment-57ce2",
  storageBucket: "inventory-managment-57ce2.appspot.com",
  messagingSenderId: "231821957633",
  appId: "1:231821957633:web:89a08625f42346f82d7e00",
  measurementId: "G-H88PQKVS7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export{firestore}
