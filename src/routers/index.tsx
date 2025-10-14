import { createBrowserRouter } from 'react-router-dom';

import { paths } from '@/config/paths';
import { AuthLayout } from '@/layout/AuthLayout';
import { AdminLayout } from '@/layout/AdminLayout';

import { ErrorPage } from '@/pages/error';
import { SigninPage } from '@/pages/auth/SigninPage';
import { SignupPage } from '@/pages/auth/SignupPage';
import { OtpPage } from '@/pages/auth/OtpPage';
import { ForgotPassPage } from '@/pages/auth/ForgotPassPage';
import { DashboardPage } from '@/pages/main/DashboardPage';

export const routers = createBrowserRouter([
  {
    path: paths.login,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SigninPage /> },
      { path: paths.register, element: <SignupPage /> },
      { path: paths.otp, element: <OtpPage /> },
      { path: paths.forgot, element: <ForgotPassPage /> },
    ],
  },
  {
    path: paths.admin,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
]);
