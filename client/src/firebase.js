// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-zone-1e0e1.firebaseapp.com",
  projectId: "property-zone-1e0e1",
  storageBucket: "property-zone-1e0e1.appspot.com",
  messagingSenderId: "747153115558",
  appId: "1:747153115558:web:b8e10e9bfbfb9153d4e767"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);