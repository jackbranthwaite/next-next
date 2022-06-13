import React from "react";
import Menu from "../menu/Menu";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.HeaderContainer}>
      <Menu />
    </div>
  );
};

export default Header;
