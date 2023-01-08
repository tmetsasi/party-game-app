// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getFirestore, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfldfjNJNmhMJBg7jrvTpknatYkJJakf4",
  authDomain: "party-game-app-f1835.firebaseapp.com",
  projectId: "party-game-app-f1835",
  storageBucket: "party-game-app-f1835.appspot.com",
  messagingSenderId: "363758306995",
  appId: "1:363758306995:web:d4f744cd583879221292c6",
  measurementId: "G-CD2Z3B9MQ3"
};

const firestore = getFirestore();

const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14')

const docRef = firestore.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
const aTuringRef = db.collection('users').doc('aturing');

await aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

export default function writeDailySpecial() { 
    const docData= { 
        descriop: "fe",
        jotain: false,
        vielalisaa: 3553,
    };
    setDoc(specialOfTheDay, docData, {merge: true});
    console.log("ajetaa funkkarit läpi, vittu jes")
}

const app = initializeApp(firebaseConfig);
