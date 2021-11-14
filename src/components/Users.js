import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
import UserPosts from "./UserPosts";

const User = ({ fetchUsers, userData }) => {
  const handleClick = async () => {
    fetchUsers();
  };

  const { loading, users, error } = userData;
  console.log("User Data:", userData);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="container">
        {userData.users.length == 0 ? (
          <button id="mainButton" onClick={handleClick}>
            Get Users List
          </button>
        ) : (
          userData?.users?.map(({ name, id }) => (
            <UserPosts key={id} userName={name} userId={id} />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(User);
