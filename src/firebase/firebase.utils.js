import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyD6hZrq6Q4wbdpJKPTiQ1ZU9E4z6L26hVc",
  authDomain: "crwn-db-8ec2d.firebaseapp.com",
  projectId: "crwn-db-8ec2d",
  storageBucket: "crwn-db-8ec2d.appspot.com",
  messagingSenderId: "366060599742",
  appId: "1:366060599742:web:bcdfb37ab7a32a937621ef",
  measurementId: "G-C5CMBTWLX3"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;



