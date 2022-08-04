import React from "react";
import "../../css/Live.css";
import Livecard from "./Livecard";

const Live = () => {
  return (
    <div id="live">
      <h1 className="text-center text-primary">Live Programs</h1>
      <p className="text-center  mt-4 live-para">
        Get your program with live "instructor led" learning.
      </p>
      <div className="mt-5">
        <Livecard />
      </div>
    </div>
  );
};

export default Live;
