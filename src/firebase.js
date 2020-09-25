import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5ZYx6SHsDtxsRf4XDBUfu_NH30KE5Bwc",
  authDomain: "instagram-clone-b0540.firebaseapp.com",
  databaseURL: "https://instagram-clone-b0540.firebaseio.com",
  projectId: "instagram-clone-b0540",
  storageBucket: "instagram-clone-b0540.appspot.com",
  messagingSenderId: "410785943314",
  appId: "1:410785943314:web:8b5c988c181e22d2b1adcb",
  measurementId: "G-J6MW1DLHKG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
