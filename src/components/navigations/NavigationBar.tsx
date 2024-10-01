"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../buttons/CustomButton";

const navigationLinks: { label: string; href: string }[] = [
  {
    label: "Featured",
    href: "/",
  },
  {
    label: "Categories",
    href: "/",
  },
  {
    label: "Testimonials",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
];

export default function NavigationBar() {
  return (
    <header className="custom__container fixed left-1/2 top-[30px] z-[999] -translate-x-1/2">
      <div className="flex w-full items-center justify-between rounded-[20px] bg-[#141414] px-[30px] py-6">
        {/* logo */}
        <div className="flex items-center gap-x-[10px]">
          <div className="relative aspect-square h-9 w-9">
            <Image fill src="/logo.png" alt="Logo" className="object-contain" />
          </div>
          <h1 className="text-[24px] font-bold text-white">Nidejia</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center justify-center gap-x-[30px]">
            {navigationLinks.map((item) => (
              <li key={item?.label}>
                <a
                  href={item?.href}
                  className="text-base font-semibold text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTAs */}
        <div className="flex w-fit items-center gap-x-3">
          <CustomButton
            text="Sign In"
            variant="secondary"
            onClick={() => alert("Redirect to Sign In Page")}
          />
          <CustomButton
            text="Sign Up"
            variant="primary"
            onClick={() => alert("Redirect to Sign Up Page")}
          />
        </div>
      </div>
    </header>
  );
}
