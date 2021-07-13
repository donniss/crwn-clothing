import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4LF-aTSojwn0ATdTf0yv-ZvCC1wQXre8",
    authDomain: "crwn-db-55d06.firebaseapp.com",
    projectId: "crwn-db-55d06",
    storageBucket: "crwn-db-55d06.appspot.com",
    messagingSenderId: "134494156338",
    appId: "1:134494156338:web:f3847e5b9536c09112ee2b",
    measurementId: "G-MHQKP7DVZ0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;