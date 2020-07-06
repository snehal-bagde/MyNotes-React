import React from "react";
import Logo from "./image/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo" width="70" height="50" />
        <h1> My Notes </h1>
      </div>
    </>
  );
};

export default Header;
