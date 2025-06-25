import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './FeatureSection.css'
import BlurCicle from './BlurCicle'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const FeatureSection = () => {
    const navigate= useNavigate()
  return (
    <div className='feature-section'>

      <div className='feature-first-div'>
        <BlurCicle top='0' right='-80px'/>
        <p className='p-show'>Now Showing</p>
        <button onClick={()=>navigate('/movies')} className='feature-btn'>
            View All
             <ArrowRight className='group-hover:translate-x-0.5
        transition w-4.5 h-4.5'/></button>
      </div>

      <div className='card-show'>
        {dummyShowsData.slice(0,4).map((show)=>(
          <MovieCard key={show._id} movie={show}/>
        ))}
      </div>
       
      <div className='last-div'>
       <button onClick={()=>{navigate('/movies'); scrollTo(0,0)}} className='last-div-btn'>View more</button>
      </div>
    </div>
  )
}

export default FeatureSection
