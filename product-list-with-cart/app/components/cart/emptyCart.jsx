import emptyCardImage from "../../../public/images/illustration-empty-cart.svg";
import Image from "next/image";
const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="my-8">
        <Image src={emptyCardImage} alt="empty cart image" />
      </div>
      <p className="text-rose900 font-semibold">
        Your added items will appear here
      </p>
    </div>
  );
};

export default EmptyCart;
