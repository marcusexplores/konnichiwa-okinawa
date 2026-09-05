import Image from 'next/image';
import desktopBanner from '@/public/images/hero-desktop.png';
import mobileBanner from '@/public/images/hero-mobile.png';

export const HeroBanner = () => {
  return (
    <div className="relative h-[calc(100svh+12rem)] overflow-hidden">
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
        src={mobileBanner}
        alt="Hero Banner"
        width={0}
        height={0}
        priority
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <Image
        src={desktopBanner}
        alt="Hero Banner"
        width={0}
        height={0}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />
      {/* <img
          src="/images/hero-desktop.png"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        /> */}
      {/* Bottom blend — anchored to this container's own bottom edge, always correct regardless of viewport */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-[#6ac9dc] via-[#6ac9dc]/60 to-transparent" />
    </div>
  );
};
