import React from 'react'
import './contact.css';


function Contact() {
  return (
    <div className="text-align">
      <h2>Contact</h2>
      <div className="container">
        <form target="_blank" action="https://formsubmit.co/peter@sla.com" method="POST">
          <div className="form-group">
            <input type="text" name="name" className="form-control" placeholder="Full Name" required />
            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
      <div className="contact-descript-container">
        <span className="contact-descript">Looking for emails?  Peter's is <a href="mailto: peter@sla.com">peter@sla.com</a> and Dave's 
        is <a href="mailto: pickle.karate.pickle@gmail.com">pickle.karate.pickle@gmail.com</a>.</span>
      </div>
    </div>
  )
}

export default Contact