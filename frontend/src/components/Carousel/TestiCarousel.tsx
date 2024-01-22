import { Swiper, SwiperSlide } from "swiper/react";
// import Slide1 from "../assets/banner1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "../styles/swiper.css";
import { Autoplay, Navigation } from "swiper/modules";
import CarouselCards from "./CarouselCards";

const swiper = () => {
  return (
    <div className="bg-third -pb-20">
        <div className="w-full p-14 flex justify-center ">
            <h2 className="text-secondary text-3xl font-bold tracking-wider">
            Témoignage de nos candidats
            </h2>
        </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper -mt-10 bg-third h-full"
      >
        <SwiperSlide>
             <CarouselCards/>
        </SwiperSlide>
        <SwiperSlide>
            <CarouselCards/>
        </SwiperSlide>
        <SwiperSlide>
            <CarouselCards/>
        </SwiperSlide>
        <SwiperSlide>
            <CarouselCards/>
        </SwiperSlide>
        <SwiperSlide>
            <CarouselCards/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;
