import React, { useState, useEffect, useRef } from "react";
import s from "./MobileMenu.module.scss";
import gsap from "gsap";
import Link from "next/link";

const Menu = () => {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const menu = useRef(null);
  const menuItem = useRef(null);

  const timeline = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    timeline
      .to(two.current, { opacity: 0, x: -20, duration: 0.5 }, 0)
      .to(one.current, { y: 4, rotate: "45deg", duration: 0.5 }, 0)
      .to(three.current, { y: -4, rotate: "-45deg", duration: 0.5 }, 0)
      .to(menu.current, { visibility: "visible", opacity: 1 }, 0.5);
  });

  const handleMenuClick = () => {
    timeline.reversed() ? timeline.play() : timeline.reverse();
  };

  return (
    <div className={s.MenuContainer} onClick={() => handleMenuClick()}>
      <span className={s.MenuLine} ref={one}></span>
      <span className={s.MenuLine} ref={two}></span>
      <span className={s.MenuLine} ref={three}></span>

      <div className={s.Menu} ref={menu}>
        <Link href={"/portfolio"}>
          <a className={s.MenuItem}>portfolio</a>
        </Link>
        <Link href={"/about"}>
          <a className={s.MenuItem}>about</a>
        </Link>
        <Link href={"/contact"}>
          <a className={s.MenuItem}>contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
