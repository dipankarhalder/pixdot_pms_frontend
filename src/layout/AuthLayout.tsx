import { Outlet, Navigate } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Logo } from '@/shared/logo';

export const AuthLayout = () => {
  const authTokenize = localStorage.getItem('authToken');

  if (authTokenize) {
    return <Navigate to={paths.admin} replace />;
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-semibold"
          >
            <Logo />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-[380px]">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="bg-muted app_auth_bg relative hidden lg:block"></div>
    </div>
  );
};
