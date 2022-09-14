import React from 'react'
import './about.css';


function About() {
  return (
    <div className="text-align">
      {/* <h2 className="about-section-heading">History</h2>
      <div className="about-section">

      </div>
      <hr className="about-hr"/> */}
      {/* <h2 className="about-section-heading">Advocacy</h2>
      <div className="about-section">

      </div>
      <hr /> */}
      <h2 className="about-section-heading">Organization</h2>
      <div className="about-section">
        <span className="about-text">        Peter Seitel is the unofficial “Mayor of Green Lake Pickleball” and is passionate about nurturing the pickleball 
        community at the Green Lake East courts.  Peter is responsible for making court reservations, ordering equipment, 
        managing court lines, and making sure everyone is having a good time.
        </span>
        <span className="about-text">        Nicole Bideganeta is Peter’s “Chief of Staff” (HB) and helps Peter keep everything organized.
        </span>
        <span className="about-text">        Dave Kwok is the “Administrative Attache” and helps Peter with various administrative and communication tasks.
        </span>
        <h4>Court Ambassadors</h4>
        <span className="about-text">        Our court ambassadors help players learn our community conventions, including pointing players to this website! They include:
          <ul className="list-answer center-list">
            <li>
              Sundeep
            </li>
            <li>
              Tammy
            </li>
            <li>
              Chase
            </li>
          </ul>
        </span>
        <h4>This site</h4>
        <span className="about-text">        This site is a collaboration between various members of the Green Lake pickleball community.  Hans coded and created the site, which is hosted on 
        his <a href="https://www.github.com/nisticism/green-lake-pickleball" target="_blank" rel="noreferrer">github</a>.  Peter and Dave provided content for the site, including text and some 
        design decisions.  Eric made some UI sketches.  Tux created the pickleball logo artwork, which can also be seen on posters around Green Lake.</span>
      </div>
      {/* <hr className="about-hr" /> */}
    </div>
  )
}

export default About