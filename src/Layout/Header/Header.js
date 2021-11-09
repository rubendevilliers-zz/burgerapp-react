import React from "react";
import headerImage from "../../../assets/header.webp";
import headerClasses from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ openCart }) => {
  return (
    <>
      <header className={headerClasses.header}>
        <h1>Dine</h1>
        <HeaderCartButton openCart={openCart} />
      </header>
      <div className={headerClasses["main-image"]}>
        <img src={headerImage} alt="Welcome" />
      </div>
    </>
  );
};

export default Header;
