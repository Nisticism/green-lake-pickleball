import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';


function getNavClasses(path, route) {
  return(
    ["nav-item", `${path === route ? "nav-item-color-focus" : "nav-item-color"}`].join(" ")
  );
}

const Menu = (props) => (
  <>
    <div className="nav-item-div">
      <Link className={getNavClasses("/courts", props.location.pathname)} to="/courts">The Courts</Link>
    </div>
    <div className="nav-item-div">
      <Link className={getNavClasses("/faq", props.location.pathname)} to="/faq">FAQ</Link>
    </div>
    <div className="nav-item-div">
       <Link className={getNavClasses("/webcam", props.location.pathname)} to="/webcam">Webcam</Link>
    </div>
    <div className="nav-item-div">
      <Link className={getNavClasses("/photos", props.location.pathname)} to="/photos">Photos</Link>
    </div>
    <div className="nav-item-div">
      <Link className={getNavClasses("/about", props.location.pathname)} to="/about">About</Link>
    </div>
  </>
)

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  return (
    <div className="navbar" id="navbar">
      <div className="nav-home">
          <Link className={getNavClasses("/home", location.pathname)} to="/home">Home</Link>
      </div>
      <div className="center-fill">
        <div className="navbar-links-container">
          <Menu location={location}/>
        </div>
      </div>
      <div className="navbar-menu">
        { toggleMenu 
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <Menu location={location}/>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navigation