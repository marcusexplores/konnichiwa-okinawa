import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface GuideActionCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  link: string;
}

export const GuideActionCard = ({
  title,
  description,
  image,
  imageAlt,
  link,
}: GuideActionCardProps) => {
  return (
    <Link href={link}>
      <div className="bg-brand-primary flex h-full flex-col items-center gap-3 rounded-md px-3 py-4">
        <div className="w-18">
          <Image
            src={image}
            alt={imageAlt}
            width={0}
            height={0}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="text-base font-medium">{title}</div>
          <div className="text-on-muted text-xs">{description}</div>
        </div>
      </div>
    </Link>
  );
};
