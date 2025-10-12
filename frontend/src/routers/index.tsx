import { createBrowserRouter } from 'react-router-dom';

import { paths } from '@/config/paths';
import { AuthLayout } from '@/layout/AuthLayout';

import { ErrorPage } from '@/pages/error';
import { SigninPage } from '@/pages/auth/SigninPage';
import { SignupPage } from '@/pages/auth/SignupPage';
import { ForgotPassPage } from '@/pages/auth/ForgotPassPage';

export const routers = createBrowserRouter([
  {
    path: paths.login,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SigninPage /> },
      { path: paths.register, element: <SignupPage /> },
      { path: paths.forgot, element: <ForgotPassPage /> },
    ],
  },
]);
