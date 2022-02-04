import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Testimonial.css';


import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import lady from '../../../src/img/Testimonial/lady.png';
import man from '../../../src/img/Testimonial/man.png';
import mike from '../../../src/img/Testimonial/mike.png';
import shape from '../../../src/img/Testimonial/shape-bg.png';


export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animatedin: "bounceInRight",
        animatedout: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 1,
            },
            1000:{
                items: 3,
            },
        }
    }

  return (
    <div>
      <ScreenHeading
        title={"Testimonal"}
        subHeading={"What my Clients Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
        <h6 style={{color: "white", textAlign: "center"}}>Please note that this section is merely for test purpose and not words of my clients</h6>
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I patronized Jennifer and when she delivered, I honestly
                      fell in love with the project. She is very honest and
                       delivers on time.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img 
                        src={lady}
                        alt="no internet connection" />
                    <h5>Ife Jovita</h5>
                    <p>CEO JovisGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        I patronized Jennifer and when she delivered, I honestly
                      fell in love with the project. She is very honest and
                       delivers on time.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img 
                        src={man} 
                        alt="no internet connection" />
                    <h5>Dave Donald</h5>
                    <p>CEO DonaldsHome</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        I patronized Jennifer and when she delivered, I honestly
                      fell in love with the project. She is very honest and
                       delivers on time.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img 
                        src={mike}
                        alt="no internet connection" />
                    <h5>Mikel Joe</h5>
                    <p>CEO MikelTech</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
