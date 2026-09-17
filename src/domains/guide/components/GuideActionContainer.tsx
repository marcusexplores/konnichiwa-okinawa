import { routes } from '@/src/common/utilities/routes';
import { GuideActionBanner } from './GuideActionBanner';
import { GuideActionCard } from './GuideActionCard';
import checklistIcon from '@/public/images/guide-icon-checklist.png';

export const GuideActionContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <GuideActionBanner
        title="Packing List"
        description="Essential checklist for our trip"
        image={checklistIcon}
        imageAlt="Packing List Action Banner Icon"
        link={routes.guide.checklist}
      />
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <GuideActionCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            imageAlt={card.imageAlt}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

const cards = [
  {
    title: 'Flight',
    description: 'Departure times & airline info',
    image: checklistIcon,
    imageAlt: 'Flight Action Icon',
    link: routes.guide.checklist,
  },
  {
    title: 'Hotel',
    description: 'Bookings & reviews',
    image: checklistIcon,
    imageAlt: 'Hotel Action Icon',
    link: routes.guide.checklist,
  },
  {
    title: 'Food',
    description: 'Places to eat & local spots',
    image: checklistIcon,
    imageAlt: 'Food Action Icon',
    link: routes.guide.checklist,
  },
];
