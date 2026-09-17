import { GuideResourceItem } from './GuideResourceItem';

interface GuideResourceProps {
  title: string;
}

export const GuideResource = ({ title }: GuideResourceProps) => {
  return (
    <div className="flex flex-col">
      <div>{title}</div>
      <div className="flex flex-col rounded-4xl border p-4">
        <GuideResourceItem />
      </div>
    </div>
  );
};
