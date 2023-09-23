import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from './useWindowSize';
import { useAuth } from '../context/authContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const useNavbar = () => {

  const [registro, setRegistro] = useState();
  const navigate = useNavigate();

  const size = useWindowSize();
  const { user, logout } = useAuth();

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
    size,
    handleLogout,
    user
  }
}
