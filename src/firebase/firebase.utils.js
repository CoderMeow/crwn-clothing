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
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;



