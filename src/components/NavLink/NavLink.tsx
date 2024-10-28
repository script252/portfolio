import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    active?: boolean;
}

export function NavLink({active = false, children}: Props) {
    return (
      <div className="px-4 flex items-center items-baseline ">
        <div className={`${active ? "rotate-180 fill-p-tan-light-700" : "fill-p-metal-700"}`}>
            <svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7.07179 0.499999L14 12.5L0.143586 12.5L7.07179 0.499999Z" fill="color"/>
            </svg>
        </div>
        <div className={`pl-4 ${active ? "text-p-tan-light-700" : ""}`}>
            {children}
        </div>
      </div>
    );
  }