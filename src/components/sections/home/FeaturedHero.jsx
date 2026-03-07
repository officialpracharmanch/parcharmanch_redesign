"use client";

import Image from "next/image";

export default function FeaturedHero() {
  return (
    <div className="w-full flex justify-center bg-white py-10 px-4">
      <div className="relative w-full max-w-[900px] md:h-[380px] md:flex">

        {/* Image */}
        <div className="relative w-full md:w-[70%] h-[250px] md:h-full overflow-hidden md:rounded-tl-lg md:rounded-bl-lg">
          <Image
            src="https://mm-wp-prod-uploads.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/03/01112942/PHOTO-2026-03-01-11-28-39.jpg"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>

        {/* Right background block (desktop only) */}
        <div className="hidden md:block md:w-[30%] bg-[#caa58f] rounded-r-lg"></div>

        {/* Title Card */}
        <div
          className="
          relative
          md:absolute md:right-[40px] md:top-1/2 md:-translate-y-1/2
          bg-white md:bg-[#1b1c1e]
          p-6
          w-full md:max-w-[320px]
          border-r-4 border-b-4 md:border-b-0 border-red-500
          shadow-xl
          "
        >
          <h2 className="text-[#0f172a] md:text-white text-lg md:text-xl font-semibold leading-snug">
            Rashmika Mandanna, Vijay Deverakonda Wedding: Grand Nationwide
            Celebrations With Temple Annadanam Announced
          </h2>

          <p className="text-gray-500 md:text-gray-400 text-sm mt-3">
            Mahi Pillai | 01 MAR, 2026
          </p>
        </div>
      </div>
    </div>
  );
}