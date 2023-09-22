import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth, app } from '../firebase/firebaseConfig';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay un proveedor de autentificación')
  return context;
}

export function AuthProvider({ children }) {
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
    if (user){
      obtenerDatosUsuario();
    }
  }, [user]);

  const signup = async (email, password, name, lastname, photouser, username, admin) => {
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password, name, lastname, photouser, username)
      .then((usuarioFirebase) => {
        return usuarioFirebase;
      });
      
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, {
      email,
      name,
      lastname,
      username,
      photouser,
      admin
    })
  }

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
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
    resetPassword, 
    usuario,
    setUsuario
  }
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
