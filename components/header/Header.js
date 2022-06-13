import React, { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu/MobileMenu";
import s from "./Header.module.scss";
import DesktopMenu from "./desktop-menu/DesktopMenu";

const Header = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.HeaderContainer}>
      {width < 720 && <MobileMenu />}
      {width > 720 && <DesktopMenu />}
    </div>
  );
};

export default Header;
