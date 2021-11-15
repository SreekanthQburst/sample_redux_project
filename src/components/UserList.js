import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// css
import "../css/List.css";

import api from "../api";
import { remove_sublist, selectedUser, setUsers, updatePage } from "../redux/actions/UserActions";
import UserDetails from "./UserDetails";

export default function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  // fetch random users list
  // const fetchUsers = async () => {
  //   const response = await api.get("/?results=10").catch((e) => {
  //     console.log("error : ", e);
  //   });
  //   dispatch(setUsers(response.data.results));
  // };

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  // get list of users in a page
  const getList = (page) => {
    dispatch(updatePage(page));
  };

  // navigate to userdetails page
  const UserDetails=(user)=>{
    dispatch(remove_sublist())
    dispatch(selectedUser(user))
    navigate(`/user/${user.login.username}`)
  }
  return (
    <div className="users">
      {users.loading ? (
        <span className="loading">Loading</span>
      ) : (
        <div>
          <div className="container">
            {users.subList?.map((user, index) => (
              <div
                key={index}
                className="card"
                onClick={() => UserDetails(user)}
              >
                <img src={user.picture.large} />
                <span className="name">{`Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</span>
                <span className="email">{`Email: ${user.email}`}</span>
              </div>
            ))}
          </div>
          <div className="buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
              <span
              key={key}
                className={`${key === users.page ? "selected" : ""}`}
                onClick={() => getList(key)}
              >
                {key}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
