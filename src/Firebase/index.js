import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {firebaseConfig} from './config';



export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;