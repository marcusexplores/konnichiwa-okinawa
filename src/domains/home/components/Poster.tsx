import Image from 'next/image';

interface PosterProps {
  src: any;
  alt: string;
}

export const Poster = ({ src, alt }: PosterProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-full h-auto aspect-2/3 object-cover rounded-2xl"
    />
  );
};

