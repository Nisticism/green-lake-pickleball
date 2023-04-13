import React from 'react';
import './courts.css';

function Courts() {
  return (
    <div className="text-align courts">
      <div>
        <span className="courts-paragraph">
          Effort is made to reserve the courts (tennis courts 2 and 3, which each contain 2 - 4 pickleball courts) in
          the late afternoon or evening on weekdays and in the morning on weekends. The reservations for the courts are
          uploaded regularly and can be viewed{' '}
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
        <img
          className="schedule"
          src="images/schedule/0-key.png"
          alt="Blanchet High School Tennis Practice and Match Schedule Key"
        ></img>
        <h2>April 2023</h2>
        <img className="schedule" src="images/schedule/4-2023.png" alt="April Schedule"></img>
        <h2>May 2023</h2>
        <img className="schedule" src="images/schedule/5-2023.png" alt="May Schedule"></img>
      </div>
    </div>
  );
}

export default Courts;
