import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQUcblXnIsrWkkIP31HGKwpCC1vWbK1Bw",
  authDomain: "projetodb-1e007.firebaseapp.com",
  projectId: "projetodb-1e007",
  storageBucket: "projetodb-1e007.appspot.com",
  messagingSenderId: "12656947385",
  appId: "1:12656947385:web:aa68d8123a5964ac8dab68"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);