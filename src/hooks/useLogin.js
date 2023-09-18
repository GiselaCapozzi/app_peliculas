import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => { 
  const navigate = useNavigate();
  const [infouser, setInfouser] = useState({
    email: '',
    password: ''
  })
  const { login } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setInfouser({
      ...infouser,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(infouser.email, infouser.password);
    navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    handleSubmit,
    handleChange
  }
}
