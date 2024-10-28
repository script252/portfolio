import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, NavLink, useLocation } from 'react-router-dom';
import { NavMenu } from '../NavMenu/NavMenu';

type TransitionState = 'in' | 'out' | 'idle'

const Loading = () => (

    <div className="loading loading-infinity loading-lg p-4 text-center"/>
  );

const IndexScreen = lazy(() => import('~/pages/Index'));
const Page404Screen = lazy(() => import('~/pages/404'));
const ExperienceScreen = lazy(() => import('~/pages/Experience'));
const WorkScreen = lazy(() => import('~/pages/Work'));

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
      <div className="min-h-screen flex m-auto justify-center items-center pb-20">
        <div
          className={` ${state === 'out' ? "animate-transition-out" : "animate-transition-in"}`}
          onTransitionEnd={() => {
            console.log('Transition ended');
            if (state === 'out') {
              setState('in');
              setLocation(currentLocation);
            }
          }}
          onAnimationEnd={() => {
            console.log('Animation ended');
            if (state === 'out') {
              setState('in');
              setLocation(currentLocation);
            }
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
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
          element: <IndexScreen />,
        },
        {
          path: 'experience',
          element: <ExperienceScreen />,
        },
        {
          path: 'work',
          element: <WorkScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
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
