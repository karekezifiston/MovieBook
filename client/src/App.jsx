import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <div className="w-[100%] mx-auto">
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <div className="pt-5"> {/* Offset for fixed Navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/movie/:id/:date' element={<SeatLayout />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </div>
  )
}

export default App
