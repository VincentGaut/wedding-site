import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBP7tnV9ThxgFLw93sgzIztNlo5EbyOHJI",
    authDomain: "guest-db.firebaseapp.com",
    projectId: "guest-db",
    storageBucket: "guest-db.appspot.com",
    messagingSenderId: "437112395297",
    appId: "1:437112395297:web:e4c38f3bfddff675c47560",
    measurementId: "G-Z54R65HTX5"
  }
  
  if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  }

export default firebase


