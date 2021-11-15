import React from "react";
import "../css/UserDetails.css";

// import { useLocation } from "react-router";

import { useSelector } from "react-redux";

export default function UserDetails() {
  // const location =useLocation()

  const user = useSelector((state) => state.selectedUser);

  return (
    <div className="user-details">
      <img src={user.picture.large} alt="Loading" />
      <div className="details">
        <div className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>

        <div className="age">Age: {user.dob.age}</div>

        <div className="age">Email: {user.email}</div>
        <div className="age">Phone: {user.phone}</div>
        <div className="age">Gender: {user.gender}</div>
        <div className="location">
          <span>Location</span>
          <div>{user.location.street.name}</div>
          <div>{user.location.city}</div>
          <div>{user.location.state}</div>
          <div>{user.location.country}</div>
        </div>
      </div>
    </div>
  );
}
