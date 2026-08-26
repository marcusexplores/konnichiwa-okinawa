"use client";

import { HeroBanner, PosterSection, TripStatSection } from "./components";

export const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="relative min-h-screen text-slate-100 py-24 bg-[linear-gradient(to_bottom,#6ac9dc_0%,#4bbdd2_4%,#2badc6_10%,#1a97b3_18%,#12809d_30%,#0d6a87_44%,#085469_58%,#053e52_72%,#03283a_85%,#020a0f_100%)]">
        <div className="max-w-4xl mx-auto space-y-10">
          <TripStatSection />
        </div>

        <PosterSection />

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
      </div>
    </div>
  );
};