import React from 'react';
import './courts.css';

function Courts() {
  return (
    <div className="text-align courts">
      <div>
        <span className="courts-paragraph">
          Effort is made to reserve the courts (tennis courts 2 and 3, which each contain 2 - 4 pickleball courts) in
          the late afternoon or evening on weekdays and in the morning on weekends. Current court reservation permits
          and the latest Blanchet tennis schedule can be found{' '}
          <a
            className="link-text"
            href="https://drive.google.com/drive/u/0/folders/17atkdryveJU4fLiJWCtox3goY5yl8DFu"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </span>
      </div>
      <div className="schedule-container">
        <h2>Blanchet High School Tennis Practice and Match Schedule</h2>
        <img className="schedule" src="images/schedule/blanchet-tennis.png" alt="BHS Tennis Schedule"></img>
      </div>
    </div>
  );
}

export default Courts;
