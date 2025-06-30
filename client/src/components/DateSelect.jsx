import React, { useState } from 'react';
import BlurCicle from './BlurCicle';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './DateSelect.css'; // import the CSS file

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if (!selected) {
      return toast('Please select a date');
    }
    navigate(`/movie/${id}/${selected}`);
    scrollTo(0, 0);
  };

  const isValidDateTime = dateTime && typeof dateTime === 'object' && !Array.isArray(dateTime);

  return (
    <div id="dateSelect" className="date-select-wrapper">
      <div className="date-select-container">
        <BlurCicle top="-100px" left="-100px" />
        <BlurCicle top="100px" right="0px" />

        <div>
          <p className="date-title">Choose Date</p>
          <div className="date-list-row">
            <ChevronLeftIcon width={28} />

            <span className="date-grid">
              {isValidDateTime ? (
                Object.keys(dateTime).map((date) => (
                  <button
                    onClick={() => setSelected(date)}
                    key={date}
                    className={`date-btn ${selected === date ? 'selected' : ''}`}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  </button>
                ))
              ) : (
                <p>No dates available</p>
              )}
            </span>

            <ChevronRightIcon width={28} />
          </div>
        </div>

        <button onClick={onBookHandler} className="book-btn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
