import React from "react";
import Top from "./Top.png";

export default function HeroSection() {
  return (
    <section class="py-12 px-6 md:py-16 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto flex  flex-col md:flex-row items-center gap-8">
        {/* text-section */}
        <div class="text-center md:text-left flex-1">
          <h2 class="text-2xl md:text-4xl font-bold font-family text-[#1b1b1e] leading-[44px]">
            We Know What You'd <br />
            <span class="text-[#1b1b1e]">Love Next</span>
          </h2>
          <p class="mt-2 md: text-[#777777] text-[16px] font-family font-medium leading-[24px] tracking-[0.5px]">
            Lorem ipsum dolor sit amet consectetur. Nunc duis <br /> vulputate
            sit. Dui gravida sed tempor pulvinar.
          </p>
          <div class="mt-6">
            <button class="bg-custom-gradient text-[#ffff] text-xs tracking-[0.5px] font-medium font-family w-[150px] h-[48px] px-4 rounded-[400px] text-center">
              Get Started
            </button>
          </div>
        </div>
        {/* image section */}
        <div class="flex justify-center flex-1">
          <img
            src={Top}
            alt="travel mosaic mockup"
            class="w-3/4 md:w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
