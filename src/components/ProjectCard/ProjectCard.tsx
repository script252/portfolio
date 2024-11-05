import { LinkIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import placeholderScreenshot from '../../../assets/placeholder-screenshot.jpg';

export type Props = {
  title?: string,
  imageUrl?: string,
  href?: string,
  tags?: string[],
  children?: ReactNode,
}

type LinkWrapProps = {
  children?: ReactNode
}

export function ProjectCard({
  title, 
  imageUrl = placeholderScreenshot, 
  href = undefined, 
  tags = [], 
  children
}: Props) {

  const LinkWrap = ({children}: LinkWrapProps): ReactNode => {
    return (
      <>
        {href ? <Link to={href} target="_blank">{children}</Link> : children}
      </>
    )
  }

  return (
    <>
      <div className="card bg-p-metal-800 rounded-none w-90 sm:w-90 lg:w-90 xl:w-96">
        <figure className="border-b-0 border-p-metal-500">
          <img
            className="object-cover h-72 w-full "
            src={imageUrl}
            alt="Screenshot" />
        </figure>
        <div className="card-body px-8 pt-8 pb-4 shadow-xl">
          <LinkWrap><h2 className="card-title text-p-tan-light-700">{title}{href && <LinkIcon width={20}/>}</h2></LinkWrap>
          {children}
          <div className="card-actions justify-end">
            {tags.map(card => (
              <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">{card}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;