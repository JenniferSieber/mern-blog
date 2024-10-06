// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-db734.firebaseapp.com",
  projectId: "mern-blog-db734",
  storageBucket: "mern-blog-db734.appspot.com",
  messagingSenderId: "1049735262297",
  appId: "1:1049735262297:web:b6094bb730dc04020ac148"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
