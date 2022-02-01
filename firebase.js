import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCw_xz_Ox65UTCGZl84F3xpIFzXiI4xKV8",
    authDomain: "history-app-422.firebaseapp.com",
    databaseURL: "https://history-app-422.firebaseio.com",
    projectId: "history-app-422",
    storageBucket: "history-app-422.appspot.com",
    messagingSenderId: "1079917112725",
    appId: "1:1079917112725:web:8f3dd9a1538b18dfb81a9c",
    measurementId: "G-KS99J27HRC"
});

export const db = getFirestore(firebaseConfig);
