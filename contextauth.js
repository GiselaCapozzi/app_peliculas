import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  signInAnonymously
} from 'firebase/auth';
import { auth, app } from '../firebase/firebaseConfig';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay un proveedor de autentificación')
  return context;
}

export function AuthProvider({ children, checked }) {
  const firestore = getFirestore(app)
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState();

  const obtenerDatosUsuario = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'usuarios', user.uid);
    try {
      await getDoc(docRef)
        .then((res) => {
          setUsuario(res.data())
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) obtenerDatosUsuario();
  }, [user]);

  const signup = async (email, password, name, lastname, photouser, username, admin) => {
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password, name, lastname, photouser, username)
      .then((usuarioFirebase) => {
        return usuarioFirebase;
      });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, {
      email: email,
      username: username,
      photouser: photouser,
      admin: admin
    })
  }

  const login = async (email, password) => await signInWithEmailAndPassword(auth, email, password)

  const logout = async () => await signOut(auth)

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    return await signInWithPopup(auth, googleProvider)
  }

  const loginWithFacebook = async () => {
    const facebookProvider = new FacebookAuthProvider();
    return await signInWithPopup(auth, facebookProvider);
  }

  const loginAnonymous = async () => await signInAnonymously(auth)

  const resetPassword = async (email) => await sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  })

const value = { 
  signup, 
  login, 
  user, 
  logout, 
  loginWithGoogle, 
  loginWithFacebook,
  resetPassword,
  loginAnonymous,
  usuario,
  loading,
  setLoading
}

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
