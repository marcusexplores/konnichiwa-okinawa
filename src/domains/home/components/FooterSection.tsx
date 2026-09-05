import Image from 'next/image';
import footerBackground from '@/public/images/footer-corals.png';

export const FooterSection = () => {
  return (
    <section>
      <Image
        src={footerBackground}
        alt="Footer Background"
        width={0}
        height={0}
        className="w-full object-cover"
      />
    </section>
  );
};
