import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            const analytics = getAnalytics(app);
            logEvent(analytics, 'notification_received');
        } else {
            console.log("Firebase Analytics is not supported in this environment.");
        }
    }).catch((error) => {
        console.error("Error checking Firebase Analytics support:", error);
    });
}