import React, { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu/MobileMenu";
import s from "./Header.module.scss";
import DesktopMenu from "./desktop-menu/DesktopMenu";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [width, setWidth] = useState();
  const router = useRouter();

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
      {router.pathname !== "/" && (
        <Link href={"/"}>
          <a>
            <div className={s.LogoContainer}></div>
          </a>
        </Link>
      )}
      {width < 720 && <MobileMenu />}
      {width > 720 && <DesktopMenu />}
    </div>
  );
};

export default Header;
