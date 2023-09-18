import { useState } from "react";
import { useAuth } from "../context/authContext";
import { storage } from "../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

export const useRegister = () => {

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

  const [user, setUser] = useState(initialValueUser);

  const handleChange = async ({ target: { name, value } }) => {
      setUser({
        ...user,
        [name]: value
      })
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
    console.log(user)
    try {
      await signup(
        user.email,
        user.password,
        user.name,
        user.lastname,
        user.photouser,
        user.username,
        user.admin
      )
      console.log('registrado')
    } catch (error) {
      console.log(error.message)
    }
  }

  return {
    handleChange,
    handleChangeImage,
    handleSubmit,
    user
  }
}
