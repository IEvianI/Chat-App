import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-941b1.firebaseapp.com",
  projectId: "reactchat-941b1",
  storageBucket: "reactchat-941b1.appspot.com",
  messagingSenderId: "830330705074",
  appId: "1:830330705074:web:6961310fa6b92fa9e8a5ab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();