import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='gambarku' src="/jaehyun.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='gambarku' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI24MqvMlvI0lukcGKV3p9GANsccCxOiGnnw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='gambarku' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeq90CfXw62hfE-7EWS5LvgBjbGwjyl0ZqGg&s" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
