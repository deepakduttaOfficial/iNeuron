import React from "react";
import TestiMonialsDetails from "./TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../css/Hall.css";
import Hall1 from "../../images/Hall/Hall1.jpeg";
import Hall2 from "../../images/Hall/Hall2.jpeg";
import Hall3 from "../../images/Hall/Hall3.jpeg";
import Hall4 from "../../images/Hall/Hall4.jpeg";

const Hallcarousel = () => {
  const users = [
    {
      name: "Sameer Kumar",
      description:
        "Bajaj Finserv, Data Scientist Hello everyone, My name is Sameer Kumar and  I am a final year B.Tech student from Symbiosis Institute of Technology, Pune. I recently got",

      img: `${Hall1}`,
    },
    {
      name: "Chitra Patgar",
      description:
        "Cognizant(genc next) ,Coditas, Celebal,Capgemini, Atos, Programmer Analyst I have enrolled for your ML course two years back, Python you taught in that course was ",
      img: `${Hall2}`,
    },
    {
      name: "ShrivatsaG",
      description:
        "ECOLAB, trainee software developer A few days back I was scheduled for an interview at ECOLABSs. Thanks to Naveen Reddy sir and his wonderful Youtube channel, I was",

      img: `${Hall3}`,
    },
    {
      name: "Aakash BB",
      description:
        "Amazon, Software Development Engineer 1 I was following Krish Sir YouTube channel for  more than 2-3 year. I learnt Machine Learning and Deep Learning from him. I learnt basics of",

      img: `${Hall4}`,
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <h1 className="text-center text-primary">Hall of fame</h1>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
              nav={false}
              pullDrag={false}
              dots={false}
              autoplayTimeout={3000}
            >
              {users.map((user, index) => {
                return <TestiMonialsDetails user={user} key={index} />;
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hallcarousel;
