import React from "react";
import heroImage from "./hero.png";
export default function Hero() {
  return (
    <section class="text-[#f9f9fe]">
      <div class="container mx-auto px-4 py-3 text-center">
        {/* Heading section */}
        <h1 class="text-[45px] leading-[52px] md:text-5xl font-bold font-family text-[#161C23]">
          Where Your Journey
          <br />
          Becomes A{" "}
          <span class="italic font-family font-[400]">Masterpiece</span>
        </h1>
        {/* subheading */}
        <p class="mt-4 font-family font-medium leading-6 tracking-[0.5px] text-[#777777] text-base md:text-lg max-w-2xl mx-auto">
          The world is your canvas, and Travel Mosaic is your palette. With us,
          you’re not just planning a trip—you’re crafting an experience that’s
          authentically yours.{" "}
        </p>
        {/* buttons section */}
        <div class="mt-4 flex justify-center space-x-4">
          <button class="hidden md:inline-block bg-custom-gradient text-[#ffff] text-xs tracking-[0.5px] font-medium font-family w-[150px] h-[48px] px-4 rounded-[400px] text-center">
            Start Planning
          </button>
          <button class="hidden md:inline-block bg-[#e2e2e2] text-[#1b1b1e] text-xs tracking-[0.5px] font-medium font-family w-[150px] h-[48px] px-4 rounded-[400px] text-center">
            Log In
          </button>
        </div>
        <div class="mt-8">
          <img src={heroImage} alt="travel image" class="w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
