import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components';
import nyt_article_screen from '../../assets/nyt_article_screen.png';
import './home.css';

class Home extends Component {

  openInNewTab(url) {
    window.open(url, '_blank', 'noreferrer');
  }

  render () {
    return <div>
      <Header />
      <h2 className="text-align home-section-heading">Welcome to Green Lake Pickleball.</h2>
      <div className="home-section">
        <span className="home-text">        Green Lake Pickleball (GLP) is the name we've chosen for the informal 
          group of players who gather for "drop-in" play at the <a href="https://goo.gl/maps/YsSC3hL1JNjBea8t9" target="_blank" rel="noreferrer">Green Lake East courts</a> located near the Community 
          Center.  GLP is NOT a club; we don't collect dues and we have neither a charter, nor a governance board, nor any formal club officers.  But 
          we do have a mission: <i>to create and sustain a fun, inclusive, and challenging pickleball environment for players of all abilities</i>.  <a href="#player-donations">Player 
          donations</a> support our expenses (<Link to="/courts" target="_blank" rel="noreferrer">court reservations</Link>, balls, nets, etc.) and your active participation sustains and enriches the 
          unique pickleball community at Green Lake.
        </span>
        <span className="home-text">        Since you've managed to find our web address, you've probably already seen and experienced the pickleball 
        scene at Green Lake East.  We hope you've enjoyed the fun and challenging play, and, as we slowly build this website (all with volunteer help), 
        we hope you'll find it informative and helpful.  As various links get filled with content, we'll notify you via our <a href="#join-glp">GLP Google group message</a> board.  In 
        the meantime, check back every now and then and enjoy fun play at Green Lake.</span>
      </div>
      <hr className="home-hr" />
      <div className="home-section text-align">
        <span id="join-glp"></span>
        <h2 className="text-align">Join GLP</h2>
        <span className="home-text">Join the Green Lake Pickleball <a href="https://docs.google.com/forms/d/e/1FAIpQLSciQ7da1QXeJlkST6LtHWL_58kwBOsn-9llTsDyM4Rsrjt0jg/viewform" target="_blank" rel="noreferrer">email list</a>!  You’ll get a weekly(ish) update of what is going on at the courts and how our communal money pot is 
        doing.  We use Google Groups to manage the list and will not provide your email address to any other parties.</span>
        <span className="home-text">Request to join the <a href="https://groups.google.com/g/green-lake-pickleball" target="_blank" rel="noreferrer">google group</a>!</span>
      </div>
      <hr className="home-hr" />
      <div className="home-section text-align">
        <span id="player-donations"></span>
        <h2 className="text-align">Funding</h2>
        <span className="home-text">Green Lake Pickleball welcomes your financial support!  Donations (not tax deductible) go towards court reservations and equipment purchases.</span>
        <span className="home-text">Peter's venmo account can be found <a href="https://account.venmo.com/u/Green_Lake_Pickleball">here</a>.  A direct donation link can be found <a href="https://account.venmo.com/pay?recipients=Green_Lake_Pickleball" target="_blank" rel="noreferrer">here</a>.</span>
        <span className="home-text">Scan the image below with your phone to bring up venmo:</span>
        <span>
          <img className="" src={ process.env.PUBLIC_URL + "/faqs/venmo.png" } alt={ "Peter Seitel's venmo" }></img>
        </span>
      </div>
      <hr className="home-hr" />
      <div className="home-section text-align">
        <h2 className="text-align">Webcam</h2>
        <span className="home-text">In the future, we will be able to embed our own webcam to live stream the courts at Green Lake on its own page!  For 
        now, feel free to check out <a className="link-text" target="_blank" rel="noreferrer" href="https://video.nest.com/live/cR0gr79KLZ">this stream</a>, 
        from the Green Lake boathouse, or visit an <Link className="link-text" target="_blank" rel="noreferrer" to="/webcam">embedded version here</Link>.  At least from here, it's possible to see the weather as it will be on the courts!</span>
      </div>
      <hr className="home-hr" />
      <div className="home-section text-align">
        <h2 className="text-align">Contact</h2>
        <span className="home-text">In order to contact us, please send a message through <Link className="link-text" to="/contact" target="_blank" rel="noreferrer">this page</Link>.</span>
      </div>
      <hr className="home-hr" />
      <div className="home-section text-align">
        <h2 className="text-align">News</h2>
        <span className="home-text">Green Lake pickleball occasionally makes the news!  In August of 2022, a <a href="https://www.nytimes.com/2022/08/16/sports/tennis/pickleball-tennis-court.html" target="_blank" rel="noreferrer">
          New York Times article</a> came out featuring pickleball at Green Lake.</span>
        <img className="nyt-article-screen" src={nyt_article_screen} alt="New York Times article on picklebal at Green Lake" 
        onClick={() => this.openInNewTab("https://www.nytimes.com/2022/08/16/sports/tennis/pickleball-tennis-court.html")}/>
      </div>
      <hr className="home-hr" />
      <div className="home-section text-align">
        <h2 className="text-align">Competition</h2>
        <span className="home-text">Some of the more competitive players here seek out nearby tournaments.  <a href="https://www.pickleballtournaments.com/pbt_tlisting.pl?when=F&selstate=WA&selsanctioning=&selnettype=&openregonly=false&ssipaFilter=false&aauFilter=false" 
        target="_blank" rel="noreferrer">Here</a> is a link to future tournaments in Washington.</span>
      </div>
    </div>
  }
}

export default Home