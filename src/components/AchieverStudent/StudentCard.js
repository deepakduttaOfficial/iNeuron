import React from "react";
import Book from "../../images/Achieverstudent/booksicon.svg";
import Studentiocn from "../../images/Achieverstudent/Studentiocn.svg";
import Creditcardicon from "../../images/Achieverstudent/Creditcardicon.svg";
import "../../css/Student.css";

const StudentCard = () => {
  return (
    <div className="student-card  d-flex justify-content-center">
      <div className="text-center mt-3" style={{ width: "25rem" }}>
        <img src={Book} className="student-card-img" alt="..." />
        <div className="card-body mt-3">
          <h1 className="student-card-heading text-center">400+</h1>
          <p className="mt-4 student-card-subheading">Different Courses</p>
        </div>
      </div>
      <div className="text-center mt-3" style={{ width: "25rem" }}>
        <img src={Studentiocn} className="student-card-img" alt="..." />
        <div className="card-body mt-3">
          <h1 className="student-card-heading text-center">400000+</h1>
          <p className="mt-4 student-card-subheading">Students Enrolled</p>
        </div>
      </div>
      <div className="text-center mt-3" style={{ width: "25rem" }}>
        <img src={Creditcardicon} className="student-card-img" alt="..." />
        <div className="card-body mt-3">
          <h1 className="student-card-heading text-center">10000+</h1>
          <p className="mt-4 student-card-subheading">Successful Transition</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
