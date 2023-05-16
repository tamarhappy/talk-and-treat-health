import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBjLZMe0VDVVXcACB6u2bJRkCLWOqE9k3A",
  authDomain: "talk-treat-project.firebaseapp.com",
  projectId: "talk-treat-project",
  storageBucket: "talk-treat-project.appspot.com",
  messagingSenderId: "275399713144",
  appId: "1:275399713144:web:528ad9df007afc575a288d",
  measurementId: "G-BE84CM5PCK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};