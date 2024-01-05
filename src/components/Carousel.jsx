import React from "react";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="carousel">
          <Slider {...settings}>
          
            <div className="carels">
              <h1>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                nihil."
              </h1>
              <div className="users">
                <div className="img">
                  <img src="profile.jpg" alt="" />
                </div>
                <div className="name">
                  <h5>Hema Bhatacharya</h5>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>


          
            <div className="carels">
              <h1>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                nihil."
              </h1>
              <div className="users">
                <div className="img">
                  <img src="profile.jpg" alt="" />
                </div>
                <div className="name">
                  <h5>Hema Bhatacharya</h5>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
        

            <div className="carels">
              <h1>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                nihil."
              </h1>
              <div className="users">
                <div className="img">
                  <img src="profile.jpg" alt="" />
                </div>
                <div className="name">
                  <h5>Hema Bhatacharya</h5>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
       
                    </Slider>
      </section>
    </>
  );
};

export default Carousel;
