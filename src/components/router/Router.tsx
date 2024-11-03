import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, NavLink, useLocation, useSearchParams, useNavigation } from 'react-router-dom';
import { NavMenu } from '../NavMenu/NavMenu';
import { Footer } from '../footer/Footer';

import Index from '../../pages/Index';
import Page404 from '../../pages/404';
import Experience from '../../pages/Experience';
import Work from '../../pages/Work';
import Personal from '../../pages/Personal';

type TransitionState = 'in' | 'out' | 'idle'

const Loading = () => (

    <div className="loading loading-infinity loading-lg p-4 text-center"/>
  );

const basename = import.meta.env.PUBLIC_URL || '/portfolio';
console.log('Base name: ', basename);

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
      <div className="min-h-screen flex m-auto justify-center items-center pb-20 w-screen">
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
