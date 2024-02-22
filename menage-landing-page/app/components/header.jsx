import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import hamburger from "../../public/images/icon-hamburger.svg";
import Button from "./button";
const Header = () => (
  <header className=" h-[110px] flex justify-between items-center">
    <Link href={"/"}>
      <Image src={logo} alt="Logo" priority={true} />
    </Link>
    <nav className="hidden md:flex">
      <ul className="flex justify-between">
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
          <Link href={"#"}>Carasdf</Link>
        </li>
        <li>
          <Link href={"#"}>Pricing</Link>
        </li>
      </ul>
      <Button>Get Started</Button>
    </nav>
    <button className=" md:hidden">
      <Image src={hamburger} alt="menu-button" />
    </button>
  </header>
);

export default Header;
