import type { FC } from 'react';
import { Logo } from '@/shared/logo';
// import { NavSearch } from './nav-search';

export const TeamSwitcher: FC = () => {
  return (
    <>
      <div className="app_sidebar mb-4 w-full px-3 py-2">
        <Logo />
      </div>
      {/* <NavSearch /> */}
    </>
  );
};
