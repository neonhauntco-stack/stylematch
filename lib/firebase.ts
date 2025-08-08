import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig={apiKey:process.env.FIREBASE_API_KEY as string,authDomain:process.env.FIREBASE_AUTH_DOMAIN as string,projectId:process.env.FIREBASE_PROJECT_ID as string,storageBucket:process.env.FIREBASE_STORAGE_BUCKET as string,messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID as string,appId:process.env.FIREBASE_APP_ID as string,measurementId:process.env.FIREBASE_MEASUREMENT_ID as string,};
export const app=getApps().length?getApps()[0]:initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const provider=new GoogleAuthProvider();