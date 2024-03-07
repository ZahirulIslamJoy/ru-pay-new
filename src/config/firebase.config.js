import { initializeApp } from "firebase/app";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID

  apiKey: "AIzaSyB4pMMXMW3H_Ek3ToK1HqvZoKlH3z2rmrE",
  authDomain: "ru-pay-f5c0b.firebaseapp.com",
  projectId: "ru-pay-f5c0b",
  storageBucket: "ru-pay-f5c0b.appspot.com",
  messagingSenderId: "25529994546",
  appId: "1:25529994546:web:58e205cde3c7d18b089b2b"
};
const app = initializeApp(firebaseConfig);
export default app;