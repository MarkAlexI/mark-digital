import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-check.js";

const firebaseConfig = {
  apiKey: "AIzaSyCt_ZvIhecwQIhSqdUXNtsAv1McLrT6EzM",
  authDomain: "mark-digital-d9683.firebaseapp.com",
  projectId: "mark-digital-d9683",
  storageBucket: "mark-digital-d9683.appspot.com",
  messagingSenderId: "402468369417",
  appId: "1:402468369417:web:cc3e4f31736bef2c23f4d8",
  measurementId: "G-WXNS81HE2W"
};

// Initialize Firebase
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);

const appCheck = initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider('6LeJ_iEqAAAAAO1tdIYUale--bBlYno_hwYtCcn9'),
  isTokenAutoRefreshEnabled: true
});

export { getAnalytics, firebase, db, addDoc, collection, serverTimestamp };