import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <div className="header">
      <img src="logo.png" alt="moviedux" className="logo" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.{" "}
      </h2>
    </div>
  );
};

export default Header;
