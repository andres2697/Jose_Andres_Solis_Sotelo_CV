import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Configura tu proyecto de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_APP_API_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_APP_API_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_APP_API_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_APP_API_MESSAGING_SENDER_ID_FIREBASE,
  appId: import.meta.env.VITE_APP_API_APP_ID_FIREBASE,
  measurementId: import.meta.env.VITE_APP_API_MEASUREMENT_ID_FIREBASE
}

// Inicializa la aplicación de Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Exporta una instancia de Firebase Storage
export const storage = getStorage(firebaseApp);