import Image, { type StaticImageData } from 'next/image';

interface PosterProps {
  src: StaticImageData;
  alt: string;
}

export const Poster = ({ src, alt }: PosterProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="aspect-2/3 h-auto w-full rounded-2xl object-cover"
    />
  );
};
