"use client";

import Image from 'next/image';

import heroMobile from "@/public/images/hero-mobile.png";

export const Home = () => {
  return (
    <div>
      {/* <div className="relative h-dvh overflow-hidden"></div> */}
      <div className="relative h-[calc(100dvh+12rem)] overflow-hidden">
        {/* <img
          src="/images/hero-mobile.png"
          alt="Hero Banner"
          className="w-full h-auto object-cover md:hidden"
        /> */}
        {/* <img
          src="/images/hero-mobile.png"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        /> */}
        <Image
          src={heroMobile}
          alt="Hero Banner"
          width={0}
          height={0}
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        <Image
          src="/images/hero-desktop.png"
          alt="Hero Banner"
          width={0}
          height={0}
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        {/* <img
          src="/images/hero-desktop.png"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        /> */}
        {/* Bottom blend — anchored to this container's own bottom edge, always correct regardless of viewport */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-[#6ac9dc] via-[#6ac9dc]/60 to-transparent" />
      </div>
      {/* Content Section below Hero: Standard page scroll resumes once sea reaches bottom */}
      <section className="relative min-h-screen text-slate-100 px-6 py-24 bg-[linear-gradient(to_bottom,#6ac9dc_0%,#4bbdd2_4%,#2badc6_10%,#1a97b3_18%,#12809d_30%,#0d6a87_44%,#085469_58%,#053e52_72%,#03283a_85%,#020a0f_100%)]">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Welcome to Okinawa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};