import { useSwiper } from "swiper/react";
const SliderNavigation = () => {
  const swiper = useSwiper();
  return (
    <div
      className=" absolute w-full h-full z-50 top-0 left-0 right-0 bottom-0 hidden md:block"
      role="none presentation"
    >
      <div className=" w-full h-full justify-between items-center flex ">
        <button onClick={() => swiper.slidePrev()}>prev</button>
        <button onClick={() => swiper.slideNext()}>next</button>
      </div>
    </div>
  );
};

export default SliderNavigation;
