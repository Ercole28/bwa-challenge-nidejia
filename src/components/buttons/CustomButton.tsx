"use client";

import Image from "next/image";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "primary" | "secondary";
  withIcon?: boolean;
  iconURL?: string;
}

export default function CustomButton({
  text,
  variant,
  withIcon = false,
  iconURL,
  ...props
}: CustomButtonProps) {
  return (
    <button
      type="button"
      className={`${variant === "primary" ? "bg-[#FF9357] text-black hover:bg-[#e77f47]" : "bg-[#323437] text-white hover:bg-[#282a2c]"} flex items-center justify-center gap-x-[10px] rounded-full px-6 py-3 text-base font-semibold duration-300`}
      {...props}
    >
      {withIcon && (
        <div className="relative aspect-square h-5 w-5">
          <Image
            fill
            src={iconURL!}
            alt={iconURL!}
            className="object-contain"
          />
        </div>
      )}
      <span>{text}</span>
    </button>
  );
}
