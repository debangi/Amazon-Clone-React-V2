import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3p78XUTxIjgdjTzHaUR_muL5Y1Yhfyh8',
  authDomain: 'clone-v2-709e7.firebaseapp.com',
  projectId: 'clone-v2-709e7',
  storageBucket: 'clone-v2-709e7.appspot.com',
  messagingSenderId: '637885386359',
  appId: '1:637885386359:web:fdf9d407cf26f193000072',
};

const firebaseApp = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();
export const auth = getAuth(firebaseApp);
