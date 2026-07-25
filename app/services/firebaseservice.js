import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCViESi-4c9C8fSNiiDRVPnDAA9BTqU86g",
  authDomain: "fairprice-2f8dd.firebaseapp.com",
  projectId: "fairprice-2f8dd",
  storageBucket: "fairprice-2f8dd.firebasestorage.app",
  messagingSenderId: "685899972025",
  appId: "1:685899972025:web:4c12915356f55e9d63ca68",
  measurementId: "G-SNCC0G5M0C",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
