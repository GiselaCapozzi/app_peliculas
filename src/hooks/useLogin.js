import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validEmail } from "../constants/validations";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    error: '',
    message: ''
  });
  const [infouser, setInfouser] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log(infouser)
  }, [infouser])

  const {
    login,
    setLoading,
    loading,
    user,
    loginWithGoogle,
    loginWithFacebook,
    loginAnonymous,
    resetPassword
  } = useAuth();

  const notifySuccess = () => {
    toast.success('Inicio de sesion exitoso!!!', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const notyfyInfo = () => {
    toast.info('Sera redirigido a la sección de registro'), {
      position: toast.POSITION.TOP_CENTER
    }
  }

  const navigateToHome = () => {
    const time = 4000;
    notifySuccess()
    setTimeout(() => {
      navigate('/')
    }, time)
  }

  const handleChange = ({ target: { name, value } }) => {
    setLoading(false)
    
    setInfouser({
      ...infouser,
      [name]: value
    })
    console.log(infouser)
    if (name === 'email' && !validEmail.test(infouser.email)) {
      setError({
        message: 'No es un email válido',
        error: 'No es un email válido'
      })
    } else {
      setError({
        error: '',
        message: ''
      })
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError({
        error: '',
        message: ''
      })
      setLoading(true)
      await login(infouser.email, infouser.password);
      navigateToHome();
    } catch (error) {
      console.log(error.message)
      if (e.target[1].value === '' || error.message === 'Firebase: Error (auth/missing-password).') {
        setError({
          error: 'La contraseña no puede estar vacía',
          message: 'Firebase: Error (auth/missing-password).'
        })
      } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
        setError({
          error: 'La contraseña no es correcta',
          message: 'Firebase: Error (auth/wrong-password).'
        })
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setError({
          error: 'El email es inválido',
          message: 'Firebase: Error (auth/invalid-email).'
        })
      } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
        setError({
          error: 'El usuario no se encuntra registrado, será redirigido a la sección de registro',
          message: 'Firebase: Error (auth/user-not-found).'
        })
        notyfyInfo();
        setTimeout(() => {
          navigate('/register')
        }, 6000)
      } else {
        setError({
          error: '',
          message: ''
        })
        setLoading(false)
      }
    }
  }

  const loginWithSocialNetwork = async (name) => {
    switch (name) {
      case 'google':
        await loginWithGoogle();
        navigateToHome();
        break;
      case 'facebook':
        await loginWithFacebook();
        navigateToHome();
        break;
      case 'anonymous':
        await loginAnonymous();
        navigateToHome();
        break;
      default:
        return;
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!infouser.email) return setError({
      error: 'No se ingresado email',
      message: 'Por favor ingresa tu email'
    });
    try {
      await resetPassword(infouser.email);
      setError({
        error: 'Enviado de mail',
        message: 'Te hemos enviado un email con un enlace para resetear tu contraseña'
      })
    } catch (error) {
      setError(error.message)
    }
  }

  return {
    handleSubmit,
    handleChange,
    error,
    loading,
    user,
    loginWithSocialNetwork,
    handleResetPassword
  }
}
