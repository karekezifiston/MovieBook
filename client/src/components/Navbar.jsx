import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { TicketPlus } from 'lucide-react'

import './Navbar.css'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate =useNavigate()

  const toggleMobileMenu = () => {
    const menu_btn = document.querySelector('.hamburger')
    const mobile_panel = document.querySelector('.Mobile_panel')

    menu_btn.classList.toggle('is-active')
    mobile_panel.classList.toggle('is-active')
  }

  const handleLinkClick = () => {
    toggleMobileMenu(false)
  }

  return (
    <section className="h-wrapper" id="home">
      <div className="Mobile_panel">
        <div className="menu-items">
          <Link onClick={handleLinkClick} className="w" to="/#home">Home</Link>
          <hr className="hrr" />
          <Link onClick={handleLinkClick} className="a" to="/#about">About</Link>
          <hr className="hrr" />
          <Link onClick={handleLinkClick} className="a" to="/#projects">Projects</Link>
          <hr className="hrr" />
          <Link onClick={handleLinkClick} className="a" to="/#services">Services</Link>
          <hr className="hrr" />
          <button className="button-c">
            <Link onClick={handleLinkClick} to="/#contact">Contact</Link>
          </button>
        </div>
      </div>

      <div className="h-container">
        <h3 className="nav_logo">
          <Link className="kg" to="/">
            <img src={assets.logo} width={130} alt="" />
          </Link>
        </h3>

        <div className="menu">
          <div className="hamburger_container">
            <button className="hamburger" onClick={toggleMobileMenu}>
              <div className="bar"></div>
            </button>
          </div>

          <div className="nav-item">
            <Link onClick={handleLinkClick} className="w" to="/">Home</Link>
            <Link onClick={handleLinkClick} className="a" to="/movies">Movies</Link>
            <Link onClick={handleLinkClick} className="a" to="/">Theaters</Link>
            <Link onClick={handleLinkClick} className="a" to="/#projects">Releases</Link>
            <Link onClick={handleLinkClick} className="a" to="/#favorite">Favorites</Link>
            {
              !user ? (
                <button onClick={openSignIn} className="button-c">
                 Login
                </button>
              ) : (
                <UserButton >
                   <UserButton.MenuItems>
                    <UserButton.Action label='My Bookings' labelIcon={<TicketPlus width={15}/>} onClick={()=>navigate('/my-bookings')}/>
                   </UserButton.MenuItems>
                </UserButton>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
