import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindows } from '../context/windowSizeProvider';
import { useAuth } from '../context/authContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const useNavbar = () => {

  const [registro, setRegistro] = useState();
  const navigate = useNavigate();

  const windowSize = useWindows();
  const { user, logout, usuario } = useAuth();

  const obtenerDatosUsuario = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'usuarios', user.uid);
    try {
      await getDoc(docRef)
        .then((res) => {
          setRegistro(res.data())
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      obtenerDatosUsuario();
    }
  }, [user]);

  const handleLogout = async () => {
    setRegistro()
    try {
      await logout();
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return {
    windowSize,
    handleLogout,
    user
  }
}
