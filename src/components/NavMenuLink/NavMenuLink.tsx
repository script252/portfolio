import { ReactNode } from "react";
import { NavLink } from 'react-router-dom';

interface Props {
    children?: ReactNode;
    href?: string;
}

export function NavMenuLink({href='/', children}: Props) {
    return (
      <NavLink to={href}>
      {({ isActive, isPending, isTransitioning }) => (
        <div className="px-4 flex items-center items-baseline ">
          <div className={`transition-all ${isActive ? "rotate-180 fill-p-tan-light-700" : "fill-p-metal-700"}`}>
            <svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.07179 0.499999L14 12.5L0.143586 12.5L7.07179 0.499999Z" fill="color"/>
            </svg>
          </div>
          <h2 className={`transition-all active:text-p-tan-light-700 hover:text-white pl-4 ${isActive ? "text-p-tan-light-700" : ""}`}>
            {children}
          </h2>
        </div>
      )}
      </NavLink>
    );
  }