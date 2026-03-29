"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIxAbozlYw1Jhx-xmwO5odk0lrOcKo-yM",
  authDomain: "torido-store.firebaseapp.com",
  projectId: "torido-store",
  storageBucket: "torido-store.appspot.com",
  messagingSenderId: "515858093895",
  appId: "1:515858093895:web:34ee07ee73f53a86a05e62",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);