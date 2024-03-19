import TwitterLogo from "./social-icons/twitter";
import FacebookLogo from "./social-icons/facebook";
import YoutubeLogo from "./social-icons/youtube";
import PinterestLogo from "./social-icons/pinterest";
import InstagramLogo from "./social-icons/instagram";
import Link from "next/link";
import NewsletterForm from "./newsletter-form";
import LogoMono from "./logo-mono";

const Footer = () => (
  <footer className=" bg-veryDarkBlue mx-auto text-white  md:py-[55px] md:h-[250px]">
    <div className="max-w-[1110px] mx-auto flex flex-col-reverse w-full h-full px-6 pt-12 items-center  md:items-start md:pt-0 md:px-0 md:flex-row md:justify-between">
      <div
        className="flex flex-col-reverse justify-between  h-full items-center md:flex-col  "
        role="none presentation"
      >
        <LogoMono color="white" />
        <div
          className="flex justify-between mb-10 w-[300px] md:mb-0 md:w-[160px]"
          role="none presentation"
        >
          <Link href="#">
            <FacebookLogo />
          </Link>
          <Link href="#">
            <YoutubeLogo />
          </Link>
          <Link href="#" className=" hover:text-brightRed">
            <TwitterLogo />
          </Link>
          <Link href="#">
            <PinterestLogo />
          </Link>
          <Link href="#">
            <InstagramLogo />
          </Link>
        </div>
      </div>
      <div
        className="flex justify-between w-[270px] h-full mb-12 md:mb-0 md:w-[380px]"
        role="none presentation"
      >
        <ul className="h-full flex justify-start flex-col">
          <li className="text-white mb-4 hover:text-brightRed">
            <a href="#">Home</a>
          </li>
          <li className="text-white mb-4 hover:text-brightRed">
            <a href="#">Pricing</a>
          </li>
          <li className="text-white mb-4 hover:text-brightRed">
            <a href="#">Products</a>
          </li>
          <li className="text-white mb-4 hover:text-brightRed">
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul className="h-full flex justify-start flex-col">
          <li className="text-white mb-4 hover:text-brightRed">
            <a href="#">Careers</a>
          </li>
          <li className="text-white mb-4 hover:text-brightRed">
            <a href="#">Community</a>
          </li>
          <li className="text-white mb-4 hover:text-brightRed">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div
        className="flex flex-col justify-between h-full"
        role="none presentation"
      >
        <NewsletterForm />
        <p className=" text-darkGrayishBlue hidden text-right md:block">
          Copyright 2020. All rights Reserved
        </p>
      </div>
    </div>
    <p className=" text-darkGrayishBlue  text-center py-4 md:hidden ">
      Copyright 2020. All rights Reserved
    </p>
  </footer>
);

export default Footer;
