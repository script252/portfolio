import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, NavLink, useLocation, useSearchParams, useNavigation } from 'react-router-dom';
import { NavMenu } from '../NavMenu/NavMenu';
import { Footer } from '../Footer/Footer';

import Index from '../../pages/Index';
import Page404 from '../../pages/404';
import Experience from '../../pages/Experience';
import Work from '../../pages/Work';
import Personal from '../../pages/Personal';

type TransitionState = 'in' | 'out' | 'idle'

const Loading = () => (

    <div className="loading loading-infinity loading-lg p-4 text-center"/>
  );

const basename = import.meta.env.PUBLIC_URL || '';

// const IndexScreen = lazy(() => import('~/pages/Index'));
// const Page404Screen = lazy(() => import('~/pages/404'));
// const ExperienceScreen = lazy(() => import('~/pages/Experience'));
// const WorkScreen = lazy(() => import('~/pages/Work'));
// const PersonalScreen = lazy(() => import('~/pages/Personal'));

interface LayoutProps {
  state: TransitionState,
  setState: any,
  currentLocation: any,
  setLocation: any,
}

function Layout({state, setState, currentLocation, setLocation}: LayoutProps) {
  return (
    <>
      <NavMenu />
      <div className="h-svh flex mx-auto justify-center items-center pb-28 w-screen overflow-hidden no-scrollbar">
        <div className="fixed left-0 right-0 top-12 bottom-20 md:relative overflow-y-auto sm:no-scrollbar p-2 md:p-8 w-svh overflow-x-visible z-0">
          <div
            className={` ${state === 'out' ? "animate-transition-out" : "animate-transition-in"}`}
            onTransitionEnd={() => {
              if (state === 'out') {
                setState('in');
                setLocation(currentLocation);
              }
            }}
            onAnimationEnd={() => {
              if (state === 'out') {
                setState('in');
                setLocation(currentLocation);
              }
            }}
          >
          
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export const Router = () => {
  return (
    <BrowserRouter basename={`${basename}`}>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {

  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location)

  const [transitionState, setTransitionState] = useState<TransitionState>('in')

  useEffect(() => {
    if (location !== currentLocation) setTransitionState("out");
  }, [location, currentLocation]);

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout 
        state={transitionState} setState={setTransitionState} 
        currentLocation={location} setLocation={setCurrentLocation}
        />,
      //loader: async () => {},
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: 'about',
          element: <Index />,
        },
        {
          path: 'experience',
          element: <Experience />,
        },
        {
          path: 'work',
          element: <Work />,
        },
        {
          path: 'personal',
          element: <Personal />,
        },
        {
          path: '*',
          element: <Page404 />,
        },
        {
          path: 'loading',
          element: <Loading />,
        },
      ],
    },
  ];

  

  const element = useRoutes(routes, currentLocation);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
