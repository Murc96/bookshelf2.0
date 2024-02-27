import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYstbc6en_3NNXs2A66Ut0fgw-DWSdl9Q",
  authDomain: "bookshelf-2-0-d1771.firebaseapp.com",
  projectId: "bookshelf-2-0-d1771",
  storageBucket: "bookshelf-2-0-d1771.appspot.com",
  messagingSenderId: "882185107202",
  appId: "1:882185107202:web:7a62b693b3b06274e6341b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
