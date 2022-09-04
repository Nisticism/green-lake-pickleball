import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-links-container">
        <div className="column-wrapper">
          <span className="footer-text">Navigation</span>
          <hr/>
          <div className="multi-column">
            <div className="links-column">
              <ul>
                <li>
                  <Link className="footer-link" to="/home">Home</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/courts">The courts</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/photos">Photos</Link>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <ul>
                <li>
                  <Link className="footer-link" to="/about">About</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/webcam">Webcam</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column-wrapper">
          <span className="footer-text">Useful links</span>
          <hr/>
          <div className="multi-column">
            <div className="links-column">
              <ul>
                <li>
                  <a className="footer-link" href="https://goo.gl/maps/YsSC3hL1JNjBea8t9" target="_blank" rel="noreferrer">Location</a>
                </li>
                <li>
                  <a className="footer-link" href="https://www.pickleballtournaments.com/pbt_tlisting.pl?when=F&selstate=WA&selsanctioning=&selnettype=&openregonly=false&ssipaFilter=false&aauFilter=false" target="_blank" rel="noreferrer">Nearby tournaments</a>
                </li>
                <li>
                  <a className="footer-link" href="https://seattlemetropickleball.com/" target="_blank" rel="noreferrer">SMPA</a>
                </li>
                <li>
                  <a className="footer-link" href="/home#player-donations">Donate</a>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <ul>
                <li>
                  <a className="footer-link" href="/home#join-glp">Join GLP</a>
                </li>
                <li>
                  <a className="footer-link" href="https://drive.google.com/drive/u/0/folders/17atkdryveJU4fLiJWCtox3goY5yl8DFu" target="_blank" rel="noreferrer">Reservations</a>
                </li>
                <li>
                  <a className="footer-link" href="https://github.com/Nisticism/green-lake-pickleball" target="_blank" rel="noreferrer">Source code</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column-wrapper">
          <span className="footer-text">Contact</span>
          <hr/>
          <div className="multi-column">
            <div className="links-column">
              <ul>
                <li>
                  <Link className="footer-link" to="/contact">Contact form</Link>
                </li>
                <li>
                  <a className="footer-link" href="mailto:pseitel@seitelsystems.com" target="_blank" rel="noreferrer">pseitel@seitelsystems.com</a>
                </li>
                <li>
                  <a className="footer-link" href="mailto:pickle.karate.pickle@gmail.com" target="_blank" rel="noreferrer">pickle.karate.pickle@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer