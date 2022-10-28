import React from "react";
import myprofile from "../assets/my-profile.jpg";

function ProfileCard() {
  return (
    <div className="content">
      <div className="profile">
        <div className="update-info">
          <h3 className="update-head">Update info</h3>
          <h4 className="update-link">First Name</h4>
          <h4 className="update-link">Last Name</h4>
          <h4 className="update-link">Contact Address</h4>
          <h4 className="update-link">Phone Number</h4>
          <h4 className="update-link">Social Media</h4>
          <h4 className="update-link">Update Photo</h4>
        </div>

        <div className="user-profile">
          <h1 className="user-head">My Card</h1>
          <div className="user">
            <img
              src={myprofile}
              alt="image of a human man"
              width="150px"
              height="150px"
              className="user-image"
            />
            <h3 className="user-details">Name: Qozeem Salami</h3>
            <p className="phone">Phone: +234 (80)664 XXXX</p>
          </div>
          <button className="share-button">Share Card</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
