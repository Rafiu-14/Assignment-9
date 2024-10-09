import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className="h-64">
      <SwiperSlide>
        <img
          src="https://i.imghippo.com/files/WfZH01725985048.png"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.imghippo.com/files/uZmkU1725985101.png"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.imghippo.com/files/VMPmT1725985122.png"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
