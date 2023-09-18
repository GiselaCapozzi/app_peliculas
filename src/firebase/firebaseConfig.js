import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB_yETwKOIDBIdEq_Jb0vlORIJ07ZGEZwg",
  authDomain: "app-peliculas-cdb46.firebaseapp.com",
  projectId: "app-peliculas-cdb46",
  storageBucket: "app-peliculas-cdb46.appspot.com",
  messagingSenderId: "307059760732",
  appId: "1:307059760732:web:b525d61cbfe18c61949099"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);