import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar';
import { Home } from './containers/Home';
import { AllCinemaList } from './containers/AllCinemaList';
import { Details } from './containers/Details';

export const FilmApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/all-cinema-list' element={<AllCinemaList />} />
        <Route path='/details/:title' element={<Details />} />
      </Routes>
    </>
  )
}
