import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhDIa9EZcoOWkBqs8ST3k9ofpZ-Eu8ZeM",
    authDomain: "think-piece-22d32.firebaseapp.com",
    databaseURL: "https://think-piece-22d32.firebaseio.com",
    projectId: "think-piece-22d32",
    storageBucket: "think-piece-22d32.appspot.com",
    messagingSenderId: "29133338212",
    appId: "1:29133338212:web:eb4111d4ee260e41"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const signOut = () => auth.signOut();

  firestore.settings({timestampsInSnapshots: true});

  window.firebase = firebase;

  export default firebase;