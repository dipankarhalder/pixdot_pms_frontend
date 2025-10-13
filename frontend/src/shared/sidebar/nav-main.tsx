import { type LucideIcon } from 'lucide-react';

export const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) => {
  console.log(items);

  return <div>nav-main</div>;
};
