"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import bgDesktopDark from "../../../public/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../../../public/images/bg-desktop-light.jpg";
import iconSun from "../../../public/images/icon-sun.svg";
import iconMoon from "../../../public/images/icon-moon.svg";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((currentState) => !currentState);
  };
  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header>
      <div
        className="w-full h-[300px] overflow-hidden relative flex justify-center"
        role="none presentation"
      >
        <Image
          src={darkMode ? bgDesktopDark : bgDesktopLight}
          alt="Background image"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        <div
          className="absolute w-[325px] mt-[80px] flex justify-between items-center md:w-[540px]"
          role="none presentation"
        >
          <h1 className="text-white font-bold text-3xl leading-none tracking-widest my-0">
            TO DO
          </h1>
          <button onClick={toggleTheme}>
            <Image src={darkMode ? iconSun : iconMoon} alt="Toggle mode icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
