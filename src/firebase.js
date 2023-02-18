
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCRbZYChOTSO1VcmsOagKK3NejUhwoXx4o",
  authDomain: "geniobits-6d653.firebaseapp.com",
  projectId: "geniobits-6d653",
  storageBucket: "geniobits-6d653.appspot.com",
  messagingSenderId: "7110421340",
  appId: "1:7110421340:web:471f5fcdb554fc8537af99",
  measurementId: "G-3SVH2F4NKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()