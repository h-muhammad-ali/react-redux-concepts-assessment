import React from "react";
import { fetchUserPosts } from "../redux/userPosts/userPostsActions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";

const UserPosts = (props) => {
  const [postsVisibility, setPostsVisibility] = useState(false);
  const togglePosts = () => {
    props.fetchUserPosts();
    setPostsVisibility(!postsVisibility);
  };
  const styles = {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "50%",
  };
  
  return (
    <div>
      <button
        style={styles}
        className="users"
        onClick={() => togglePosts()}
      >
        {props?.userName}
      </button>
      {postsVisibility ? (
        <div id={`user${props?.userId}`}>
          {props.userPostsData.userPosts
            ?.filter(({ userId }) => userId === props?.userId)
            .map(({ userId, id, title, body }) => (
              <SinglePost
                key={id}
                postId={id}
                postUserId={userId}
                postTitle={title}
                postBody={body}
              />
            ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    userPostsData: state.userPosts,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    fetchUserPosts: () => dispatch(fetchUserPosts()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(UserPosts);
