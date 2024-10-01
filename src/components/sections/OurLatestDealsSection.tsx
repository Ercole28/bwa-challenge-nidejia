"use client";

import React, { useRef } from "react";
import DealCard from "../cards/DealCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const latestDeals = [
  {
    imageURL: "/images/carousel/de-flecce.png",
    placeName: "De Flecce",
    price: "$47,298",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
  {
    imageURL: "/images/carousel/party-every.png",
    placeName: "Party Every",
    price: "$18,983",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
  {
    imageURL: "/images/carousel/brown-hall.png",
    placeName: "Brown Hall",
    price: "$84,209",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
  {
    imageURL: "/images/carousel/mini-max.png",
    placeName: "Mini Max",
    price: "$47,298",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
  {
    imageURL: "/images/carousel/de-flecce.png",
    placeName: "De Flecce",
    price: "$47,298",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
  {
    imageURL: "/images/carousel/party-every.png",
    placeName: "Party Every",
    price: "$18,983",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
  {
    imageURL: "/images/carousel/brown-hall.png",
    placeName: "Brown Hall",
    price: "$84,209",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
  {
    imageURL: "/images/carousel/mini-max.png",
    placeName: "Mini Max",
    price: "$47,298",
    rating: "4.5",
    sqft: "529",
    persons: "3",
    wifi: "10",
  },
];

export default function OurLatestDealsSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="pb-[100px] pt-40">
      <div className="custom__container flex flex-col items-center gap-y-[30px]">
        {/* Header */}
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h3 className="text-[28px] font-bold text-white">Our Latest Deals</h3>
          <p className="text-lg text-[#A8A8A8]">
            Explore the beauty of architecture and living love
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-auto w-full">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation!.prevEl = prevRef.current;
              swiper.params.navigation!.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            className="w-full"
          >
            {latestDeals.map((item) => (
              <SwiperSlide key={item.placeName}>
                <DealCard
                  imageURL={item?.imageURL}
                  placeName={item?.placeName}
                  price={item?.price}
                  rating={item?.rating}
                  sqft={item?.sqft}
                  persons={item?.persons}
                  wifi={item?.wifi}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Button */}
          <button
            ref={prevRef}
            className="absolute -left-[25px] top-[72px] z-10 flex aspect-square h-[50px] w-[50px] items-center justify-center rounded-full bg-[#141414] text-white duration-300 hover:bg-[#292929]"
          >
            {"<"}
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            className="absolute -right-[25px] top-[72px] z-10 flex aspect-square h-[50px] w-[50px] items-center justify-center rounded-full bg-[#141414] text-white duration-300 hover:bg-[#292929]"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
