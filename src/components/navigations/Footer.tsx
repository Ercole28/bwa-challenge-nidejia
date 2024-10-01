"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  solutions: [
    {
      label: "Credit Rewards",
      href: "#",
    },
    {
      label: "P2P Renting",
      href: "#",
    },
    {
      label: "COpen for Listing",
      href: "#",
    },
    {
      label: "AI Automation",
      href: "#",
    },
    {
      label: "APIs Developer",
      href: "#",
    },
  ],
  product: [
    {
      label: "Featured House",
      href: "#",
    },
    {
      label: "Browse Categories",
      href: "#",
    },
    {
      label: "Special Awards",
      href: "#",
    },
    {
      label: "Made-In Bandung",
      href: "#",
    },
    {
      label: "Exclusive Style",
      href: "#",
    },
  ],
  company: [
    {
      label: "About Us",
      href: "#",
    },
    {
      label: "Our Investors",
      href: "#",
    },
    {
      label: "Mission 2024",
      href: "#",
    },
    {
      label: "Careers",
      href: "#",
    },
    {
      label: "Media Press",
      href: "#",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#141414] py-[100px]">
      <div className="custom__container flex flex-col items-center gap-y-[50px]">
        {/* Up */}
        <div className="flex w-full items-center justify-between">
          {/* Links */}
          <div className="flex flex-col gap-y-3">
            <span className="font-semibold text-white">Solutions</span>
            <ul className="flex flex-col gap-y-3">
              {footerLinks.solutions.map((item) => (
                <li key={item?.label}>
                  <Link
                    href={item?.href}
                    className="font-normal text-[#A8A8A8] hover:font-semibold hover:text-[#FF9357]"
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="font-semibold text-white">Product</span>
            <ul className="flex flex-col gap-y-3">
              {footerLinks.product.map((item) => (
                <li key={item?.label}>
                  <Link
                    href={item?.href}
                    className="font-normal text-[#A8A8A8] hover:font-semibold hover:text-[#FF9357]"
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="font-semibold text-white">Company</span>
            <ul className="flex flex-col gap-y-3">
              {footerLinks.company.map((item) => (
                <li key={item?.label}>
                  <Link
                    href={item?.href}
                    className="font-normal text-[#A8A8A8] hover:font-semibold hover:text-[#FF9357]"
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email & Language */}
          <div className="flex w-full max-w-[447px] flex-col gap-y-[30px]">
            <div className="flex w-full flex-col gap-y-3">
              <span className="font-semibold text-white">
                Subscribe & Free Rewards
              </span>
              <div className="relative h-[48px] w-full overflow-hidden rounded-full">
                <div className="absolute left-5 top-1/2 aspect-square h-6 w-6 -translate-y-1/2">
                  <Image
                    fill
                    src="/icons/email.png"
                    alt="Email"
                    className="object-contain"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search by city or country"
                  className="h-full w-full bg-[#F5F6F8] pl-[54px] text-base text-black placeholder:text-[#7D7B91] focus:border-none focus:outline-none"
                />
                <button className="absolute right-0 top-0 z-10 h-full w-[155px] rounded-full bg-[#FF9357] text-base font-bold text-black duration-300 hover:bg-[#e77f47]">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex w-full flex-col gap-y-3">
              <span className="font-semibold text-white">Choose Language</span>
              <div className="flex items-center gap-x-[10px]">
                <div className="relative aspect-[26.67/20] h-[20px]">
                  <Image
                    fill
                    src="/icons/languages/English.png"
                    alt="Flag"
                    className="object-contain"
                  />
                </div>
                <span className="text-base text-white">English (UK)</span>
                <div className="relative aspect-square h-[18px] w-[18px]">
                  <Image
                    fill
                    src="/icons/down-arrow.png"
                    alt="Down Arrow"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-[#353535]"></div>

        {/* Bottom */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-x-[10px]">
            <div className="relative aspect-square h-9 w-9">
              <Image
                fill
                src="/logo.png"
                alt="Logo"
                className="object-contain"
              />
            </div>
            <h1 className="text-[24px] font-bold text-white">Nidejia</h1>
          </div>

          <span className="text-base text-[#A8A8A8]">
            All Rights Reserved Nidejia BuildWithAngga 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
