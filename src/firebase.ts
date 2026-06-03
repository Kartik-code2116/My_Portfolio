import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD863jnz9ZELFxK5887qg_aThptbY75XF8",
  authDomain: "kartik-portfolio-36461.firebaseapp.com",
  projectId: "kartik-portfolio-36461",
  storageBucket: "kartik-portfolio-36461.firebasestorage.app",
  messagingSenderId: "250776872952",
  appId: "1:250776872952:web:4a7b9cbe08b9bc222e180d",
  measurementId: "G-1VY0GZPH7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export default app;
