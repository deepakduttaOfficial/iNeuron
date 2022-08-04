import React from "react";

const Searchbar = () => {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn search-icon"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i className="bi bi-search"></i>
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className=" modal-dialog modal-fullscreen-xxl-down">
            <div className="modal-content ">
              <div className="modal-header ">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Search
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body container">
                <div className="inner-addon left-addon pb-4">
                  <i className="bi bi-search modal-search-icon"></i>
                  <input
                    style={{ fontWeight: "600" }}
                    type="text"
                    className="form-control p-2 ps-5 text-danger"
                    placeholder="What do you want to learn?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
