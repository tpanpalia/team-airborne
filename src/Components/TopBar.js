import React from "react";
import HeroLogo from "../Assets/images/breadcrumb-hero-logo.svg";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <nav aria-label="breadcrumb" className="breadcrumb-container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">
                    <img src={HeroLogo} alt="" /> <span>Vector Agency</span>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Clients
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
