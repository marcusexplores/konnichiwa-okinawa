import { NavBar } from './NavBar';
import { NavMenu } from './NavMenu';
import { NavRoute } from './types';

interface NavigationProps {
  routes: NavRoute[];
}

export const Navigation = ({ routes }: NavigationProps) => {
  return (
    <>
      <NavBar routes={routes} className="hidden md:block" />
      <NavMenu routes={routes} className="md:hidden" />
    </>
  );
};
