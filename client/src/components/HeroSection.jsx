import React from 'react'
import { assets } from '../assets/assets'
import './HeroSection.css'
import { ArrowRight, CalendarIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()
    return (
        <div className="hero-section">
            <div className='all-texts'>
                <img src={assets.marvelLogo} alt="" className="hero-logo" />
                <h1 className="hero-title">Guardians <br />of the Galaxy</h1>
                <div className='short-texts'>
                <div className='ty'>
                    <span>Action | Adventure | Sci-Fi</span>
                </div>
                <div className="hero-meta">
                    <CalendarIcon className="icon" /> 2018
                </div>
                <div className="hero-meta">
                    <CalendarIcon className="icon" /> 2h 8m
                </div>
                </div>
              <p>In a post-apocalyptic world where cities ride on wheels and 
                consume each other to survive, two peaple meet in london and try to stop a 
                conspriracy.
              </p>
              <button className='hero-btn' onClick={()=>navigate('/movies')}>Explore Movies
                <ArrowRight className='w-5 h-5'/>
              </button>
            </div>

        </div>
    )
}

export default HeroSection
