// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_BKU1snISApsBL56caNoUU532R3uvDYc",
  authDomain: "fooddeliveryapp-fb334.firebaseapp.com",
  projectId: "fooddeliveryapp-fb334",
  storageBucket: "fooddeliveryapp-fb334.appspot.com",
  messagingSenderId: "709365475857",
  appId: "1:709365475857:web:d7ab2798e720d2d412dfb0",
  measurementId: "G-GX5G2GE1LQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("PPPPPPPPTTTTT  ", app);
export const auth = getAuth(app);
