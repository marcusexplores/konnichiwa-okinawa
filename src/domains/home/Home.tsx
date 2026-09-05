'use client';

import {
  FooterSection,
  HeroBanner,
  OverviewSection,
  PosterSection,
} from './components';

export const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="relative min-h-screen bg-[linear-gradient(to_bottom,#6ac9dc_0%,#4bbdd2_4%,#2badc6_10%,#1a97b3_18%,#12809d_30%,#0d6a87_44%,#085469_58%,#053e52_72%,#03283a_85%,#020a0f_100%)] pt-24 text-slate-100">
        <OverviewSection />
        <PosterSection />
        <div className="mx-auto max-w-4xl space-y-10">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Welcome to Okinawa
          </h2>
          <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg"></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg"></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg"></div>
          </div>
        </div>
        <FooterSection />
      </div>
    </div>
  );
};
