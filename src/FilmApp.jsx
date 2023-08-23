import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar';
import { Home } from './containers/Home';
import { AllCinemaList } from './containers/AllCinemaList';

export const FilmApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/all-cinema-list' element={<AllCinemaList />} />
      </Routes>
    </>
  )
}
