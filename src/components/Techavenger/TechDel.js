import React from "react";

const TechDel = ({ user }) => {
  const { name, description, img } = user;
  return (
    <div className="item" style={{ width: "30rem" }}>
      <div className="shadow-effect" style={{ padding: "30px 20px" }}>
        <img
          className="img-circle"
          src={img}
          style={{ maxWidth: "13rem", maxHeight: "13rem" }}
          alt="..."
        />
        <h5 className="text-secondary mt-3 mb-4">{name}</h5>
        <p>{description}</p>
        <h4 className="card-icon mt-5">
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-youtube"></i>
        </h4>
      </div>
    </div>
  );
};

export default TechDel;
