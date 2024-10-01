import Image from "next/image";

export default function StatCard({
  iconURL,
  statTitle,
  statDescription,
}: {
  iconURL: string;
  statTitle: string;
  statDescription: string;
}) {
  return (
    <div className="flex w-fit items-center gap-x-4">
      <div className="flex aspect-square h-[70px] w-[70px] items-center justify-center rounded-full bg-[#FF9357] duration-300 hover:bg-[#e77f47]">
        <div className="relative aspect-square h-8 w-8">
          <Image
            fill
            src={iconURL}
            alt={statTitle}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[28px] font-bold text-white">{statTitle}</span>
        <span className="text-base text-[#A8A8A8]">{statDescription}</span>
      </div>
    </div>
  );
}
