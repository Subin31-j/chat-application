import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkPsZw6mrbSWvLOQoe4oqRCMXkgtd4gIY",
  authDomain: "chat-e56c7.firebaseapp.com",
  projectId: "chat-e56c7",
  storageBucket: "chat-e56c7.firebasestorage.app",
  messagingSenderId: "839244582696",
  appId: "1:839244582696:web:ed5a08fdb10eded6080a1d"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);