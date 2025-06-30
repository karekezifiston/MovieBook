import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';
import { ArrowUpRightIcon, ClockIcon } from 'lucide-react';
import '../components/SeatLayout.css'; // 👈 make sure you create and import this CSS file
import isoTimeFormat from '../lib/IsoTimeFormat';
import BlurCicle from '../components/BlurCicle';
import toast from 'react-hot-toast';

const SeatLayout = () => {

  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]]

  const { id, date } = useParams();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  }

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast('Please select time first')
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast('You can only select 5 seats')
    }
    setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(seat => seat !==
      seatId) : [...prev, seatId])
  }

  const renderSeats = (row, count = 9) => (
    <div key={row} className='render-seats'>
      <div className='render-seats-div'>
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row} ${i + 1}`;
          return (
            <button key={seatId} onClick={() => handleSeatClick
              (seatId)} className={`render-seats-btn ${selectedSeats.includes(seatId) &&
                "bg-primary text-white"
                }`}>
              {seatId}
            </button>
          )
        })}
      </div>
    </div>
  )



  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="seat-layout-container">
      {/* Available Timings */}
      <div className="timing-box">
        <p className="timing-title">Available Timings</p>
        <div className="timing-list">
          {show.dateTime[date].map((item) => (
            <div
              key={item.time}
              className={`timing-option ${selectedTime?.time === item.time ? 'selected' : ''}`}
              onClick={() => setSelectedTime(item)}
            >
              <ClockIcon className="clock-icon" />
              <p className="time-text">{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seats Layout */}
      <div className="seats-container">
        <BlurCicle top='-100px' left='-100px' />
        <BlurCicle bottom='0px' right='0px' />
        <h1 className='select-title'>Select Your Seat</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className='select-side-p'>SCREEN SIDE</p>

        <div className='div-map-1'>
          <div className='div-map-2'>
            {groupRows[0].map(row => renderSeats(row))}
          </div>

                  <div className='div-last'>
          {groupRows.slice(1).map((group, idx) => (
            <div key={idx}>
              {group.map(row => renderSeats(row))}
            </div>
          ))}
        </div>
        </div>

      <button 
      onClick={()=>navigate('/my-bookings')}
       className='flex items-center gap-1 mt-20 px-10 py-3 text-sm
      bg-primary hover:bg-primary-dull transition rounded-full font-medium
      cursor-pointer active:scale-95'>
        Proceed to Checkout
        <ArrowUpRightIcon strokeWidth={3} className='w-4 h-4'/>
      </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
