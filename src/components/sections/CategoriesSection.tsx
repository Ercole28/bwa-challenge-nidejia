"use client";

import Image from "next/image";
import CustomButton from "../buttons/CustomButton";

const categories: { iconURL: string; categoryName: string; count: string }[] = [
  {
    iconURL: "/icons/categories/star-hills.png",
    categoryName: "Star Hills",
    count: "18,394",
  },
  {
    iconURL: "/icons/categories/apartment.png",
    categoryName: "Apartment",
    count: "18,394",
  },
  {
    iconURL: "/icons/categories/nearby-city.png",
    categoryName: "Nearby City",
    count: "18,394",
  },
  {
    iconURL: "/icons/categories/landed-house.png",
    categoryName: "Landed House",
    count: "18,394",
  },
  {
    iconURL: "/icons/categories/airport.png",
    categoryName: "Airport",
    count: "18,394",
  },
  {
    iconURL: "/icons/categories/awards.png",
    categoryName: "Awards",
    count: "18,394",
  },
  {
    iconURL: "/icons/categories/sunset.png",
    categoryName: "Sunsets",
    count: "18,394",
  },
  {
    iconURL: "/icons/categories/others.png",
    categoryName: "Others",
    count: "18,394",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#141414] py-[50px]">
      <div className="custom__container flex flex-col items-center gap-y-[30px]">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <div className="flex w-fit flex-col items-start justify-center text-start">
            <h3 className="text-[28px] font-bold text-white">Categories</h3>
            <p className="text-lg text-[#A8A8A8]">We provide everything</p>
          </div>
          <CustomButton text="Explore All" variant="primary" />
        </div>

        {/* Categories */}
        <div className="grid w-full grid-cols-4 gap-[30px]">
          {categories.map((item) => (
            <div
              key={item?.categoryName}
              className="flex w-full items-center gap-x-4 rounded-[20px] bg-[#202020] px-5 py-4"
            >
              <div className="relative aspect-square h-9 w-9">
                <Image
                  fill
                  src={item?.iconURL}
                  alt={item?.categoryName}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-bold text-white">
                  {item?.categoryName}
                </span>
                <span className="text-[14px] text-[#A8A8A8]">
                  {item?.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
