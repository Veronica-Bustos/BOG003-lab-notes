import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwk1INOPdwde_tNWNBzwhzrW5X-yYrI6Y",
    authDomain: "notas-app-ad942.firebaseapp.com",
    projectId: "notas-app-ad942",
    storageBucket: "notas-app-ad942.appspot.com",
    messagingSenderId: "166001730149",
    appId: "1:166001730149:web:b3775ab37f5f71bdec9c8c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
