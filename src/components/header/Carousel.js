import React from "react";
import HeaderTextAnimation from "./HeaderTextAnimation";
import Influence1 from "../../images/Influencers/hero-influencers1.png";
import Hero4 from "../../images/Influencers/hero-4.png";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div class="carousel-inner">
          {" "}
          <div class="carousel-item active" data-bs-interval="100000">
            <div class="bg-info d-flex justify-content-between align-items-center header ">
              <HeaderTextAnimation />
              <img src={Influence1} alt="" className="hero-influencers1" />
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="100000">
            <div class=" bg-info d-flex justify-content-between align-items-center header ">
              <HeaderTextAnimation />
              <img src={Hero4} alt="" className="hero-influencers2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
