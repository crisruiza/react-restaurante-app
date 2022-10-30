// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3gui6K8vsW6vjUzl76bxtLAeO_OaUb5Q",
  authDomain: "fb-restaurant-crisruiza.firebaseapp.com",
  projectId: "fb-restaurant-crisruiza",
  storageBucket: "fb-restaurant-crisruiza.appspot.com",
  messagingSenderId: "760597067880",
  appId: "1:760597067880:web:c25403c60970ed25ff23dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
