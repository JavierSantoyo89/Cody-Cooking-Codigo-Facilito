// import 'dotenv/config'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,

  // apiKey: "AIzaSyAj-bGck8gnvJa3G63v08stCv4lH6OiX80",
  // authDomain: "portfolio-63f7d.firebaseapp.com",
  // projectId: "portfolio-63f7d",
  // storageBucket: "portfolio-63f7d.appspot.com",
  // messagingSenderId: "959063440093",
  // appId: "1:959063440093:web:079cf6796776d47f9f3934",
  // measurementId: "G-ZBKTVMJFNW"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
// const analytics = getAnalytics(app);

export default firebaseApp;
