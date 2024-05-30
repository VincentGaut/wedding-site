import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
  };
  
let app;
  if (firebase.apps.length === 0) {
    app= firebase.initializeApp(firebaseConfig);
  }
  
export const auth = getAuth(app);

export default firebase;


