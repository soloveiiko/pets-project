import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { specialOffer } from '@utils/data';
import SpecialOfferItem from '@components/Home/SpecialOffer/SpecialOfferItem/SpecialOfferItem';
import NextArrow from '@components/Base/Arrows/NextArrow/NextArrow';
import PrevArrow from '@components/Base/Arrows/PrevArrow/PrevArrow';

const SpecialOffer = () => {
  const swipeOfferRef = useRef(null);
  useEffect(() => {
    register();
  }, []);
  useEffect(() => {
    const swiperContainer = swipeOfferRef.current;
    const params = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.next-arrow-offer',
        prevEl: '.prev-arrow-offer',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      injectStyles: [
        `
          .swiper-pagination-bullets.swiper-pagination-horizontal {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24rem;
            top: auto;
            left: 50%;
            transform: translateX(-50%);
          }
          .swiper-pagination-bullet {
            width: 16rem;
            height: 16rem;
            border-radius: 50rem;
            background-color: rgba(255, 255, 255, 0.30);
            cursor: pointer;
          }
          .swiper-pagination-bullet-active {
            background-color: white;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="main-page__special-offer special-offer">
      <div className="special-offer__container container">
        <swiper-container ref={swipeOfferRef} init="false">
          {specialOffer.map((slide) => (
            <swiper-slide key={slide.id}>
              <SpecialOfferItem slide={slide} />
            </swiper-slide>
          ))}
        </swiper-container>
        <PrevArrow className="prev-arrow-offer" />
        <NextArrow className="next-arrow-offer" />
      </div>
    </section>
  );
};

export default SpecialOffer;
