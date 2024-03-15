import Link from "next/link";
const MobileNavigation = () => (
  <div
    className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-veryLightGray/20 to-darkBlue/75 flex flex-col md:hidden"
    role="none presentation"
  >
    <div className="h-[100px] w-full px-6" role="none presentation"></div>
    <div
      className="bg-veryLightGray rounded-md mx-6 py-10"
      role="none presentation"
    >
      <nav>
        <ul className="w-full flex flex-col items-center gap-7">
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
    </div>
  </div>
);

export default MobileNavigation;
