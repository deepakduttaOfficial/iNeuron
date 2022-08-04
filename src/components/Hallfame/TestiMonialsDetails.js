import React from "react";

const TestiMonialsDetails = ({ user }) => {
  const { name, description, img } = user;
  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} alt="..." />
        <h5 className="text-secondary">{name}</h5>
        <p>{description}</p>
        <h4 className="card-icon mt-4">
          <i class="bi bi-linkedin"></i>
        </h4>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
