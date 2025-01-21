import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="px-[100px] py-[4px] w-full border border-red-500">
        <div class="container mx-auto flex items-center justify-between">
          {/* logo section */}
          <a href="/" class="flex items-center" aria-label="Home">
            <h1 class="font-family font-bold">Logo</h1>
          </a>

          {/* navigation links */}
          <div class="hidden md:flex space-x-6">
            <a
              href="#explore"
              class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
            >
              Explore
            </a>
            <a
              href="#make-a-plan"
              class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
            >
              Make a plan
            </a>
            <a
              href="#reviews"
              class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
            >
              Reviews
            </a>
            <a
              href="#more"
              class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
            >
              More
            </a>
          </div>

          {/* buttons */}

          <div class="space-x-4 flex">
            <button class=" hidden md:inline-block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium w-[89px] h-[48px] px-4 py-2 rounded-[400px] bg-[#e2e2e2] text-center">
              Log In
            </button>
            <button class="hidden md:inline-block bg-custom-gradient text-[#ffffff] text-xs tracking-[0.5px] font-family font-medium w-[89px] h-[48px] px-4 py-2 rounded-[400px] bg-[#e2e2e2] text-center">
              Sign Up
            </button>
          </div>
        </div>
        {/* mobile navigation links */}
        {/* <div class="md:hidden mt-4 space-y-2">
          <a
            href="#explore"
            class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
          >
            Explore
          </a>
          <a
            href="#make-a-plan"
            class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
          >
            Make a plan
          </a>
          <a
            href="#reviews"
            class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
          >
            Reviews
          </a>
          <a
            href="#more"
            class="block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium hover:text-black"
          >
            More
          </a>

          <button class=" block text-[#1b1b1e] text-xs tracking-[0.5px] font-family font-medium w-[89px] h-[48px] px-4 py-2 rounded-[400px] bg-[#e2e2e2] text-center">
            Log In
          </button>
          <button class="block bg-custom-gradient text-[#ffffff] text-xs tracking-[0.5px] font-family font-medium w-[89px] h-[48px] px-4 py-2 rounded-[400px] bg-[#e2e2e2] text-center">
            Sign Up
          </button>
        </div> */}
      </nav>
    </>
  );
}
