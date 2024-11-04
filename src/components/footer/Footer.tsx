import { IoLogoLinkedin } from "@react-icons/all-files/io/IoLogoLinkedin";
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail";
import { IoLogoOctocat } from "@react-icons/all-files/io/IoLogoOctocat";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="footer bg-transparent text-neutral-content items-center p-1 md:p-4 fixed bottom-0 left-0 right-0 justify-center gap-1 md:gap-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © Andrew Closson {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
          <a>
            <Link to="https://www.linkedin.com/in/andrew-closson/" target="_blank"><IoLogoLinkedin size="24"/></Link>
          </a>
          <a>
            <Link to="mailto:andrewdavidclosson@gmail.com" target="_blank"><IoMdMail size="24"/></Link>
          </a>
          <a>
            <Link to="https://github.com/script252" target="_blank"><IoLogoOctocat size="24"/></Link>
          </a>
        </nav>
      </footer>
    </>
  )
}