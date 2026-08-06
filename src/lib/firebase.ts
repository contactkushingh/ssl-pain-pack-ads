import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvzHRGBtP6i8vWZW8sg1HghBKone88iv0",
  authDomain: "pain-pack-ads.firebaseapp.com",
  projectId: "pain-pack-ads",
  storageBucket: "pain-pack-ads.firebasestorage.app",
  messagingSenderId: "697067438896",
  appId: "1:697067438896:web:848b23d59f973a4d4efef5",
  measurementId: "G-K7J2CR29MP"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Initialize Analytics conditionally (only in browser environment)
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

export { db };
