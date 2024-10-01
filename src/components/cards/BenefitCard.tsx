import React from "react";
import Image from "next/image";

export default function BenefitCard({
  imageURL,
  title,
  count,
}: {
  imageURL: string;
  title: string;
  count: string;
}) {
  return (
    <div className="group relative h-[200px] w-full overflow-hidden rounded-[24px]">
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
      <div className="absolute z-20 flex h-full w-full items-end bg-gradient-to-b from-white/20 from-[30%] to-[#050211] p-5">
        <div className="flex w-full flex-col gap-y-[14px]">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[20px] font-bold text-white">{title}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="relative aspect-square h-5 w-5">
                <Image
                  fill
                  src="/icons/persons.png"
                  alt="Persons"
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] font-normal text-white">
                {count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
