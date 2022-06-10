import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnI0QS6f7bM29ePYDEmxa9eemdJuIpuqY",
    authDomain: "vuetifychat-5dc95.firebaseapp.com",
    projectId: "vuetifychat-5dc95",
    storageBucket: "vuetifychat-5dc95.appspot.com",
    messagingSenderId: "52515863054",
    appId: "1:52515863054:web:dcb406aa99c0bd52675a5f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
