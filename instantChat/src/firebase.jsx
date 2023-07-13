import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_oMde1J8jrlbRuCX0tFrrJNbeVOLTcoU",
  authDomain: "chat-app-ff788.firebaseapp.com",
  projectId: "chat-app-ff788",
  storageBucket: "chat-app-ff788.appspot.com",
  messagingSenderId: "389601439289",
  appId: "1:389601439289:web:dc1898b70d9dc5cac567e8",
  measurementId: "G-B190W171T4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)
