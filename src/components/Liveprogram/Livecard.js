import React from "react";
import Course1 from "../../images/Liveprogram/Course1.jpg";
import Course2 from "../../images/Liveprogram/Course2.jpg";
import Course3 from "../../images/Liveprogram/Course3.jpg";
import Python from "../../images/Liveprogram/Python.png";
import BigData from "../../images/nav-icon/big-data.png";
import Datamanagement from "../../images/nav-icon/Datamanagement.png";
//
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Livecard = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        loop
        navSpeed={100}
        items={3}
        margin={15}
        dots={false}
        autoplay={true}
        autoplayTimeout={4000}
        center
        lazyContent={true}
      >
        <div class="item">
          <div class="flip-card m-2">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Course1}
                  alt="Course"
                  style={{ width: "24rem", height: "15rem" }}
                />
              </div>
              <div class="flip-card-back">
                <h5 className="mt-4">Job Guaranteed Big Data Bootcamp</h5>
                <img
                  src={BigData}
                  id="liveimg"
                  style={{ width: "40px", margin: "auto" }}
                  alt="..."
                />

                <p className="p-3">
                  By using the tools and processes that big data scientists and
                  engineers use on a daily basis, you will be intelligent enough
                  to understand the insights that big data may offer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="flip-card m-2">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Course2}
                  alt="Cource"
                  style={{ width: "24rem", height: "15rem" }}
                />
              </div>
              <div class="flip-card-back">
                <h5 className="mt-4">Web Development using Python</h5>
                <img
                  className="live-card-icon"
                  src={Python}
                  alt="..."
                  style={{ width: "40px", margin: "auto" }}
                />
                <p className="p-3">
                  Full Stack Python with Django is specially created to fulfil
                  the standards set by the industry. You may learn a lot about
                  Python, the Django REST framework, Django Models, React.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="flip-card m-2">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Course3}
                  alt="Course"
                  style={{ width: "24rem", height: "15rem" }}
                />
              </div>
              <div class="flip-card-back">
                <h5 className="mt-4">DSA with Python and JavaScript</h5>
                <img
                  className="live-card-icon"
                  src={Datamanagement}
                  alt="..."
                  style={{ width: "40px", margin: "auto" }}
                />
                <p className="p-3">
                  A comprehensive chase to excel any intreview for the Data
                  Structures and Algorithms. This course has been specifically
                  designed to provide resources .
                </p>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};

export default Livecard;
