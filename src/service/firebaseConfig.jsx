// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqD3sI2n3GMkd2trXPMi1uF98lHcnx3Ag",
  authDomain: "project-432219.firebaseapp.com",
  projectId: "project-432219",
  storageBucket: "project-432219.appspot.com",
  messagingSenderId: "152236985790",
  appId: "1:152236985790:web:609aad39c2471077bbbdef",
  measurementId: "G-CKDD9HRSY4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);