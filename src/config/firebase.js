import { initializeApp } from "@react-native-firebase/app";
import { getFirestore } from "@react-native-firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnEmQjjseWuBAPKlvXQK2gDgDR0rmiJpQ",
    authDomain: "to-do-list-41416.firebaseapp.com",
    projectId: "to-do-list-41416",
    storageBucket: "to-do-list-41416.firebasestorage.app",
    messagingSenderId: "111691320557",
    appId: "1:111691320557:web:43d28687499215deac10e4",
    measurementId: "G-MLGK66JC3N"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);