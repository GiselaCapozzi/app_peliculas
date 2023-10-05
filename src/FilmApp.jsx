import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar';
import { Home } from './containers/Home';
import { AllCinemaList } from './containers/AllCinemaList';
import { Details } from './containers/Details';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { AuthProvider } from './context/authContext';
import { SizeWindowProvider } from './context/windowSizeProvider';
import { Search } from './containers/Search';

export const FilmApp = () => {
  return (
    <>
      <AuthProvider>
        <SizeWindowProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all-cinema-list' element={<AllCinemaList />} />
            <Route path='/details/:title/:id' element={<Details />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </SizeWindowProvider>
      </AuthProvider>
    </>
  )
}
