// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuXW8W4YOkl1lXszQdJACFNxaakXKv3kQ",
  authDomain: "learneracademy-6e80d.firebaseapp.com",
  projectId: "learneracademy-6e80d",
  storageBucket: "learneracademy-6e80d.appspot.com",
  messagingSenderId: "1067750802727",
  appId: "1:1067750802727:web:cf481f6f440b2b96c31502",
  measurementId: "G-Y6NX3D2134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireStore = getFirestore(app);