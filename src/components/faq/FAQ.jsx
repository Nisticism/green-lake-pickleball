import React from 'react'
import './faq.css'
import venmo from '../../assets/venmo.png';

const FAQ = () => {
  return (
    <div className="news">
      <h1>
        Welcome!
      </h1>
      <p className="subtitle">
        Why is most of the site empty?
      </p>
      <p className="answer">
      This site is under construction, and it may take a while before everything is complete!
      </p>
      <p className="subtitle">
        Who are the Greenlake Picklers?
      </p>
      <p className="answer">
      We are an informal group of pickleball players who gather for drop-in play at the 
      Greenlake East pickleball courts (near the boat house).
      </p>
      <p className="subtitle">
        When do you play?
      </p>
      <p className="answer">
      Drop-in play happens throughout the week. Popular times are weekend mornings and weekday evenings.
      </p>
      <div className="venmo-container">
        <div className="venmo-text">
          <p className="subtitle">
            Donations
          </p>
          <p className="answer">
          We welcome donations so that we can:
          <br/>
            - Reserve courts (typically weekday evenings and weekend mornings)
          <br/>
            - Buy balls
          <br/>
            - Buy and maintain nets and equipment
          </p>
        </div>
        <img src={venmo} alt="Peter's venmo" id="venmo"/>
      </div>
      <p className="subtitle">
        Announcements
      </p>
      <p className="answer">
      We send out announcements from time to time via a Google Group. If you would like to be added to the list, 
      fill out <a className="inline-link" href="https://docs.google.com/forms/d/e/1FAIpQLSciQ7da1QXeJlkST6LtHWL_58kwBOsn-9llTsDyM4Rsrjt0jg/viewform">this form</a>.
      </p>
      <p className="subtitle">
        Questions?
      </p>
      <p className="answer">
        Contact <a className="inline-link" href = "mailto: pseitel@seitelsystems.com">Peter</a> (pseitel@seitelsystems.com) 
        or <a className="inline-link" href = "mailto: pickle.karate.pickle@gmail.com">Dave</a> (pickle.karate.pickle@gmail.com).
      </p>
    </div>
  )
}

export default FAQ