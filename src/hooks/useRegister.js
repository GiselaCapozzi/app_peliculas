import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { storage } from "../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { lowerCase, numbers, upperCase, validEmail } from '../constants/validations';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  const { signup } = useAuth();

  const initialValueUser = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    photouser: '',
    username: '',
    admin: false
  }

  const [errorMessage, setErrorMessage] = useState();

  const [user, setUser] = useState(initialValueUser);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(user)
  }, [user, user.password])

  const notifySuccess = () => {
    toast.success('Registro exitoso!!!', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const navigateToHome = () => {
    const time = 4000;
    notifySuccess()
    setTimeout(() => {
      navigate('/')
    }, time)
  }

  const mostrarOcultarPassword = () => {
    setShow(!show)
  }

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value
    })
    if (name === 'email' && !validEmail.test(user.email)) {
      setErrorMessage('No es un email válido')
    } else if (name === 'name' && value === '') {
      setErrorMessage('El nombre no puede estar vacio')
    } 
  }

  const handleChangeImage = async (e) => {
    const storageRef = ref(storage, `photouser/${uuidv4()}`)
    await uploadBytes(storageRef, e.target.files[0])
      .then(snapshot => {
        console.log(snapshot)
      })
    const imageUrl = await getDownloadURL(storageRef);
    console.log(imageUrl)
    setUser({
      ...user,
      photouser: imageUrl
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.name === '') {
      setErrorMessage('El nombre no puede estar vacio')
      return;
    } else if (user.lastname === '') {
      setErrorMessage('El apellido no puede estar vacio')
      return;
    } else if (user.username === '') {
      user.username = `user${uuidv4()}`
    } else if (user.password === '') {
      setErrorMessage('La contraseña no puede estar vacia')
      return;
    } else if (user.email === '') {
      setErrorMessage('El email no puede estar vacio')
      return;
    }

    if (!user.password.match(lowerCase)) {
      setErrorMessage('La contraseña debe tener al menos una letra minúscula')
      return;
    } else {
      setErrorMessage('')
    }
    
    if (user.password.length > 0 && !user.password.match(upperCase)) {
      setErrorMessage('La contraseña debe tener al menos una letra mayúscula')
      return;
    } else {
      setErrorMessage('')
    }
    
    if (user.password.length > 0 && !user.password.match(numbers)) {
      setErrorMessage('La contraseña debe tener al menos un número')
      return;
    } else {
      setErrorMessage('')
    }
    
    if (user.password.length > 0 && user.password.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 carácteres')
      return
    } else {
      setErrorMessage('')
    }

    try {
      setErrorMessage('')
      await signup(
        user.email,
        user.password,
        user.name,
        user.lastname,
        user.photouser,
        user.username,
        user.admin
      )
      navigateToHome()
    } catch (error) {
      if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        setErrorMessage('La contraseña debe tener al menos 6 caracteres')
        return;
      } else if (user.password === '' || error.message === 'Firebase: Error (auth/missing-password).') {
        setErrorMessage('La contraseña no puede estar vacia')
        return;
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setErrorMessage('El email no puede estar vacio')
        return;
      } else if (errorMessage !== '') {
        console.log('Todavia hay verificaciones')
        return;
      } 
      else {
        setErrorMessage('')
      }
    }
  }

  return {
    handleChange,
    handleChangeImage,
    handleSubmit,
    user,
    errorMessage,
    mostrarOcultarPassword,
    show
  }
}
