import React from "react";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="bg-primary">
      <div className="footer-container">
        <h1 className="logo-container-header">
          <img src="https://ineuron.ai/images/ineuron-logo-white.png" alt="" />
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-youtube"></i>
        </h1>
        <div className="footer-content">
          <div className="footer-item">
            <i class="bi bi-geo-alt-fill"></i>
            <p>
              17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli,
              Bengaluru, Karnataka 562129.
            </p>
          </div>
          <div className="footer-item">
            <i class="bi bi-envelope-fill"></i>
            <p>
              <strong>Email us</strong> : contact@ineuron.ai
            </p>
          </div>
        </div>
      </div>

      <div className="footer-container footer-container-2 ">
        <h5 className="">Company</h5>
        <div className="footer-content">
          <div className="footer-item">
            <p>About us</p>
          </div>
          <div className="footer-item">
            <p>Hack-A-Thon</p>
          </div>
          <div className="footer-item">
            <p>Job guarantee</p>
          </div>
          <div className="footer-item">
            <p>Privacy policy</p>
          </div>
        </div>
      </div>

      <div className="footer-container ">
        <h5 className="">Products</h5>
        <div className="footer-content">
          <div className="footer-item">
            <p>Job Portal</p>
          </div>
          <div className="footer-item">
            <p>Internship portal</p>
          </div>
          <div className="footer-item">
            <p>Become an affiliate</p>
          </div>
          <div className="footer-item">
            <p>Hall of fame</p>
          </div>
          <div className="footer-item">
            <p>InBlog</p>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-item">
            <img src="https://ineuron.ai/images/iso-9001-2015.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
