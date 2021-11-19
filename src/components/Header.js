import React from "react";
import "../App.css";

const Header = () => {
  const styles = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div>
      <h1>
        <a style={styles} href="index.html">
          React-Redux Concepts Assessment
        </a>
      </h1>
    </div>
  );
}

export default Header;