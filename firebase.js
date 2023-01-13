import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfldfjNJNmhMJBg7jrvTpknatYkJJakf4",
  authDomain: "party-game-app-f1835.firebaseapp.com",
  projectId: "party-game-app-f1835",
  storageBucket: "party-game-app-f1835.appspot.com",
  messagingSenderId: "363758306995",
  appId: "1:363758306995:web:d4f744cd583879221292c6",
  measurementId: "G-CD2Z3B9MQ3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}