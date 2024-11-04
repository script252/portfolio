import { Bars3Icon } from '@heroicons/react/24/solid';
import { NavMenuLink } from '../NavMenuLink/NavMenuLink';
import { useState, useCallback, useRef } from 'react';

export function NavMenu() {
  const menuRef = useRef<any>(null);

  const handleNav = useCallback((e:any) => {
    menuRef?.current?.removeAttribute('open');
  }, []);

  return (
    <>
      <nav className="flex items-center fixed top-0 left-0 right-0 py-8 hidden md:flex z-10" >
        <div className="px-4 flex mx-auto flex-col md:flex-row">
          <NavMenuLink href="/">About</NavMenuLink>
          <NavMenuLink href="/experience">Experience</NavMenuLink>
          <NavMenuLink href="/work">Work</NavMenuLink>
          <NavMenuLink href="/personal">Personal</NavMenuLink>
        </div>
      </nav>
      <nav className="visible md:hidden flex items-center fixed top-0 left-0 right-0 py-0 justify-end z-10" >
        <details className="dropdown dropdown-bottom" ref={menuRef}>
          <summary tabIndex={0} role="button" className="btn bg-p-metal-800 text-white/75 rounded-none w-screen border-0 no-animation flex flex-row justify-start active:bg-p-metal-700">
            <div className="w-6"><Bars3Icon/></div>
          </summary>
          <ul tabIndex={0} className="dropdown-content menu bg-p-metal-950 z-10 p-0 [&_li>*]:rounded-none w-screen">
            <li onClick={handleNav}><NavMenuLink href="/">About</NavMenuLink></li>
            <li onClick={handleNav}><NavMenuLink href="/experience">Experience</NavMenuLink></li>
            <li onClick={handleNav}><NavMenuLink href="/work">Work</NavMenuLink></li>
            <li onClick={handleNav}><NavMenuLink href="/personal">Personal</NavMenuLink></li>
          </ul>
        </details>
      </nav>
    </>
  );
}