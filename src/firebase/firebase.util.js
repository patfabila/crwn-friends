import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBo5fciG91kzI5GdcdpBm_nnyDLrLgoQ9Y",
    authDomain: "crwn-db-4b957.firebaseapp.com",
    projectId: "crwn-db-4b957",
    storageBucket: "crwn-db-4b957.appspot.com",
    messagingSenderId: "490974274855",
    appId: "1:490974274855:web:2f227c083de6700b83f502",
    measurementId: "G-D9MPE3R9FG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(()=>{});

export default firebase;