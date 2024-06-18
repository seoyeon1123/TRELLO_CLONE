// firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCfyu4kxlka9GUMHFd57w-NUqh-3__O2xk',
  authDomain: 'fir-login-ceae0.firebaseapp.com',
  projectId: 'fir-login-ceae0',
  storageBucket: 'fir-login-ceae0.appspot.com',
  messagingSenderId: '146389013194',
  appId: '1:146389013194:web:0a51c6ee32ec52120c1a33',
  measurementId: 'G-B3RY3H6YJZ',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
export const authService = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
