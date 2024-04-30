import React from "react";
import reactDom from "react-dom";
import Adopt from "./Adopt.js";
import Dropdown from "./Dropdown.js";
import ButtonSubscribe from "./ButtonSubscribe.js";
export default function Input() {
  return (
    <div>
      <div className="App">
        <nav class="navbar navbar-expand">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div className="App">
                <Adopt />
              </div>
              <Dropdown />
          <ButtonSubscribe/>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
reactDom.render(<Input />, document.getElementById("root"));
