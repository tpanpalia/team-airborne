import React from "react";
import Search from "./Search";
import TeamMember from "./TeamMember";
import Member from "./Member";
import ProfilePic1 from "../Assets/images/profile-pic1.png";
import ProfilePic2 from "../Assets/images/profile-pic2.png";
import ProfilePic3 from "../Assets/images/profile-pic3.png";
import ProfilePic4 from "../Assets/images/profile-pic4.png";
import ProfilePic5 from "../Assets/images/profile-pic5.png";

function MainContent() {
  const teamMemberData = [
    {
      name: "Medina Trudoo",
      emailId: "jmedina@trudoo.name",
      isAdmin: true,
      profilePic: ProfilePic1,
    },
    {
      name: "Medina Trudoo",
      emailId: "jmedina@trudoo.name",
      isAdmin: true,
      profilePic: ProfilePic2,
    },
    {
      name: "Rami Moore",
      emailId: "rmoore@livez.gov",
      isAdmin: false,
      profilePic: ProfilePic3,
    },
    {
      name: "Irina Ryan",
      emailId: "iryan@shuffletag.biz",
      isAdmin: false,
      profilePic: ProfilePic4,
    },
    {
      name: "Michael Collins",
      emailId: "mcollins@snaptags.info",
      isAdmin: false,
      profilePic: ProfilePic5,
    },
  ];
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <Search />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="table-responsive">
                <table className="table team-list">
                  <tbody>
                    {teamMemberData.map((x) => {
                      return <TeamMember memberDetails={x} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <Member />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
