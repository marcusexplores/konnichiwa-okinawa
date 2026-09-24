import Image from 'next/image';
import BernardThumbsup from '@/public/images/sticker-thumbsup-bernard.png';
// import MarcusThumbsup from '@/public/images/sticker-thumbsup-marcus.png';

export const Tipbox = () => {
  return (
    <div className="relative mt-8 w-full px-8">
      <Image
        src={BernardThumbsup}
        alt="Bernard Thumbsup"
        width={100}
        height={100}
        className="absolute top-0 -left-15 aspect-square max-w-none translate-x-1/2 -translate-y-1/2 object-contain"
      />
      <div className="min-h-16 rounded-lg border border-amber-400 bg-amber-100 px-16 py-4">
        This is a tipbox. Some recommendations
        <br />
        This is a tipbox. Some recommendations
        <br />
        This is a tipbox. Some recommendations
        <br />
        This is a tipbox. Some recommendations
        <br />
      </div>
    </div>
  );
};
