"use client";

import Image from "next/image";
import CustomButton from "../buttons/CustomButton";
import BenefitCard from "../cards/BenefitCard";

const benefits: string[] = [
  "Checking faster without depositing",
  "24/7 security guarding your place",
  "Fast-internet access without lagging",
  "High standard of layout of houses",
  "All other benefits, we promise",
];

const benefitCards = [
  {
    imageURL: "/images/benefits/house-for-office-and-living.png",
    title: "House for Office and Living",
    count: "18,309",
  },
  {
    imageURL: "/images/benefits/house-nearby-with-mall.png",
    title: "House Nearby with Mall",
    count: "18,309",
  },
  {
    imageURL: "/images/benefits/house-historical-building.png",
    title: "House Historical Building",
    count: "18,309",
  },
  {
    imageURL: "/images/benefits/landed-house-with-park.png",
    title: "Landed House with Park",
    count: "18,309",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-[100px]">
      <div className="custom__container flex items-center justify-between">
        {/* Left */}
        <div className="flex w-full max-w-[390px] flex-col items-start justify-center gap-y-[30px]">
          <div className="flex w-fit flex-col items-start justify-center text-start">
            <h3 className="w-full max-w-[330px] text-[28px] font-bold text-white">
              Huge Benefits That Make You Feel Happier
            </h3>
          </div>
          <ul className="flex w-full flex-col gap-y-5">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-x-3">
                <div className="relative aspect-square h-9 w-9">
                  <Image
                    fill
                    src="/icons/check.png"
                    alt="Check"
                    className="object-contain"
                  />
                </div>
                <span className="text-nowrap text-lg font-semibold text-white">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex w-fit items-center gap-x-[14px]">
            <CustomButton
              text="Call Sales"
              variant="primary"
              withIcon={true}
              iconURL="/icons/call-sales.png"
            />
            <CustomButton text="All Benefits" variant="secondary" />
          </div>
        </div>

        {/* Right */}
        <div className="grid w-full max-w-[650px] grid-cols-2 gap-[30px]">
          {benefitCards.map((item) => (
            <BenefitCard
              key={item.title}
              imageURL={item?.imageURL}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
