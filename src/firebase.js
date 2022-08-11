import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBA88au0Da4nf4bwJQTk39O5eKQUfF_3QM",
  authDomain: "todo-ec1f1.firebaseapp.com",
  projectId: "todo-ec1f1",
  storageBucket: "todo-ec1f1.appspot.com",
  messagingSenderId: "1095355316683",
  appId: "1:1095355316683:web:c47418437c0f2184ef5e4e",
  measurementId: "G-R3G5B552BC",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
