import React from 'react';

export const JournalEntry = () => {
  return (
      <div className="journal__entry pointer">
          
          <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://img.remediosdigitales.com/e4f300/porsche-911-turbo-s-2021_15/450_1000.jpg)'

            }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-tittle">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>

            </div>

      </div>
  )
};
