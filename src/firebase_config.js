import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvUtM4EgvQFBIc0Ff2rVJcNo05Z_R8yoE",
  authDomain: "react-todo-list-b5ac1.firebaseapp.com",
  projectId: "react-todo-list-b5ac1",
  storageBucket: "react-todo-list-b5ac1.appspot.com",
  messagingSenderId: "642807944092",
  appId: "1:642807944092:web:3d82b3e248e43ab0e66e59"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { db, auth };