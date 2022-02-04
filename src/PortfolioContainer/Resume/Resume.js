import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) =>{ 
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        ); 
    };

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const programmingSkillsDetails = [
        {skill: "DotNET Core", ratingPercentage: 75},
        {skill: "Angular", ratingPercentage: 75},
        {skill: "Typescript", ratingPercentage: 70},
        {skill: "Javascript", ratingPercentage: 70},
        {skill: "MSSQL", ratingPercentage: 75},
        {skill: "React", ratingPercentage: 65},
        {skill: "HTML", ratingPercentage: 80},
        {skill: "CSS", ratingPercentage: 65},
        {skill: "Javascript", ratingPercentage: 70},
    ];

    const projectsDetails= [
        {
            title: "Personal Portfolio Webiste",
            duation: {fromDate: "2021", toDate: "2022"},
            description: "A Personal Portfolio website to showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, Bootstrap, CSS",
        },
        {
            title: "Property Rental App",
            duation: {fromDate: "2021", toDate: "2021"},
            description: "An application for lisitng properties and finding available properties for rent and sale in given locations",
            subHeading: "Technologies Used: Angular, DotNET Core, Bootstrap, MSSQL",
        },
        {
            title: "Movies App",
            duation: {fromDate: "2021", toDate: "2021"},
            description: "An application that shows movies currently in cinemas in different locations",
            subHeading: "Technologies Used: Angular, DotNET Core, MSSQL, Angular Material",
        },
        {
            title: "Ecommerce Website",
            duation: {fromDate: "2021", toDate: "2022"},
            description: "Online ecommerce website showcasing and selling products online with payment system",
            subHeading: "Technologies Used:  React JS, Node Js, Bootstrap",
        },
    ]

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"Delta State University, Abraka"}
            subHeading={"BACHELOR OF ARTS AND EDUCATION, ENGLISH"}
            fromDate={"2015"}
            toDate={"2018"}
            />
            <ResumeHeading
            heading={"National Youth Service Corps"}
            subHeading={"Cashier at Momoreoluwa Nigeria Ltd"}
            fromDate={"2019"}
            toDate={"2020"}
            />
            <ResumeHeading
            heading={"Delta State University, Abraka"}
            subHeading={"DIPLOMA IN LAW"}
            fromDate={"2013"}
            toDate={"2015"}
            />
            <ResumeHeading
            heading={"Federal Government College, Idoani"}
            subHeading={"WAEC and NECO"}
            fromDate={"2007"}
            toDate={"2013"}
            />
        </div>,

        <div className='resume-screen-container' key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                heading={"Fintrak Software Company"}
                subHeading={"Software Developer"}
                fromDate={"2021"}
                toDate={"present"}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                    Currently working with technologies such as DotNET Core, Angular, Azure DevOps, 
                    SQL databases such as MSSQL, MySql and Oracle database.
                    </span>
                </div>
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Worked with my team to develop a Digital Lending Application for financial institutions in Nigeria.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Successfully fix support-related issues that arise in my department's 
                        Credit Origination and Management Application.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Handle Reports building and generation using DotNET and Angular.
                    </span>
                    <br />
                </div>
            </div> 
        </div>,

            <div className='resume-screen-container programming-skills-container'
            key="programming-skills">
                {programmingSkillsDetails.map((skill, index) =>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{width: skill.ratingPercentage + "%"}}
                            className='active-percentage-bar'>
                            </div>
                        </div>
                    </div>
                ))}
            </div>,

            <div className='resume-screen-container' key="projects">
                {projectsDetails.map((projectsDetails, index) =>(
                    <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duation.fromDate}
                    toDate={projectsDetails.duation.toDate}
                    />
                ))}
            </div>,

            <div  className='resume-screen-container' key="interests">
                <ResumeHeading
                    heading="Reading"
                />
                <ResumeHeading
                    heading="Chess and Scrabble games"
                />
                <ResumeHeading
                    heading="Coding"
                />
                <ResumeHeading
                    heading="Listening to music"
                />
            </div>,
    ]

    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };

    const getBullets = ()=>{
        return resumeBullets.map((bullet, index) => (
            <div 
            onClick={() => handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}>

                <img className='bullet-logo' 
                src={bullet.logoSrc} 
                alt="oops, no internet connection" 
                />
                <span className='"bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreens = () => {
        return (
            <div 
            style = {carousalOffsetStyle.style}
            className='resume-details-carousal'
            >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
            
        )
    }

    useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);

    return(
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    ) 
}
