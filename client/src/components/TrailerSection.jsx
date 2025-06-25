import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCicle from './BlurCicle';
import './TrailerSection.css'; // Make sure to import your CSS
import { PlayCircle, PlayCircleIcon } from 'lucide-react';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="trailer-section">
      <p className="p-trailer">Trailers</p>

      <div className="first-trailer-div">
        <BlurCicle top="-100px" right="-100px" />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={false}
          className="react-player"
          width="960px"
          height="540px"
        />
      </div>

      <div className='short-vids'>
        {dummyTrailers.map((trailer)=>(
            <div key={trailer.image} className='div-map' onClick={()=>
            setCurrentTrailer(trailer)}>
                <img src={trailer.image} alt="trailer" className='trailer-img'/>
                <PlayCircleIcon strokeWidth={1.6} className='trailer-icons'/>
            </div>
        ))}

      </div>
    </div>
  );
};

export default TrailerSection;
