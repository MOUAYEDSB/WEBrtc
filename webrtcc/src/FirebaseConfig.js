import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6XbRyncbP6vfWvI_KnjmsYymfglYX2ps",
  authDomain: "chat-room-f4ccd.firebaseapp.com",
  databaseURL: "https://chat-room-f4ccd-default-rtdb.firebaseio.com",
  projectId: "chat-room-f4ccd",
  storageBucket: "chat-room-f4ccd.appspot.com",
  messagingSenderId: "853230702286",
  appId: "1:853230702286:web:37141c255ffc715f6d0a9f",
  measurementId: "G-BHG2DNMEW1"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app); // Call getAuth to get the authentication instance

export { firestore, auth, app };
