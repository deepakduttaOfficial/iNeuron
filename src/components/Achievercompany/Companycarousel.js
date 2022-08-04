import React from "react";
import "../../css/Company.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Redbus from "../../images/company/Redbus.png";
import Musigma from "../../images/company/Musigma.png";
import Wissen from "../../images/company/Wissen.png";
import Wipro from "../../images/company/Wipro.png";
import Eminds from "../../images/company/Eminds.png";
import Affine from "../../images/company/Affine.png";
import Wellnesys from "../../images/company/Wellnesys.png";

const Companycarousel = () => {
  return (
    <div className="mt-5 pt-5">
      <OwlCarousel
        className="owl-theme"
        loop
        navSpeed={100}
        items={5}
        margin={15}
        touchDrag={false}
        mouseDrag={false}
        pullDrag={false}
        dots={false}
        autoplay={true}
        autoplayTimeout={2000}
        center
        lazyContent={true}
      >
        <div class="item">
          <h4>
            <img src={Redbus} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4>
            <img src={Musigma} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4>
            <img src={Wipro} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4 className="me-2">
            <img src={Wissen} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4>
            <img src={Eminds} alt="" />
          </h4>
        </div>

        <div class="item">
          <h4>
            <img src={Affine} alt="" />
          </h4>
        </div>

        <div class="item">
          <h4>
            <img src={Wellnesys} alt="" />
          </h4>
        </div>
      </OwlCarousel>
      <br />
    </div>
  );
};

export default Companycarousel;
