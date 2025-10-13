import * as React from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { sidebarData as data } from '@/config/sidebar';
import { NavMain } from './nav-main';
import { TeamSwitcher } from './team-switcher';
import { NavUser } from './nav-user';
import { NavSecondary } from './nav-secondary';

export const SidebarLeft = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary
          items={data.navSecondary}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};
