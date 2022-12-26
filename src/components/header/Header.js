import React from "react";
import "./Header.css";

const Header = ({ xyz = "" }) => {
  return (
    <div>
      <span>{xyz} in header</span>
    </div>
  );
};

export default Header;
