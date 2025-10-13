import { Outlet, Navigate } from 'react-router-dom';
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { SidebarLeft } from '@/shared/sidebar';
import { paths } from '@/config/paths';

export const AdminLayout = () => {
  const authTokenize = localStorage.getItem('authToken');

  if (!authTokenize) {
    return <Navigate to={paths.login} replace />;
  }

  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};
