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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;