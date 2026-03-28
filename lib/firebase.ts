import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIxAbozlYw1Jhx-xmwO5odk0lrOcKo-yM",
    authDomain: "torido-store.firebaseapp.com",
    projectId: "torido-store",
    storageBucket: "torido-store.firebasestorage.app",
    messagingSenderId: "515858093895",
    appId: "1:515858093895:web:34ee07ee73f53a86a05e62"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);