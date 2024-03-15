import Image from "next/image";
const TestimonialsCard = ({ img, name, text }) => (
  <div
    className=" bg-testimonialsBackground text-darkGrayishBlue flex flex-col items-center mt-[37px] px-10 pb-10 h-[250px] md:h-[220px] mb-[50px]"
    role="none presentation"
  >
    <div className="w-[75px] h-[75px] mt-[-37px]" role="none presentation">
      <Image src={img} />
    </div>
    <div className="flex flex-col items-center mt-6" role="none presentation">
      <span className="font-bold text-darkBlue text-xl">{name}</span>
      <p className="text-center mt-6 text-sm">{text}</p>
    </div>
  </div>
);

export default TestimonialsCard;
