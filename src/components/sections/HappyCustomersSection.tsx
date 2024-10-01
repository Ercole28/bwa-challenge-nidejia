import CustomerReviewCard from "../cards/CustomerReviewCard";

export default function HappyCustomerSection() {
  return (
    <section className="pb-[100px] pt-0">
      <div className="custom__container flex flex-col items-center gap-y-[30px]">
        {/* Header */}
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h3 className="text-[28px] font-bold text-white">Happy Customers</h3>
          <p className="text-lg text-[#A8A8A8]">
            We&apos;d love to come back again soon
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-x-[30px]">
          {/* Left */}
          <div className="flex w-full flex-col gap-y-[30px]">
            <CustomerReviewCard
              rating={4}
              reviewText="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
            <CustomerReviewCard
              rating={4}
              reviewText="It’s just amazing, will be back."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
            <CustomerReviewCard
              rating={4}
              reviewText="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
          </div>
          {/* Center */}
          <div className="flex w-full flex-col gap-y-[30px]">
            <CustomerReviewCard
              rating={4}
              reviewText="Price was too low yet luxury."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
            <CustomerReviewCard
              rating={4}
              reviewText="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
            <CustomerReviewCard
              rating={4}
              reviewText="During covid I was stayed here and I got a lot of full of supports that I need to keep my body healthy."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
          </div>
          {/* Right */}
          <div className="flex w-full flex-col gap-y-[30px]">
            <CustomerReviewCard
              rating={4}
              reviewText="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
            <CustomerReviewCard
              rating={4}
              reviewText="It’s just amazing, will be back."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
            <CustomerReviewCard
              rating={4}
              reviewText="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              imageURL="/images/user.png"
              fullname="Evelin Bie"
              job="Full-Time Traveler"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
