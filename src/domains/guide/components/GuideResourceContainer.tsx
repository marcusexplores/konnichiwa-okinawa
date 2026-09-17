import { GuideResource } from './GuideResource';

export const GuideResourceContainer = () => {
  return (
    <>
      {resources.map((resource, index) => (
        <GuideResource key={index} title={resource.title} />
      ))}
    </>
  );
};

const resources = [
  {
    title: 'Payment',
  },
  {
    title: 'Communication',
  },
];
