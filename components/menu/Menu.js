import React, { useState, useEffect, useRef } from "react";
import s from "./Menu.module.scss";
import gsap from "gsap";

const Menu = () => {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  const timeline = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    timeline
      .to(two.current, { opacity: 0, x: -20 }, 0)
      .to(one.current, { y: 4, rotate: "45deg" }, 0)
      .to(three.current, { y: -4, rotate: "-45deg" }, 0);
  });

  const handleMenuClick = () => {
    timeline.reversed() ? timeline.play() : timeline.reverse();
  };

  return (
    <div className={s.MenuContainer} onClick={handleMenuClick}>
      <span className={s.MenuLine} ref={one}></span>
      <span className={s.MenuLine} ref={two}></span>
      <span className={s.MenuLine} ref={three}></span>
    </div>
  );
};

export default Menu;
