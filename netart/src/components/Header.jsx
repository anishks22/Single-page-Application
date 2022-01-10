import React from "react";
import "./Combined.css";
import logo from "./Image/logo.png";


function Header() {
  return (
    <>
      <header className="App-header">
        <div className="center">
          <img src={logo} className="logo" alt="logo" />
        </div>

      </header>
    </>
  );
}
export default Header;
