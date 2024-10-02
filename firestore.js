import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOI00VSXRHb9WkijSxM5KqkW1TGgrcrQA",
  authDomain: "firetasks-612b3.firebaseapp.com",
  projectId: "firetasks-612b3",
  storageBucket: "firetasks-612b3.appspot.com",
  messagingSenderId: "1074895767976",
  appId: "1:1074895767976:web:3616fb78ca23403022359d"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);