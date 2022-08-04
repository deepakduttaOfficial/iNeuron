import React from "react";
import Product1 from "../../images/Product/Product1.svg";
import Product2 from "../../images/Product/Product2.svg";
import Product3 from "../../images/Product/Product3.svg";
import Product4 from "../../images/Product/Product4.svg";
import Product5 from "../../images/Product/Product5.svg";
import "../../css/Student.css";
import "../../css/Product.css";

const Productcard = () => {
  return (
    <>
      <div className="student-card  d-flex justify-content-center">
        <div className="text-center mt-3" style={{ width: "25rem" }}>
          <img src={Product1} className="product-card-img" alt="..." />
          <div className="card-body mt-3">
            <h1 className="product-card-heading text-center">Job Portal</h1>
            <p className="mt-4 product-card-subheading">
              Use exceptional templates for a stand-out resume minus the sign up
              process.
            </p>
          </div>
        </div>
        <div className="text-center mt-3" style={{ width: "25rem" }}>
          <img src={Product2} className="product-card-img" alt="..." />
          <div className="card-body mt-3">
            <h1 className="product-card-heading text-center">
              Internship portal
            </h1>
            <p className="mt-4 product-card-subheading">
              iNeuron's self-paced internship portal prioritises hands-on
              training with 570+ internship projects.
            </p>
          </div>
        </div>

        <div className="text-center mt-3" style={{ width: "25rem" }}>
          <img src={Product3} className="product-card-img" alt="..." />
          <div className="card-body mt-3">
            <h1 className="product-card-heading text-center">
              Become an affiliate
            </h1>
            <p className="mt-4 product-card-subheading">
              Explore affiliate marketing opportunities with iNeuron and attain
              financial frredom.
            </p>
          </div>
        </div>

        <div className="text-center mt-3" style={{ width: "25rem" }}>
          <img src={Product4} className="product-card-img" alt="..." />
          <div className="card-body mt-3">
            <h1 className="product-card-heading text-center">Hall of fame</h1>
            <p className="mt-4 product-card-subheading">
              Our student placements and 10+ career transitions speak volumes
              about our coursesS.
            </p>
          </div>
        </div>

        <div className="text-center mt-3" style={{ width: "25rem" }}>
          <img src={Product5} className="product-card-img" alt="..." />
          <div className="card-body mt-3">
            <h1 className="product-card-heading text-center">InBlog</h1>
            <p className="mt-4 product-card-subheading">
              Explore all you want about your favourite courses
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;
