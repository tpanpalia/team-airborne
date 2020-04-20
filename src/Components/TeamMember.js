import React from "react";
import MasterCard from "../Assets/images/mastercard-logo.svg";
import AppleIcon from "../Assets/images/apple-icon.svg";
import MountainDew from "../Assets/images/mountain-dew-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function TeamMember(props) {
  return (
    <tr>
      <td style={{ width: "30%" }}>
        <div className="team-list-head">
          <div className="team-member-pic">
            <img src={props.memberDetails.profilePic} alt="" />
          </div>
          <div className="team-member-info">
            <div className="team-member-name">{props.memberDetails.name}</div>
            <div className="team-member-email">
              {props.memberDetails.emailId}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="team-member-role">
          {props.memberDetails.isAdmin && "ADMIN"}
        </div>
      </td>
      <td>
        <div className="team-stat-box">
          <ul className="team-list-stats">
            <li>
              <h6>3k</h6>
              <span>EMAILS</span>
            </li>
            <li>
              <h6>160</h6>
              <span>MEETINGS</span>
            </li>
            <li>
              <h6>12%</h6>
              <span>REPLY RATE</span>
            </li>
            <li>
              <h6>4</h6>
              <span>SEQUENCES</span>
            </li>
          </ul>
        </div>
      </td>
      <td>
        <div className="team-total-box">
          <ul className="logo-group-list">
            <li>
              <div className="logo-group-box">
                <img src={MasterCard} alt="" />
              </div>
            </li>
            <li>
              <div className="logo-group-box">
                <img src={AppleIcon} alt="" />
              </div>
            </li>
            <li>
              <div className="logo-group-box">
                <img src={MountainDew} alt="" />
              </div>
            </li>
          </ul>
          <div className="team-total-number">+5 clients</div>
        </div>
      </td>
      <td style={{ width: "90px", textAlign: "center" }}>
        <div className="dropdown">
          <a
            className="dropdown-toggle"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              style={{ marginRight: "8px" }}
              icon={faEllipsisH}
            />
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Snooze
            </a>
            <a className="dropdown-item" href="#">
              Skip
            </a>
            <a className="dropdown-item" href="#">
              Delete
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TeamMember;
