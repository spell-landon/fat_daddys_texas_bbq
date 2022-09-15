import React from 'react';
// Swiper Image Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
// Images
import bar from '../assets/images/bar.jpg';
import bbq from '../assets/images/bbq.jpg';
import grilling from '../assets/images/grilling.jpg';
import peopleEating from '../assets/images/peopleEating.jpg';
import restaurant from '../assets/images/restaurant.jpg';

export const ImageCarousel = () => {
  const images = [bar, bbq, grilling, peopleEating, restaurant];
  return (
    <Swiper
      autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      navigation={false}
      modules={[EffectFade, Autoplay]}
      effect='fade'
      className='w-full h-full max-h-[566px]'>
      {images.map((image) => {
        return (
          <SwiperSlide className=''>
            <img src={image} alt='Stuff' className='object-cover w-full' />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
