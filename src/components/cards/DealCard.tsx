import React from "react";
import Image from "next/image";

export default function DealCard({
  imageURL,
  placeName,
  price,
  rating,
  sqft,
  persons,
  wifi,
}: {
  imageURL: string;
  placeName: string;
  price: string;
  rating: string;
  sqft: string;
  persons: string;
  wifi: string;
}) {
  return (
    <div className="group relative h-[350px] w-[260px] overflow-hidden rounded-[24px]">
      {/* Cover Image */}
      <div className="absolute left-0 top-0 z-10 h-full w-full">
        <Image
          fill
          src={imageURL}
          alt="Deal Image"
          className="object-cover duration-500 group-hover:rotate-2 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="absolute z-20 flex h-full w-full items-end bg-gradient-to-b from-white/10 from-[46%] to-[#050211] to-[87%] p-5">
        <div className="flex w-full flex-col gap-y-[14px]">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[20px] font-bold text-white">
                {placeName}
              </span>
              <span className="text-[14px] font-semibold text-white">
                {price}
                <span className="font-normal">/mo</span>
              </span>
            </div>
            <div className="flex items-center gap-x-0.5">
              <div className="relative aspect-square h-5 w-5">
                <Image
                  fill
                  src="/icons/star.png"
                  alt="Star"
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] font-normal text-white">
                {rating}/5
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-x-0.5">
              <div className="relative aspect-square h-[18px] w-[18px]">
                <Image
                  fill
                  src="/icons/sqft.png"
                  alt="SQFT"
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] font-normal text-white">
                {sqft} sqft
              </span>
            </div>
            <div className="flex items-center gap-x-0.5">
              <div className="relative aspect-square h-[18px] w-[18px]">
                <Image
                  fill
                  src="/icons/persons.png"
                  alt="Persons"
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] font-normal text-white">
                {persons}
              </span>
            </div>
            <div className="flex items-center gap-x-0.5">
              <div className="relative aspect-square h-[18px] w-[18px]">
                <Image
                  fill
                  src="/icons/wifi.png"
                  alt="WiFi"
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] font-normal text-white">
                {wifi}gb
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
