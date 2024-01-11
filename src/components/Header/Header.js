import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="www.google.com">
          <img src=".././../AccraDeutschlogo.png" alt="Blog Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Technology</li>
          <li>Travel</li>
          <li>Lifestyle</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
