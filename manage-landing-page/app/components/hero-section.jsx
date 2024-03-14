import Image from "next/image";
import HeroImage from "../../public/images/illustration-intro.svg";
import Button from "./button";
const HeroSection = () => (
  <div className="flex flex-col-reverse w-full items-center md:flex-row md:justify-between md:min-h-[700px] mb-[60px]">
    <div className="md:max-w-[450px] flex flex-col items-center md:items-start bg-mobile-main-pattern bg-no-repeat bg-[length:448px_448px] bg-[top_-100px_right_-313px] px-6 md:px-0 md:bg-none ">
      <h1 className="  text-darkBlue font-bold text-5xl">
        Bring everyone together to build better products.
      </h1>
      <p className="my-[40px] text-darkGrayishBlue md:max-w-[350px] text-center md:text-left">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <Button>Get Started</Button>
    </div>
    <div>
      <Image src={HeroImage} alt="illustration" />
    </div>
  </div>
);

export default HeroSection;
