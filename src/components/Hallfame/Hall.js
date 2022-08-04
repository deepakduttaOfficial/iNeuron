import React from "react";
import "../../css/Hall.css";
import Hallcarousel from "./Hallcarousel";

const Hall = () => {
  return (
    <div id="hall">
      <Hallcarousel />
      <p className="text-center fw-bold">
        <span className="hall-view-more">
          {" "}
          View More <i class="bi bi-arrow-right-circle-fill"></i>
        </span>
      </p>
    </div>
  );
};

export default Hall;
