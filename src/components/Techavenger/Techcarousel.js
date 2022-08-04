import React from "react";
import TechDel from "./TechDel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../css/Tech.css";
const Techcarousel = () => {
  const users = [
    {
      name: "Sudhanshu Kumar",
      description: "Al Engineer &CEO",
      img: "https://ineuron.ai/images/landing-page/mentors/sudhanshu-square.png",
    },
    {
      name: "Hitesh Choudhary",
      description: "CTO",
      img: "https://ineuron.ai/images/landing-page/mentors/hitesh-square.png",
    },
    {
      name: "Krish Naik",
      description: "CIO",
      img: "https://ineuron.ai/images/landing-page/mentors/krish-square.png",
    },
    {
      name: "Navin Reddy",
      description: "Senior VP",
      img: "https://ineuron.ai/images/landing-page/mentors/telusko-square.png",
    },
    {
      name: "Amresh Bharti",
      description: "VP Marketing",
      img: "https://ineuron.ai/images/landing-page/mentors/mysirg-square.png",
    },
    {
      name: "Saurabh Shukla",
      description: "Senior VP",
      img: "https://ineuron.ai/images/landing-page/mentors/saksham-square.png",
    },
  ];
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
    <div>
      {" "}
      <section id="testimonial" className="testimonials pt-70 pb-70">
        <div className="container mt-5">
          <h1 className="text-center text-primary">Tech Avengers</h1>
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
                  return <TechDel user={user} key={index} />;
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techcarousel;
