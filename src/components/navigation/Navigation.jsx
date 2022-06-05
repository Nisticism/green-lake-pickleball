import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navigation.css';

const Menu = () => (
  <>
    <p>
      <a className="nav-item" href="#home">Home</a>
    </p>
    <p>
      <a className="nav-item" href="#faq">FAQ</a>
    </p>
    <p>
      <a className="nav-item" href="#funding">Funding</a>
    </p>
    <p>
      <a className="nav-item" href="#contact">Contact</a>
    </p>
    <p>
      <a className="nav-item" href="#court-cam">Court Cam</a>
    </p>
  </>
)

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div class="navbar" id="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
        </div>
        <div className="navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar-menu">
        { toggleMenu 
          ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navigation