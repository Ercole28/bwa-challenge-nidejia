import Image from "next/image";
import StatCard from "../cards/StatCard";

export default function MainSection() {
  return (
    <section className="relative h-[787px] w-full bg-white/10">
      {/* Background Image */}
      <div className="absolute left-0 top-0 z-10 h-full w-full">
        <Image
          fill
          src="/images/hero-background.png"
          alt="Hero Background"
          className="object-cover"
        />
      </div>
      {/* Filter */}
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-gradient-to-r from-black to-black/0"></div>

      {/* Main Content */}
      <main className="custom__container relative z-30 flex h-full w-full items-center justify-start">
        <div className="flex w-full max-w-[550px] flex-col justify-center gap-y-[50px]">
          <div className="text-start">
            <h1 className="text-[55px] font-bold text-white">
              Find Glorius Living And Loving Space
            </h1>
            <p className="mt-[10px] w-full max-w-[400px] text-lg leading-[32px] text-white">
              Dolor house comfortable si amet with cheap price that also lorem
              when you need grow.
            </p>
          </div>
          <div className="relative h-[70px] w-full overflow-hidden rounded-full">
            <input
              type="text"
              placeholder="Search by city or country"
              className="h-full w-full bg-[#141414] pl-[30px] text-[20px] text-white placeholder:text-[#A8A8A8] focus:border-none focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-full w-[155px] bg-[#FF9357] text-[20px] font-bold text-black duration-300 hover:bg-[#e77f47]">
              Explore
            </button>
          </div>
        </div>
      </main>

      {/* Nidejia Info */}
      <div className="custom__container absolute -bottom-16 left-1/2 z-40 -translate-x-1/2">
        <div className="flex w-full items-center justify-between rounded-[20px] bg-[#141414] px-[50px] py-6">
          <StatCard
            iconURL="/icons/stat-home.png"
            statTitle="382M"
            statDescription="Kos Available"
          />
          <div className="h-[80px] w-[1px] bg-[#353535]"></div>
          <StatCard
            iconURL="/icons/stat-people-happy.png"
            statTitle="9/10"
            statDescription="People Happy"
          />
          <div className="h-[80px] w-[1px] bg-[#353535]"></div>
          <StatCard
            iconURL="/icons/stat-security.png"
            statTitle="100%"
            statDescription="High Security"
          />
          <div className="h-[80px] w-[1px] bg-[#353535]"></div>
          <StatCard
            iconURL="/icons/stat-countries.png"
            statTitle="183"
            statDescription="Countries"
          />
        </div>
      </div>
    </section>
  );
}
