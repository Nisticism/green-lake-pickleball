import React, { useState } from 'react'
import header from '../../assets/header.png';
import { IoIosArrowForward } from 'react-icons/io';
import './faqquestionanswer.css';


function FAQQuestionAnswer({ questionAnswerData }) {

  const [isExpanded, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!isExpanded);
  };

  // function getChangeClass(change) {
  //   let icon = (change ? styles['increase'] : styles['decrease']);
  //   return icon;
  // }

  return (
    <div>
      <span onClick={toggleExpand} className="question">
        { questionAnswerData.question }
        <span className={[`${isExpanded ? "down-arrow" : false}`, "icon"].join(" ")}><IoIosArrowForward /></span>
      </span>
      { isExpanded &&
        <span className="answer">
          <span>
            { questionAnswerData.answer }
          </span>
          <span>
            { questionAnswerData.url2 ? <a href={ questionAnswerData.url2}>{ questionAnswerData.url2Text ? questionAnswerData.url2Text : questionAnswerData.url2 }</a> : false }
          </span>
          <span>
            { questionAnswerData.secondText ? <span>{ questionAnswerData.secondText }</span> : false }
          </span>
          <span>
            { questionAnswerData.url3 ? <a href={ questionAnswerData.url3}>{ questionAnswerData.url3Text ? questionAnswerData.url3Text : questionAnswerData.url3 }</a> : false }
          </span>
          <span>
            { questionAnswerData.thirdText ? <span>{ questionAnswerData.thirdText }</span> : false }
          </span>
            { questionAnswerData.listAnswer ? <div className="list-answer"><ul>
              { questionAnswerData.listAnswer.map((item) => {
                return <li key={item.id}>{item.content}</li>
              })}
            </ul></div> : false}
          <span>
            { questionAnswerData.url ? <span><a href={ questionAnswerData.url } target="_blank" rel="noreferrer">
              { questionAnswerData.urlText ? questionAnswerData.urlText : questionAnswerData.url }</a>.
            </span> : false}
          </span>
          <span>
            { questionAnswerData.image ? <img src={ process.env.PUBLIC_URL + '/faqs/' + questionAnswerData.image } alt={ questionAnswerData.imageAlt ? questionAnswerData.imageAlt : "default"}></img> : false }
          </span>
        </span>
      }
    </div>
  )
}

export default FAQQuestionAnswer