import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5aDUC7HkUgMujYu6lGQO2dV1p6g6ZheY",
  authDomain: "prepwise-7a450.firebaseapp.com",
  projectId: "prepwise-7a450",
  storageBucket: "prepwise-7a450.firebasestorage.app",
  messagingSenderId: "999116237542",
  appId: "1:999116237542:web:108e128c61d002f72d2927",
  measurementId: "G-GFJY1G9HGB"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
