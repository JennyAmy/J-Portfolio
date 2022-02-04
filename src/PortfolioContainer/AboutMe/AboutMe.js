import React, {useEffect} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = 
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "I am a Junior Fullstack Developer with good experience and understanding of both the frontend and backend of applications. I have a huge appetite for knowledge and open to unlearning and relarning, hence very flexible and adaptable. I am also a very fast learner.",
    highlights: {
      bullets: [
        "Good experience working with DotNET Core for the backend.",
        "Good experience working with Angular for the frontend.",
        "Design ASP.NET application for linkage to SQL databases.",
        "Managing databases such as MSSQL, MySql and Oracle database.",
        "Creating and working with Restful APIs.",
        "Fair undertstanding of React.",
      ],
      heading: "Here are my Few Highlights:"
    }
  }

  const renderHighlights = () =>{
    return(
      SCREEN_CONSTANTS.highlights.bullets.map((value, i) =>(
        <div className='highlight' key={i}>
            <div className='highlight-blob'></div>
            <span>{value}</span>
        </div>
      ))
    )
  }
  return(
      <div className='about-me-container screen-container' 
      id={props.id || ""}>
        <div className='about-me-parent'>
          <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
          <div className='about-me-card'>
            <div className='about-me-profile'></div>
            <div className='about-me-details'>
              <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
              <div className='about-me-highlights'>
                <div className='highlight-heading'>
                  <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                </div>
                {renderHighlights()}
              </div>
              <div className='about-me-options'>
                <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                  {" "}
                  Contact Me{" "}
                  </button>
                  <a href='ehizcv.pdf' download="Jennifer OliseyenumCV.pdf">
                  <button className="btn highlighted-btn">Get Résumé</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
