// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbpQ93mJBtS6mKtyaghPGuD0P8tQt3CO0",
  authDomain: "second-aebc0.firebaseapp.com",
  databaseURL: "https://second-aebc0-default-rtdb.firebaseio.com",
  projectId: "second-aebc0",
  storageBucket: "second-aebc0.appspot.com",
  messagingSenderId: "387247781700",
  appId: "1:387247781700:web:015c46a977a095bd528911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig