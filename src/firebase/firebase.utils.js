import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9-o1UNuK7f7RqhDx36S3Z-EZAh1PhuJo",
    authDomain: "crwn-db-493b4.firebaseapp.com",
    databaseURL: "https://crwn-db-493b4.firebaseio.com",
    projectId: "crwn-db-493b4",
    storageBucket: "crwn-db-493b4.appspot.com",
    messagingSenderId: "918242135989",
    appId: "1:918242135989:web:6c36af9ea6da385d5513fc",
    measurementId: "G-C3M1JNCLP7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;