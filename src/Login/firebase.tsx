// firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { Todo } from '../atoms';

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

// GoogleAuthProvider instance
const googleProvider = new GoogleAuthProvider();

// Function to get current user's UID
const getUserUid = (): Promise<string | null> => {
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

// Define type for ITodoState
interface ITodoState {
  [boardId: string]: Todo[];
}

// Function to save user's todos to Firestore
const saveTodos = async (userId: string, todos: ITodoState): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, { todos });
    console.log('Todos saved to Firestore');
  } catch (error) {
    console.error('Error saving todos to Firestore:', error);
    throw error;
  }
};

// Function to load user's todos from Firestore
const loadTodos = async (userId: string): Promise<ITodoState> => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userDocRef);

    console.log(docSnap);

    if (docSnap.exists()) {
      return docSnap.data()?.todos || {};
    } else {
      console.log('No such document!');
      return {};
    }
  } catch (error) {
    console.error('Error loading todos from Firestore:', error);
    throw error;
  }
};

// Function to update a specific todo in Firestore
const updateTodo = async (
  userId: string,
  updatedTodos: ITodoState
): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, { todos: updatedTodos });
    console.log('Todo updated in Firestore');
  } catch (error) {
    console.error('Error updating todo in Firestore:', error);
    throw error;
  }
};

// Function to delete a specific todo from Firestore
const deleteTodo = async (
  userId: string,
  updatedTodos: ITodoState
): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, { todos: updatedTodos });
    console.log('Todo deleted from Firestore');
  } catch (error) {
    console.error('Error deleting todo from Firestore:', error);
    throw error;
  }
};

export {
  auth, // Ensure auth is exported
  googleProvider,
  getUserUid,
  saveTodos,
  loadTodos,
  updateTodo,
  deleteTodo,
};
