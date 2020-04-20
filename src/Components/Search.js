import React from "react";
import SortIcon from "../Assets/images/sort-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="col-sm-12">
      <div className="filter-container team-filter-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            value=""
            placeholder="Search"
          />
        </div>
        <span className="h-space"></span>
        <div className="filter-option">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={SortIcon} alt="" />
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Added on - Asc
              </a>
              <a className="dropdown-item" href="#">
                Added on - Desc
              </a>
              <a className="dropdown-item" href="#">
                Name A - Z
              </a>
              <a className="dropdown-item" href="#">
                Name Z - A
              </a>
            </div>
          </div>
        </div>
        <span className="v-line"></span>
        <div className="filter-list-box">
          <ul className="filter-list no-border-right">
            <li>
              <a href="#" className="active">
                all
              </a>
            </li>
            <li>
              <a href="#">admins</a>
            </li>
            <li>
              <a href="#">non-admins</a>
            </li>
          </ul>
        </div>
        <span className="h-space"></span>
        <div className="filter-btn-box ml-auto">
          <a href="#" className="btn btn-default">
            <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faPlus} /> Add
            team member
          </a>
        </div>
      </div>
    </div>
  );
}

export default Search;
