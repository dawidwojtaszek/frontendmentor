"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import TestimonialsCard from "./testimonials-card";
import "swiper/css";
import avatarAli from "../../public/images/avatar-ali.png";
import avatarAnisha from "../../public/images/avatar-anisha.png";
import avatarRichard from "../../public/images/avatar-richard.png";
import avatarShanai from "../../public/images/avatar-shanai.png";
import Button from "./button";
// import SliderNavigation from "./slider-navigation";

const TestimonialsSection = () => (
  <div className="md:mt-[-160px] mt-10" role="none presentation">
    <div className="flex justify-center mb-[70px]" role="none presentation">
      <h2 className="text-darkBlue font-bold text-4xl">What they’ve said</h2>
    </div>
    <div role="none presentation">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop
        pagination={{ type: "bullets" }}
        breakpoints={{ 770: { slidesPerView: 2.7 } }}
      >
        {/* <SliderNavigation /> */}
        <SwiperSlide>
          <TestimonialsCard
            img={avatarAli}
            name="Ali Bravo"
            text="“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsCard
            img={avatarRichard}
            name="Richard Watts"
            text="“Manage allows us to provide structure and process. It keeps us organized 
            and focused. I can’t stop recommending them to everyone I talk to!”"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsCard
            img={avatarShanai}
            name="Shanai Gough"
            text="“Their software allows us to track, manage and collaborate on our projects 
            from anywhere. It keeps the whole team in-sync without being intrusive.”"
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialsCard
            img={avatarAnisha}
            name="Anisha Li"
            text="“Manage has supercharged our team’s workflow. The ability to maintain 
            visibility on larger milestones at all times keeps everyone motivated.”"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div className="flex justify-center my-3" role="none presentation">
      <Button>Get Started</Button>
    </div>
  </div>
);

export default TestimonialsSection;
