// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: 'https://picture-gallery-412311-default-rtdb.firebaseio.com/',
  apiKey: "AIzaSyCINbs1Ub1BGpEz94DhHoHanEtIGCn4sHI",
  authDomain: "picture-gallery-412311.firebaseapp.com",
  projectId: "picture-gallery-412311",
  storageBucket: "picture-gallery-412311.appspot.com",
  messagingSenderId: "464104097103",
  appId: "1:464104097103:web:acba51bfaf67615801f13a",
  measurementId: "G-K4RK27EE5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export default app;