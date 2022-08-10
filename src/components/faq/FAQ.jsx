import React, { useState } from 'react'
import './faq.css'
import QuestionAnswer from '../faq_question_answer/FAQQuestionAnswer';

const FAQ = () => {

  const faqs = [{id: 1, question: "Why is most of the site empty?", answer: "This site is under construction, and it may take a while before everything is complete!"},
    {id: 2, question: "Who are the Greenlake Picklers?", answer: "We are an informal group of pickleball players who gather for drop-in play at the Greenlake East pickleball courts (near the boat house)."},
    {id: 3, question: "When do you play?", answer: "Drop-in play happens throughout the week.  Popular times are weekend mornings and weekday evenings."},
    {id: 4, question: "How can I be informed of announcements?", answer: "We send out announcements from time to time via a Google Group.  If you would like to be added to the list, fill out ", 
    url: "https://docs.google.com/forms/d/e/1FAIpQLSciQ7da1QXeJlkST6LtHWL_58kwBOsn-9llTsDyM4Rsrjt0jg/viewform", urlText: "this form"},
    {id: 5, question: "How can I contact GLP?", answer: "Feel free to email Peter at ", 
    url: "https://greenlakepickleball.com/about", urlText: "this page", url2: "mailto: pseitel@seitelsystems.com", url3: "mailto: pickle.karate.pickle@gmail.com", secondText: " or Dave at ",
    url2Text: "pseitel@seitelsystems.com", url3Text: "pickle.karate.pickle@gmail.com", thirdText: ".  For more information, please visit "},
    {id: 6, question: "How can I donate to GLP?", answer: "You may donate to Peter Seitel's venmo!  The link for that is right ", url2: "https://account.venmo.com/pay?recipients=Green_Lake_Pickleball",
    url2Text: "here", secondText: ".  Also, feel free to scan the image below!", image: "venmo.png", imageAlt: "Peter Seitel Venmo"},
    {id: 7, question: "What are donations collected for?", answer: "We use donations so that we can:",
    listAnswer: [{id: 1, content: "Reserve courts"}, {id: 2, content: "Buy balls"}, {id: 3, content: "Buy and maintain nets and equipment"}]}]

  return (
    <div>
      <div className="text-align">
        <h1 className="heading">Frequently Asked Questions</h1>
        <hr />
      </div>
      <div className="faqs">
        { faqs.map((QA) => {
          return <QuestionAnswer key={QA.id} questionAnswerData={QA}/>
        })}
      </div>
      {/* <h1>
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
      </p> */}
    </div>
  )
}

export default FAQ