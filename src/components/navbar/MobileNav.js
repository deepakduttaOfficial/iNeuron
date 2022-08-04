import React from "react";
import Searchbar from "./Searchbar";

const MobileNav = () => {
  return (
    <div className="d-flex space-between">
      <a
        class="flex-grow-1 inline"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <i class="bi bi-list" style={{ fontSize: "30px" }}></i>
      </a>
      <Searchbar />

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            iNeuron
          </h5>

          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="dropdown mt-3">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
