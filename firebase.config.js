// Importar funções necessárias do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAeo5YyyD3yrFlM8JAEc6LYD3WEZBqRL9A",
  authDomain: "remenu-7812b.firebaseapp.com",
  projectId: "remenu-7812b",
  storageBucket: "remenu-7812b.firebasestorage.app",
  messagingSenderId: "124961308828",
  appId: "1:124961308828:web:1f76bee282ac065e41ed59",
  measurementId: "G-PVFB9TT54V"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa serviços importantes
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para usar em outros arquivos
export { auth, db };