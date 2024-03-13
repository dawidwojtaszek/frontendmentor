"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import hamburger from "../../public/images/icon-hamburger.svg";
import closeBtn from "../../public/images/icon-close.svg";
import Button from "./button";
import MobileNavigation from "./mobile-navigation";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <header className=" h-[110px] flex justify-between items-center">
      <Link href={"/"} className=" z-50">
        <Image src={logo} alt="Logo" priority={true} />
      </Link>
      <nav className="hidden md:flex">
        <ul className="flex justify-between gap-7">
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Product</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Careers</Link>
          </li>
          <li>
            <Link href={"#"}>Community</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex">
        <Button>Get Started</Button>
      </div>
      {mobileMenu ? <MobileNavigation /> : ""}

      <button className=" md:hidden z-50" onClick={handleClick}>
        {mobileMenu ? (
          <Image src={closeBtn} alt="close-menu" />
        ) : (
          <Image src={hamburger} alt="menu-button" />
        )}
      </button>
    </header>
  );
};
export default Header;
