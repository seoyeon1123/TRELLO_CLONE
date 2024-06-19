import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// Firebase configuration
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
const db = getFirestore(app);
const auth = getAuth(app);

// Function to get current user's UID
const getUserUid = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        reject('User not logged in');
      }
    });
  });
};

// Define type for todos (matches your Recoil state)
type Todos = {
  [boardId: string]: { id: number; text: string; isDelete: boolean }[];
};

// Function to save user's todos to Firestore
const saveTodos = async (userId: string, todos: Todos): Promise<void> => {
  try {
    const userDoc = doc(db, 'users', userId);
    await setDoc(userDoc, { todos });
    console.log('Todos saved to Firestore');
  } catch (error) {
    console.error('Error saving todos to Firestore:', error);
  }
};

// Function to load user's todos from Firestore
const loadTodos = async (userId: string): Promise<Todos> => {
  try {
    const userDoc = doc(db, 'users', userId);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      return docSnap.data().todos as Todos;
    } else {
      console.log('No such document!');
      return {};
    }
  } catch (error) {
    console.error('Error loading todos from Firestore:', error);
    return {};
  }
};

export const authService = auth;
export const googleProvider = new GoogleAuthProvider();
export { db, getUserUid, saveTodos, loadTodos };
