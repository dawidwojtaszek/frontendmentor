import TwitterLogo from "./social-icons/twitter";
import FacebookLogo from "./social-icons/facebook";
import YoutubeLogo from "./social-icons/youtube";
import PinterestLogo from "./social-icons/pinterest";
import InstagramLogo from "./social-icons/instagram";
import Link from "next/link";
import NewsletterForm from "./newsletter-form";

const Footer = () => (
  <footer className=" bg-veryDarkBlue mx-auto text-white py-[50px] md:py-[55px]">
    <div className="max-w-[1110px] mx-auto flex flex-col-reverse w-full md:flex-row md:justify-between">
      <div className="flex flex-col-reverse  md:flex-col ">
        <span>logo</span>
        <div className="flex justify-between md:max-w-[160px]">
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
      <div className="flex justify-between">
        <ul>
          <li className="text-white hover:text-brightRed">
            <a href="#">Home</a>
          </li>
          <li className="text-white hover:text-brightRed">
            <a href="#">Pricing</a>
          </li>
          <li className="text-white hover:text-brightRed">
            <a href="#">Products</a>
          </li>
          <li className="text-white hover:text-brightRed">
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul>
          <li className="text-white hover:text-brightRed">
            <a href="#">Careers</a>
          </li>
          <li className="text-white hover:text-brightRed">
            <a href="#">Community</a>
          </li>
          <li className="text-white hover:text-brightRed">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div>
        <NewsletterForm />
        <p className=" text-darkGrayishBlue hidden md:block">
          Copyright 2020. All rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
