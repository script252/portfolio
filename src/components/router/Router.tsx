import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import { NavLink } from '../NavLink/NavLink';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/pages/Index'));
const Page404Screen = lazy(() => import('~/pages/404'));

function Layout() {
  return (
    <div className="">
      <nav className="flex items-center fixed top-0 left-0 right-0 pt-8" >
        <div className="px-4 flex mx-auto">
          <NavLink active>About</NavLink>
          <NavLink>Experience</NavLink>
          <NavLink>Work</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
