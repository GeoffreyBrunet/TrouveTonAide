import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-odhQZNs_tOd6MEFJ3Wbi1CPJ09utQ9k",
  authDomain: "trouve-ton-aide.firebaseapp.com",
  projectId: "trouve-ton-aide",
  storageBucket: "trouve-ton-aide.appspot.com",
  messagingSenderId: "651518299502",
  appId: "1:651518299502:web:27fd17027e1aa7b522457f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database }

