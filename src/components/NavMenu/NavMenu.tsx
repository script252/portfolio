import { NavMenuLink } from '../NavMenuLink/NavMenuLink';

export function NavMenu() {
  return (
    <>
      <nav className="flex items-center fixed top-0 left-0 right-0 pt-8" >
        <div className="px-4 flex mx-auto">
          <NavMenuLink href="/">About</NavMenuLink>
          <NavMenuLink href="/experience">Experience</NavMenuLink>
          <NavMenuLink href="/work">Work</NavMenuLink>
        </div>
      </nav>
    </>
  );
}