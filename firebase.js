import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDgdLNslg8NDvLvZx3rSp4kRX-E1CIQ8k",
  authDomain: "signal-clone-8790f.firebaseapp.com",
  projectId: "signal-clone-8790f",
  storageBucket: "signal-clone-8790f.appspot.com",
  messagingSenderId: "138037168305",
  appId: "1:138037168305:web:76b74288c2d467e923ba90",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
