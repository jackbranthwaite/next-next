import Link from "next/link";
import React from "react";
import s from "./DesktopMenu.module.scss";

const DesktopMenu = () => {
  return (
    <div className={s.DesktopMenuContainer}>
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
  );
};

export default DesktopMenu;
