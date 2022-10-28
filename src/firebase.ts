import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAmT4XXhaqNliLH6tAJ9n52iRmGDl6YZTA',
  authDomain: 'myrp-ebebb.firebaseapp.com',
  projectId: 'myrp-ebebb',
  storageBucket: 'myrp-ebebb.appspot.com',
  messagingSenderId: '1053540044164',
  appId: '1:1053540044164:web:4ff79d307b48f9d1e7a1d1',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
