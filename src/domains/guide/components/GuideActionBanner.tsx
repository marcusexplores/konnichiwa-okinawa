import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { PiArrowCircleRightFill } from 'react-icons/pi';

interface GuideActionBannerProps {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  link: string;
}

export const GuideActionBanner = ({
  title,
  description,
  image,
  imageAlt,
  link,
}: GuideActionBannerProps) => {
  return (
    <Link href={link}>
      <div className="bg-brand-secondary flex items-center gap-4 rounded-md p-4">
        <div className="w-18">
          <Image
            src={image}
            alt={imageAlt}
            width={0}
            height={0}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-medium">{title}</div>
          <div className="text-on-muted text-sm">{description}</div>
        </div>
        <PiArrowCircleRightFill
          className="text-brand-primary ml-auto"
          size={28}
        />
      </div>
    </Link>
  );
};
