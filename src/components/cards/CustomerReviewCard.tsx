import Image from "next/image";

export default function CustomerReviewCard({
  rating,
  reviewText,
  imageURL,
  fullname,
  job,
}: {
  rating: number;
  reviewText: string;
  imageURL: string;
  fullname: string;
  job: string;
}) {
  const stars = Array.from({ length: rating });

  return (
    <div className="flex w-full flex-col gap-y-5 rounded-[20px] bg-[#141414] px-5 py-4">
      <div className="flex items-center">
        {stars.map((_, index) => (
          <div key={index} className="relative aspect-square h-5 w-5">
            <Image
              fill
              src="/icons/star.png"
              alt="Star"
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <p className="text-lg leading-[32px] text-white">{reviewText}</p>
      <div className="flex w-full items-center gap-x-3 rounded-[20px]">
        <div className="relative aspect-square h-[50px] w-[50px] overflow-hidden rounded-full">
          <Image
            fill
            src={imageURL}
            alt={fullname + "Profile Picture"}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-white">{fullname}</span>
          <span className="text-[14px] text-[#A8A8A8]">{job}</span>
        </div>
      </div>
    </div>
  );
}
