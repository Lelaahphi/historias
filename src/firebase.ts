import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASX5yhZGDLRVyOfcPTYkzjDajWqg5k3fw",
  authDomain: "historias-com-deus.firebaseapp.com",
  projectId: "historias-com-deus",
  storageBucket: "historias-com-deus.appspot.com", // <-- CORRIGIDO AQUI
  messagingSenderId: "1029575763779",
  appId: "1:1029575763779:web:97092721eaa205b483f1f6",
  measurementId: "G-D2BGPQ5GVX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);